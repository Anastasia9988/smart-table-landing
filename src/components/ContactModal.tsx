import { useState, type SubmitEventHandler } from "react";

type ContactModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [status, setStatus] = useState<FormStatus>("idle");

    if (!isOpen) {
        return null;
    }

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setStatus("loading");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") || "").trim(),
            phone: String(formData.get("phone") || "").trim(),
            comment: String(formData.get("comment") || "").trim(),
        };

        try {
            const response = await fetch("/.netlify/functions/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to send form");
            }

            setStatus("success");
            form.reset();
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="contactModal" onClick={(event) => event.stopPropagation()}>
                <button className="modalClose" type="button" onClick={onClose}>
                    ×
                </button>

                <p className="eyebrow">Заявка на пилот</p>

                <h2>Обсудим Smart Table для вашего ресторана</h2>

                <p className="modalLead">
                    Оставьте контакты — мы свяжемся, обсудим формат ресторана, пилот и
                    возможные доработки под ваши задачи.
                </p>

                <form className="contactForm" onSubmit={handleSubmit}>
                    <label>
                        Имя
                        <input
                            name="name"
                            type="text"
                            placeholder="Например, Александр"
                            required
                        />
                    </label>

                    <label>
                        Телефон
                        <input
                            name="phone"
                            type="tel"
                            placeholder="+7 999 123-45-67"
                            required
                        />
                    </label>

                    <label>
                        Комментарий
                        <textarea
                            name="comment"
                            placeholder="Например: хотим пилот на 5 столов, ресторан в Москве"
                            rows={4}
                        />
                    </label>

                    <button className="primaryButton formSubmit" type="submit">
                        {status === "loading" ? "Отправляем..." : "Отправить заявку"}
                    </button>

                    {status === "success" && (
                        <p className="formMessage successMessage">
                            Заявка отправлена. Скоро свяжемся!
                        </p>
                    )}

                    {status === "error" && (
                        <p className="formMessage errorMessage">
                            Не получилось отправить заявку. Попробуйте ещё раз или напишите в
                            Telegram.
                        </p>
                    )}
                </form>

                <div className="modalContacts">
                    <span>Можно написать напрямую:</span>

                    <a href="https://t.me/alexmarlo" target="_blank" rel="noreferrer">
                        @alexmarlo
                    </a>

                    <a href="https://t.me/znbiz" target="_blank" rel="noreferrer">
                        @znbiz
                    </a>

                    <a
                        href="https://t.me/anastasiaKTech"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @anastasiaKTech
                    </a>
                </div>
            </div>
        </div>
    );
}