import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";

import { Home } from './Components/Home/Home';
import { Login } from './Components/Register and Login/Login';
import { Register } from './Components/Register and Login/Register';
import { MainChat } from './Components/Chat folder/MainChat/MainChat';






function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route>
        <Route index element={<Home />} />

        <Route path="login" element={<Login />} />
        <Route path="chat" element ={<MainChat />} />
        <Route path="register" element={<Register />} />
  
        

        </Route>
      </Routes>

    

      </BrowserRouter>

   

    </div>
  );
}

export default App;
