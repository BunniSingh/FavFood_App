import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style['navbar']}>
            <div className={style.logo}>
                <img src="https://flowbite.com/docs/images/logo.svg" alt="logo"/>
                 <h1 className={style.title}>FavFood</h1>
            </div>
            
            <ul className={style.menu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/quotes">Quote</Link></li>
                <li><Link to="/restaurants">Resturants</Link></li>
                <li><Link to="/food">Food</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            
            <div className={style["user-account"]}>
                <a href="#"><i className="fa-solid fa-user"></i> Get started</a>
                <div className={style.hamburger}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;