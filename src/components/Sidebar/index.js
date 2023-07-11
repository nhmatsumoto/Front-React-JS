import { Link } from 'react-router-dom';
import './style.css';

export default function Sidebar() {
    return (
        <nav className="sidebar">
          <ul>
            <li>
                <Link to={`contato`}>Contato</Link>
            </li>
            <li>
                <Link to={`home`}>Home</Link>
            </li>
            <li>
                <Link to={`login`}>Login</Link>
            </li>
          </ul>
        </nav>
    );
}