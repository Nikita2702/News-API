
// import './App.css';
// import Navbar from './components/Navbar';
// import React from 'react'
// import News from './components/News';
// import LoadingBar from 'react-top-loading-bar';
// import {
//  BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

// export default class App  {
//   pagesize=5;
//   // apiKey=process.env.REACT_APP_NEWS_API;
//   apiKey="07d60fa5c7db4221ab1dabe26ee1171e";
//   state={
//     progress:0
//   }
//   setProgress=(progress)=>{
//      setState({progress:progress})
//   }
//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//               <Navbar></Navbar>
//               <LoadingBar
//                   color='#f11946'
//                   progress={ state.progress}
//                  height={3}
//                 />
//             <Routes>
//               {/* <Route element={<Navbar/>}></Route> */}
//                 <Route exact path='/' element={<News setProgress={ setProgress} apiKey={ apiKey} key="general" pageSize={ pagesize} country="in" category="general"></News>}></Route> 
//                 <Route exact path='/business' element={<News setProgress={ setProgress} apiKey={ apiKey} key="business" pageSize={ pagesize} country="in" category="business"></News>}></Route>
//                 <Route exact path='/entertainment' element={<News setProgress={ setProgress} apiKey={ apiKey} key="entertainment" pageSize={ pagesize} country="in" category="entertainment"></News>}></Route>
//                 <Route exact path='/general' element={<News setProgress={ setProgress} apiKey={ apiKey} key="general" pageSize={ pagesize} country="in" category="general"></News>}></Route>
//                 <Route exact path='/health' element={<News setProgress={ setProgress} apiKey={ apiKey} key="health" pageSize={ pagesize} country="in" category="health"></News>}></Route>
//                 <Route exact path='/science' element={<News setProgress={ setProgress} apiKey={ apiKey} key="science" pageSize={ pagesize} country="in" category="science"></News>}></Route>
//                 <Route exact path='/sports' element={<News setProgress={ setProgress} apiKey={ apiKey} key="sports" pageSize={ pagesize} country="in" category="sports"></News>}></Route>
//                 <Route exact path='/technology' element={<News setProgress={ setProgress} apiKey={ apiKey} key="technology" pageSize={ pagesize} country="in" category="technology"></News>}></Route>
//             </Routes>
//         </BrowserRouter>
//       </div>
//     )
//   }
// }



import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import { useState } from 'react';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
 BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App =()=> {
  const pagesize=5;
  // apiKey=process.env.REACT_APP_NEWS_API;
  const apiKey="07d60fa5c7db4221ab1dabe26ee1171e";
  const [progress, setProgress] = useState(0)
 
  
    return (
      <div>
        <BrowserRouter>
              <Navbar></Navbar>
              <LoadingBar
                  color='#f11946'
                  progress={progress}
                 height={3}
                />
            <Routes>
              {/* <Route element={<Navbar/>}></Route> */}
                <Route exact path='/' element={<News setProgress={ setProgress} apiKey={ apiKey} key="general" pageSize={ pagesize} country="in" category="general"></News>}></Route> 
                <Route exact path='/business' element={<News setProgress={ setProgress} apiKey={ apiKey} key="business" pageSize={ pagesize} country="in" category="business"></News>}></Route>
                <Route exact path='/entertainment' element={<News setProgress={ setProgress} apiKey={ apiKey} key="entertainment" pageSize={ pagesize} country="in" category="entertainment"></News>}></Route>
                <Route exact path='/general' element={<News setProgress={ setProgress} apiKey={ apiKey} key="general" pageSize={ pagesize} country="in" category="general"></News>}></Route>
                <Route exact path='/health' element={<News setProgress={ setProgress} apiKey={ apiKey} key="health" pageSize={ pagesize} country="in" category="health"></News>}></Route>
                <Route exact path='/science' element={<News setProgress={ setProgress} apiKey={ apiKey} key="science" pageSize={ pagesize} country="in" category="science"></News>}></Route>
                <Route exact path='/sports' element={<News setProgress={ setProgress} apiKey={ apiKey} key="sports" pageSize={ pagesize} country="in" category="sports"></News>}></Route>
                <Route exact path='/technology' element={<News setProgress={ setProgress} apiKey={ apiKey} key="technology" pageSize={ pagesize} country="in" category="technology"></News>}></Route>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }

export default App;


