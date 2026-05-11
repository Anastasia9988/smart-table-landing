const PILOT_LINK = "https://t.me/alexmarlo";

export function Header() {
    return (
        <header className="header">
            <a className="logo" href="#top" aria-label="Smart Table">
                <span className="logoIcon">S</span>
                <span>Smart Table</span>
            </a>

            <nav className="nav">
                <a href="#features">Возможности</a>
                <a href="#how">Как это работает</a>
                <a href="#investor">Для инвестора</a>
                <a href="#flex">Гибкость</a>
                <a href="#contacts">Контакты</a>
            </nav>

            <a
                className="headerButton"
                href={PILOT_LINK}
                target="_blank"
                rel="noreferrer"
            >
                Обсудить пилот <span>→</span>
            </a>
        </header>
    );
}