import './App.css';
import Login from './pages/Login';
import Register from "./pages/Register"
import { Route, Routes } from "react-router-dom"
import { DataProvider } from './context/dataContext';
import Profile from './pages/Profile';
function App() {
  return (
    <DataProvider>
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registrar" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
