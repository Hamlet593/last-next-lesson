import Link from 'next/link';
import {SiBurgerking} from 'react-icons/si';
import {GiHamburgerMenu} from 'react-icons/gi';
import styles from '../styles/Navbar.module.scss';

const Header = () => {
  return (
      <header>
        <nav className={`${styles.test1} navbar navbar-expand-lg navbar-dark bg-dark`}>
            <div className="container-fluid">
                <Link href='/'><a className="navbar-brand"><SiBurgerking/></a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <GiHamburgerMenu />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link href='/'>
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/about'>
                            <a className="nav-link" aria-current="page" href="#">About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/review'>
                            <a className="nav-link" aria-current="page" href="#">Review</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/burgers'>
                            <a className="nav-link" aria-current="page" href="#">Burgers</a>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </header>
  )
}

export default Header