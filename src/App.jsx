import logo from './logo.svg';
import './App.css';
import LayoutHeader from './layouts/LayoutHeader/LayoutHeader'
import Register from './components/Register/Register';

function App() {
  return (
    <div className='main'>
      <LayoutHeader/>
      <Register/>
    </div>
  );
}

export default App;
