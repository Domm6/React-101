import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo"> Movie Picker</h1>
            <div className="links">
                <Link to="/">Movie Catalog</Link>
                <Link to="/movie">Pick Movie</Link>
                <Link to="/add">Add Movie</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
}

export default Header;
