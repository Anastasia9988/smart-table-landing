import { TabletMockup } from "./TabletMockup";

type HeroSectionProps = {
    onOpenContactForm: () => void;
};

export function HeroSection({ onOpenContactForm }: HeroSectionProps) {
    return (
        <section className="section heroSection" id="features">
            <div className="sectionText heroText">
                <p className="eyebrow">Для ресторанов</p>

                <h1>
                    Заказ и оплата <br />
                    за столом — <br />
                    без ожидания
                </h1>

                <p className="lead">
                    Гость выбирает блюда на планшете, отправляет заказ на кухню и
                    оплачивает картой. Ресторан получает более удобный сервис и понятный
                    формат для пилота.
                </p>

                <div className="actions">
                    <button className="primaryButton" type="button" onClick={onOpenContactForm}>
                        Запросить демо <span>→</span>
                    </button>

                    <a className="secondaryButton" href="#how">
                        <span className="playIcon">▶</span> Посмотреть сценарий
                    </a>
                </div>

                <div className="featureChips">
                    <div>
                        <span>▯</span>
                        Планшет <br /> на каждом столе
                    </div>

                    <div>
                        <span>▭</span>
                        Оплата <br /> картой
                    </div>

                    <div>
                        <span>≡</span>
                        Доработка <br /> под клиента
                    </div>
                </div>
            </div>

            <div className="heroVisual">
                <div className="magicPath" />

                <div className="floatingCard floatingCardMenu">
                    <span className="floatingIcon">🍽</span>
                    <strong>Меню</strong>
                    <p>Гость выбирает блюда на планшете</p>
                </div>

                <div className="floatingCard floatingCardOrder">
                    <span className="floatingIcon">⌂</span>
                    <strong>Заказ</strong>
                    <p>Заказ уходит на кухню</p>
                </div>

                <div className="floatingCard floatingCardPay">
                    <span className="floatingIcon">▭</span>
                    <strong>Оплата</strong>
                    <p>Оплата картой за пару секунд</p>
                </div>

                <TabletMockup />

                <div className="dessertPlate" />
            </div>
        </section>
    );
}