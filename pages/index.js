import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <Link href='/burgers'><a>All burgers</a></Link>
      <Footer />
    </div>
  )
}