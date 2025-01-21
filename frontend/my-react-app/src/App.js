import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Outlet />
    </ContextProvider>
  );
}

export default App;
