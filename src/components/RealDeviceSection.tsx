export function RealDeviceSection() {
    return (
        <section className="section realDeviceSection" id="device">
            <div className="sectionText realDeviceText">
                <p className="eyebrow">Устройство</p>

                <h2>
                    Реальный планшет <br />
                    для ресторанного стола
                </h2>

                <p className="lead">
                    Smart Table — это физическое устройство для зала ресторана. Его можно
                    установить на столы, чтобы гость видел меню, оформлял заказ и переходил
                    к оплате в одном понятном сценарии.
                </p>
            </div>

            <div className="realDeviceVisual">
                <div className="deviceGlow" />

                <div className="devicePhotoCard devicePhotoFront">
                    <img
                        src="/pictures/images/tablet-front.jpg"
                        alt="Фронтальный вид планшета Smart Table"
                    />
                    <span>Вид со стороны гостя</span>
                </div>

                <div className="devicePhotoCard devicePhotoBack">
                    <img
                        src="/pictures/images/tablet-back.jpg"
                        alt="Задний вид планшета Smart Table"
                    />
                    <span>Корпус и док-станция</span>
                </div>
            </div>
        </section>
    );
}