// CHIMERA AI — Mimari Ön-Analiz formu için Cloudflare Worker.
// Form POST'unu (Contact.astro) alır, Email Routing send_email binding'i ile
// lead'i doğrulanmış gelen kutusuna (Google Workspace) yollar. Üçüncü-taraf
// form SaaS'ı YOK — veri Cloudflare edge'de işlenir, kendi kutuna gelir.
//
// Kurulum: bkz. ../README.md. Bağımlılık yok (cloudflare:email yerleşik).

import { EmailMessage } from "cloudflare:email";

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

/** UTF-8 string → base64 (Türkçe diakritikler için güvenli). */
function b64utf8(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}

/** RFC 5322 + 2047: Türkçe başlık/gövdeyi doğru kodlayan ham e-posta. */
function buildRaw({ from, to, replyTo, subject, text }) {
  const body = b64utf8(text).replace(/(.{76})/g, "$1\r\n");
  return [
    `From: Chimera AI Web <${from}>`,
    `To: ${to}`,
    `Reply-To: ${replyTo}`,
    `Subject: =?UTF-8?B?${b64utf8(subject)}?=`,
    `Message-ID: <${crypto.randomUUID()}@chimera-ai.com.tr>`,
    `Date: ${new Date().toUTCString()}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/plain; charset=UTF-8`,
    `Content-Transfer-Encoding: base64`,
    ``,
    body,
    ``,
  ].join("\r\n");
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default {
  async fetch(request, env) {
    if (request.method !== "POST") return json({ ok: false, error: "method" }, 405);

    let form;
    try {
      form = await request.formData();
    } catch {
      return json({ ok: false, error: "form" }, 400);
    }

    // Honeypot: bot doldurursa sessizce başarı dön (gerçek kullanıcı bu alanı görmez).
    if ((form.get("_gotcha") || "").toString().trim()) return json({ ok: true, skipped: true });

    const name = (form.get("name") || "").toString().trim();
    const org = (form.get("org") || "").toString().trim();
    const email = (form.get("email") || "").toString().trim();
    const message = (form.get("message") || "").toString().trim();

    if (!name || !org || !email || !EMAIL_RE.test(email)) {
      return json({ ok: false, error: "invalid" }, 400);
    }
    if (name.length > 200 || org.length > 200 || email.length > 200 || message.length > 5000) {
      return json({ ok: false, error: "too_long" }, 400);
    }

    const raw = buildRaw({
      from: env.LEAD_FROM,
      to: env.LEAD_TO,
      replyTo: email,
      subject: `Mimari Ön-Analiz talebi — ${org}`,
      text:
        `Ad Soyad: ${name}\n` +
        `Kurum:    ${org}\n` +
        `E-posta:  ${email}\n\n` +
        `Mesaj:\n${message || "(boş)"}\n`,
    });

    try {
      await env.LEAD.send(new EmailMessage(env.LEAD_FROM, env.LEAD_TO, raw));
    } catch (err) {
      console.error("send_email failed:", err && err.message);
      return json({ ok: false, error: "send_failed" }, 502);
    }

    return json({ ok: true });
  },
};
