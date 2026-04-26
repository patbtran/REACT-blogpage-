import { Link } from "react-router-dom";
import { useUsername } from "../authWrapper/AuthContext";


function Header() {
    const username = useUsername();
    return (
        <div className="bg-sky-600 text-white p-4">
            <h1 className="text-4xl">Dog widda Blog</h1>
            <nav>
                <ul className="flex justify-center space-x-4 mt-2">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        
                        {username ? <p>Logout</p> : <Link to="/login">Login</Link>}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;