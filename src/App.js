import {
  Blog,
  Header,
  Whatgpt3,
  Footer,
  Features,
  Possibility,
} from './containers';

import { Brand, Cta, Navbar } from './componenets';
import './index.css';
import './App.css';
function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
