import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <>
        <nav className="navbar">
            <h1>Nishi Blog</h1>
            <div className="links">
                <Link to="/" className="Home">Home</Link>
                <Link to="/create">Create Blog</Link>
            </div>
        </nav>
        </>
    );
}
    
export default Navbar;
