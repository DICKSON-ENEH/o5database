
import About from './components/About/About';
import Home from './components/Home';
import Ofive from './components/o5/Ofive'
import Data from  './components/database/Data'
import Create from './components/o5/Create/Create'
import Reviews from "./components/Reviews/Reviews"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Overview from './components/Reviews/Overview'
const App=()=> {
  return (
   <BrowserRouter>
  

   <Routes>

     <Route path="/" element={<Home/>}/>
     <Route path="/data" element={<Data/>}/>
     <Route path="/o5datas" element={<Ofive/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/create" element={<Create/>}/>
     <Route path="/review" element={<Reviews/>}/>
     <Route path="/overview" element={<Overview/>}/>
   </Routes>
   </BrowserRouter>
      
   
  );
}

export default App;
