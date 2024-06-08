import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTask from './Components/AddTask';


function App() {
  return (
    <div className="App">
    {/*  <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Login/>}></Route>
          <Route path='Dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter> */}
      <AddTask/>
    </div>
  );
}

export default App;
