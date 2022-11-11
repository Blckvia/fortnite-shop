function Footer() {
    return (
        <footer className='page-footer cyan lighten-1'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className='github grey-text text-lighten-4 right'
                        href='https://github.com/Blckvia/fortnite-shop'
                        target='_blank'
                        rel='noreferrer'
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
