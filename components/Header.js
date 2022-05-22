import Link from 'next/link';
import {SiBurgerking} from 'react-icons/si';

const Header = () => {
  return (
      <>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link href='/'>
                        <a className="navbar-brand">
                            <SiBurgerking />
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href='/about'>
                                    <a className="nav-link active" aria-current="page">About us</a>
                                </Link>
                            </li>
                            <Link href='/burgers'>
                                <li className="nav-item">
                                    <a className="nav-link">Burgers</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
      </>
  )
}

export default Header