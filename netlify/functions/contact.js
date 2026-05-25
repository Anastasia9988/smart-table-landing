export default async function handler(request) {
    if (request.method !== "POST") {
        return new Response(
            JSON.stringify({ message: "Method Not Allowed" }),
            {
                status: 405,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }

    try {
        const { name, phone, comment } = await request.json();

        if (!name || !phone) {
            return new Response(
                JSON.stringify({
                    message: "Name and phone are required",
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        }

        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!token || !chatId) {
            return new Response(
                JSON.stringify({
                    message: "Telegram env vars are missing",
                }),
                {
                    status: 500,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
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

        const telegramData = await telegramResponse.json();

        if (!telegramResponse.ok) {
            return new Response(
                JSON.stringify({
                    message: "Telegram request failed",
                    telegramError: telegramData,
                }),
                {
                    status: 502,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        }

        return new Response(
            JSON.stringify({
                message: "Success",
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                message: "Server error",
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}