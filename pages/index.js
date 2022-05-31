import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className='container-lg text-center'>
      <h1 className={`${styles.title} font-effect-fire-animation my-5`}>Eat me I'm a tasty</h1>
      <p className='fs-4'>What is the perfect burger ? Fresh lettuce, soft buns, juicy meat. You can argue about other components of the filling, because this is a matter of taste.</p>
      <p className='fs-5'>There are a couple of other factors that affect appetite: prices, quality of service, the right atmosphere of the establishment.</p>
      <Link href='/burgers'>
            <a className={`${styles.a}`}>All burgers</a>
      </Link>
    </div>
  )
}