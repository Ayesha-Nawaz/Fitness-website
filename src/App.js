import './App.css';
import Hero from './component/hero/Hero';
import Program from './component/Program/Program';
import Reasons from './component/Reasons/Reasons';
import Plans from './component/Plans/Plans'
import { Testimonial } from './component/Testimonial/Testimonial';
import { Join } from './component/Join/Join';
import {Footer} from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      <Testimonial/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
