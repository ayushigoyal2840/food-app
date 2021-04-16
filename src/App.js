
import './App.css';
import Banner from './components/Banner';
import Navbar1 from './components/Navbar1'
import ProductContext from './Globals/ProductContext';

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Banner />
      <ProductContext />
      
    </div>
  );
}

export default App;
