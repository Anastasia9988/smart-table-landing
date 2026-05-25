type HeaderProps = {
    onOpenContactForm: () => void;
};

export function Header({ onOpenContactForm }: HeaderProps) {
    return (
        <header className="header">
            <a className="logo" href="#top" aria-label="Smart Table">
                <span className="logoIcon">S</span>
                <span>Smart Table</span>
            </a>

            <nav className="nav">
                <a href="#features">Возможности</a>
                <a href="#device">Устройство</a>
                <a href="#investor">Для инвестора</a>
                <a href="#flex">Гибкость</a>
                <a href="#contacts">Контакты</a>
            </nav>

            <button className="headerButton" type="button" onClick={onOpenContactForm}>
                Обсудить пилот <span>→</span>
            </button>
        </header>
    );
}