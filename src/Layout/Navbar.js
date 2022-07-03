import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {

    const { pathname } = useLocation()

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">

                <h2>
                    <Link to={'/'} className="navbar-brand text-primary"> Book House</Link>
                </h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">

                            <Link to={'/'} state={"active"} className={`nav-link ${pathname === '/' ? 'active' : ""}`} aria-current="page" >Home</Link>

                        </li>
                        <li className="nav-item">
                            <Link to={'/add-book'} state={"active"} className={`nav-link ${pathname === '/add-book' ? 'active' : ""}`}  >Add Book</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/show-books'} state={"active"} className={`nav-link ${pathname === '/show-books' ? 'active' : ""}`} >View Books</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;