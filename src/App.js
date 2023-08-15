
import Login from './components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Forgotpassword from './components/Forgotpassword';
import Home from './components/Home';

function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/src/components/Signup.jsx' element={<Signup/>}/>
      <Route path='/src/components/Forgotpassword.jsx' element={<Forgotpassword />}/>
      <Route path="/src/components/Home.jsx" element={<Home />} />


   
    </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
