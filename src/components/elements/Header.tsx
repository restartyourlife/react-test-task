import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Main page</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/firstpage">First Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/secondpage">Second Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/thirdpage">Third Page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
