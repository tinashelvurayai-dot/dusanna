// Server-only Telegram notifications.
// Reads TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID at call time (never at module scope).

const APP_PREFIX = "🎓 <b>Edusanna</b>\n";

/**
 * Sends a Telegram message to the configured admin chat.
 * Every message is prefixed with the app name "Edusanna" for reference.
 * Fails silently (logs only) so it never blocks the payment / signup flow.
 */
export async function notifyAdminWhatsApp(message: string): Promise<void> {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      console.warn("[notify] Telegram not configured; skipping notification");
      return;
    }
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: APP_PREFIX + message,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[notify] Telegram returned", res.status, body);
    }
  } catch (err) {
    console.error("[notify] Failed to send Telegram notification", err);
  }
}

/** Convenience alias for new callers. */
export const notifyAdminTelegram = notifyAdminWhatsApp;
