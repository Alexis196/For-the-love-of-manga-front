import logo from './logo.svg';
import './App.css';
import LayoutHeader from './layouts/LayoutHeader/LayoutHeader';
import Aside from './components/Aside/Aside';
import Register from './components/Register/Register';

function App() {
  return (
    <div className='main'>
      <LayoutHeader className='header'/>
      <Aside/>
      <Register/>
    </div>
  );
}

export default App;
