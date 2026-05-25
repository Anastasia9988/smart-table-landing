async function handler(event) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed" }),
        };
    }

    try {
        const { name, phone, comment } = JSON.parse(event.body || "{}");

        if (!name || !phone) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "Name and phone are required",
                }),
            };
        }

        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!token || !chatId) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Telegram env vars are missing",
                }),
            };
        }

        const text = [
            "🔥 Новая заявка Smart Table",
            "",
            `Имя: ${name}`,
            `Телефон: ${phone}`,
            `Комментарий: ${comment || "—"}`,
            "",
            "Источник: лендинг",
        ].join("\n");

        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${token}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text,
                }),
            }
        );

        if (!telegramResponse.ok) {
            return {
                statusCode: 502,
                body: JSON.stringify({
                    message: "Telegram request failed",
                }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Success",
            }),
        };
    } catch {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Server error",
            }),
        };
    }
}

export default handler;