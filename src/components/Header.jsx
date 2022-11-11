function Header() {
    return (
        <nav className='cyan darken-2'>
            <div className='nav-wrapper'>
                <a
                    href='!#'
                    className='brand-logo'
                >
                    Fortnite Shop
                </a>
                <ul
                    id='nav-mobile'
                    className='right hide-on-med-and-down'
                ></ul>
                <a
                    className='github right'
                    href='https://github.com/Blckvia/Movies_project.git'
                >
                    GitHub
                </a>
            </div>
        </nav>
    );
}

export { Header };
