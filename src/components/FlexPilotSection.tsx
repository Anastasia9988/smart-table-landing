import { TabletMockup } from "./TabletMockup";

const PILOT_LINK = "https://t.me/alexmarlo";

const flexCards = [
    {
        icon: "▤",
        title: "Подключение к действующей кассе",
        text: "Помогаем связать планшет с текущей системой ресторана.",
    },
    {
        icon: "🍴",
        title: "Настройка меню и оплаты",
        text: "Адаптируем каталог, оплату и сервисные сценарии.",
    },
    {
        icon: "□",
        title: "Акции и бонусы по запросу",
        text: "При необходимости добавляем маркетинговые механики.",
    },
    {
        icon: "▥",
        title: "Отчёты и уведомления",
        text: "Показываем ключевые события и результаты пилота.",
    },
];

const steps = [
    {
        title: "Обсуждаем задачи",
        text: "Понимаем цели и особенности вашего ресторана.",
    },
    {
        title: "Настраиваем решение",
        text: "Адаптируем меню, оплату и интерфейс под задачи.",
    },
    {
        title: "Запускаем в ресторане",
        text: "Подключаем планшеты и обучаем команду.",
    },
    {
        title: "Масштабируем дальше",
        text: "Расширяем на новые зоны и заведения сети.",
    },
];

export function FlexPilotSection() {
    return (
        <section className="section flexSection" id="flex">
            <div className="sectionText">
                <p className="eyebrow">Гибкость и поддержка</p>

                <h2>
                    Готовы адаптировать решение <br />
                    под формат ресторана
                </h2>

                <p className="lead">
                    Начинаем с пилота на нескольких столах и при необходимости дорабатываем
                    интерфейс, меню и сценарии оплаты под задачи клиента.
                </p>

                <div className="flexCardGrid">
                    {flexCards.map((card) => (
                        <article className="flexCard" key={card.title}>
                            <span>{card.icon}</span>

                            <div>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className="pilotVisual">
                <TabletMockup />

                <div className="pilotSteps">
                    <div className="pilotLine" />

                    {steps.map((step, index) => (
                        <article className="pilotStep" key={step.title}>
                            <span className="stepNumber">{index + 1}</span>

                            <div>
                                <h3>{step.title}</h3>
                                <p>{step.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className="ctaPanel" id="contacts">
                <div className="ctaIcon">↗</div>

                <div>
                    <h2>Запустите Smart Table в пилотном ресторане</h2>
                    <p>Начните с нескольких планшетов и проверьте эффект на практике.</p>

                    <div className="contactLinks">
                        <span>Контакты:</span>

                        <a
                            href="https://t.me/alexmarlo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            @alexmarlo
                        </a>

                        <a
                            href="https://t.me/znbiz"
                            target="_blank"
                            rel="noreferrer"
                        >
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

                <div className="ctaButtons">
                    <a
                        className="primaryButton"
                        href={PILOT_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Обсудить пилот <span>→</span>
                    </a>

                    <a
                        className="secondaryButton"
                        href="https://t.me/alexmarlo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Получить презентацию
                    </a>
                </div>
            </div>
        </section>
    );
}