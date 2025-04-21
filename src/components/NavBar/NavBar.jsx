// src/components/NavBar/NavBar.jsx

// 1. Import Link from React Router
import { Link } from 'react-router-dom';

// 2. Define the NavBar component
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/pokemon'>Pokemon</Link>
                </li>
                <li>
                    <Link to="/pokemon/new">New Pokemon</Link>
                </li>

            </ul>
        </nav>
    );
};

// 3. Export the component
export default NavBar;
