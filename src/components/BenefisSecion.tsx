import { TabletMockup } from "./TabletMockup";

const benefits = [
    {
        icon: "⚡",
        title: "Быстрее обслуживание",
        text: "Заказ без ожидания официанта.",
    },
    {
        icon: "☷",
        title: "Меньше рутинных действий",
        text: "Меньше лишних шагов для команды.",
    },
    {
        icon: "▭",
        title: "Удобная оплата",
        text: "Гость оплачивает как ему удобно.",
    },
    {
        icon: "↗",
        title: "Готовность к пилоту",
        text: "Легко запустить и масштабировать.",
    },
];

export function BenefitsSection() {
    return (
        <section className="section benefitsSection" id="investor">
            <div className="sectionText">
                <p className="eyebrow">Для ресторанов</p>

                <h2>
                    Почему Smart Table <br />
                    удобен ресторану
                </h2>

                <p className="lead">
                    Сервис помогает гостю сделать заказ и оплатить его прямо за столом.
                    Команда тратит меньше времени на рутину, а ресторан получает понятный
                    инструмент для пилота и дальнейшего роста.
                </p>

                <div className="benefitGrid">
                    {benefits.map((item) => (
                        <article className="benefitCard" key={item.title}>
                            <span className="benefitIcon">{item.icon}</span>

                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className="flowVisual" id="how">
                <div className="hoverHint">Наведите на экран, чтобы увидеть!</div>

                <div className="interactiveTabletWrap">
                    <TabletMockup variant="list" />
                </div>

                <div className="orderFlow">
                    <article className="flowCard dishFlowCard">
                        <img
                            className="flowDishImage"
                            src="/pictures/images/steak.png"
                            alt="Стейк Рибай"
                        />

                        <h3>Стейк Рибай</h3>
                        <p>Гость выбрал блюдо</p>
                        <strong>1 890 ₽</strong>

                        <button type="button" aria-label="Добавить">
                            +
                        </button>
                    </article>

                    <article className="flowCard">
                        <small>Ваш заказ</small>
                        <h3>Стейк Рибай</h3>
                        <p>1 позиция в заказе</p>
                        <strong>1 890 ₽</strong>

                        <button className="smallGoldButton" type="button">
                            Оформить заказ
                        </button>
                    </article>

                    <article className="flowCard successCard">
                        <span>✓</span>
                        <h3>Оплата прошла успешно</h3>
                        <p>Спасибо! Ждём вас снова.</p>
                    </article>
                </div>

                <div className="flowNote">
                    При наведении заказ проходит путь: <b>выбор → заказ → оплата</b>
                </div>
            </div>
        </section>
    );
}