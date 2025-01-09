// import logo from './logo.svg';

// import Home from "./Components/Home";

// // import '../../backend/server'


// function App() {
//   return (
//     <div className="App">
//       <Home/>
//     </div>
//   );
// }

// export default App;

import React from 'react'
// import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import AllTeachings from './Components/AllTeachings';
import Give from './Components/Give';
import PrayerMeeting from './Components/Services/PrayerMeeting'
import BibleStudy from './Components/Services/BibleStudy';
import DoctrinalStudies from './Components/Services/DoctrinalStudies';
import BooksClub from './Components/Services/BooksClub'
import SundayService from './Components/Services/SundayService';
import SundaySchool from './Components/Ministries/SundaySchool';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/AllTeachings' element={<AllTeachings />}></Route>
        <Route path='/Give' element={<Give />}></Route>
        <Route path='/PrayerMeeting' element={<PrayerMeeting />}></Route>
        <Route path='/BibleStudy' element={<BibleStudy />}></Route>
        <Route path='/DoctrinalStudies' element={<DoctrinalStudies />}></Route>
        <Route path='/BooksClub' element={<BooksClub />}></Route>
        <Route path='/SundayService' element={<SundayService />}></Route>
        <Route path='/SundaySchool' element={<SundaySchool />}></Route>
        {/* <Route path='/BooksClub' element={<BooksClub />}></Route> */}
      </Routes>
    </BrowserRouter> 
  );
}

export default App

