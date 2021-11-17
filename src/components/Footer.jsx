function Footer() {
    return (
        <footer className='page-footer green lighten-4'>
            <div className='container'>
                © {new Date().getFullYear()} Copyright Text
                <a
                    className='grey-text text-lighten-4 right'
                    href='https://github.com/DashaTkachuk/react-shop'
                    target='_blank'
                    rel='noreferrer'
                >
                    Repo
                </a>
            </div>
        </footer>
    );
}

export { Footer };
