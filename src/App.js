import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Developers from './components/Developers';
import Subscribe from './components/Subscribe';

import './App.css';

export default function App() {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <About/>
      <Developers/>
      <Subscribe/>
    </div>
  )
}
