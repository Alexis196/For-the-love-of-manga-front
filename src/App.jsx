import logo from './logo.svg';
import './App.css';
import LayoutHeader from './layouts/LayoutHeader/LayoutHeader';
import Aside from './components/Aside/Aside';

function App() {
  return (
    <div>
      <LayoutHeader className='header'/>
      <Aside/>
    </div>
  );
}

export default App;
