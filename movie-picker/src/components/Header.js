import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo"> Receipt Saver</h1>
            <div className="links">
                <Link to="/movie">Upload Receipt</Link>
                <Link to="/add">Manual upload</Link>
                <Link to="/login">Login</Link>
                <Link to="/Catalog">Display Receipt</Link>

            </div>
        </div>
    );
}

export default Header;
