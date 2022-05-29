import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

export default function Home() {
  return (
    <>
      <h1>About </h1>
      <Link href='/burgers'>
            <a className={`${styles.a}`}>All burgers</a>
      </Link>
    </>
  )
}