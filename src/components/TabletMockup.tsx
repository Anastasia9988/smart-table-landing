type TabletMockupProps = {
    variant?: "grid" | "list";
};

const gridItems = [
    {
        title: "Лосось с овощами",
        price: "1 290 ₽",
        image: "/pictures/images/fish.jpg",
    },
    {
        title: "Том Ям",
        price: "690 ₽",
        image: "/pictures/images/soup.png",
    },
    {
        title: "Поке с тунцом",
        price: "1 190 ₽",
        image: "/pictures/images/poke.png",
    },
    {
        title: "Цыплёнок табака",
        price: "1 480 ₽",
        image: "/pictures/images/chiken.png",
    },
];

const listItems = [
    {
        title: "Стейк Рибай",
        description: "с овощами",
        price: "1 890 ₽",
        image: "/pictures/images/steak.png",
    },
    {
        title: "Завтрак",
        description: "с яйцом и зеленью",
        price: "780 ₽",
        image: "/pictures/images/breakfast.png",
    },
    {
        title: "Том Ям",
        description: "с креветками",
        price: "690 ₽",
        image: "/pictures/images/soup.png",
    },
    {
        title: "Салат с курицей",
        description: "с лёгким соусом",
        price: "760 ₽",
        image: "/pictures/images/salad.png",
    },
    {
        title: "Лосось с овощами",
        description: "на горячем",
        price: "1 290 ₽",
        image: "/pictures/images/fish.jpg",
    },
];

export function TabletMockup({ variant = "grid" }: TabletMockupProps) {
    return (
        <div className="tablet">
            <div className="tabletScreen">
                <div className="tabletTop">
          <span className="tabletTitle">
            {variant === "grid" ? "Меню" : "Каталог меню"}
          </span>
                    <span className="tabletSearch">⌕</span>
                </div>

                <div className="tabletTabs">
                    <span className="active">Популярное</span>
                    <span>Салаты</span>
                    <span>Супы</span>
                    <span>Горячее</span>
                    <span>Десерты</span>
                    <span>Напитки</span>
                </div>

                {variant === "grid" ? (
                    <div className="dishGrid">
                        {gridItems.map((item) => (
                            <article className="dishCard" key={item.title}>
                                <img className="dishImage" src={item.image} alt={item.title} />

                                <div className="dishInfo">
                                    <span>{item.title}</span>
                                    <strong>{item.price}</strong>
                                </div>

                                <button className="dishAdd" type="button" aria-label="Добавить">
                                    +
                                </button>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="dishList">
                        {listItems.map((item) => (
                            <article className="dishRow" key={item.title}>
                                <img className="dishThumb" src={item.image} alt={item.title} />

                                <div>
                                    <span>{item.title}</span>
                                    <small>{item.description}</small>
                                    <strong>{item.price}</strong>
                                </div>

                                <button className="dishAdd" type="button" aria-label="Добавить">
                                    +
                                </button>
                            </article>
                        ))}
                    </div>
                )}

                <div className="cartBar">
                    <span>🛒 В корзине · 3 блюда</span>
                    <strong>3 870 ₽</strong>
                </div>
            </div>
        </div>
    );
}