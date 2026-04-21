import "./Navbar.css"
function Navbar(){
    return(
        <div className="navbar">
            <div className="nav-logo">BMW</div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li id="nav-contact">Contact</li>
            </ul>
        </div>
    )
}
export default Navbar