import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import About from './pages/About'
import Signup from './pages/Signup'
 
export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element= {<Home />} />
    <Route path="/Profile" element= {<Profile />} />
    <Route path="/Signin" element= {<Signin />} />
    <Route path="/Signup" element= {<Signup />} />
    <Route path="/About" element= {<About />} />
        
    
  </Routes>
  </BrowserRouter>;
   
  
}
