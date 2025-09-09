import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import TopAd from './components/Main/TopAd';
import Header from './components/Bar/Header';
import MainSlide from './components/Main/MainSlide';
import MoodSlide from './components/Main/MoodSlide';
import Recommend from './components/Main/Recommend';
import Review from './components/Main/Review';
import Brand from './components/Main/Brand';

import './App.css';


function App() {
  return (
    <Router>
    <TopAd/>
    <Header/>
      <Routes>
        {/* 메인페이지 */}
        <Route path='/' element={
          <>
          <MainSlide/>
          <MoodSlide />
          <Recommend />
          <Review/>
          <Brand/>
          </>
          }/>
      </Routes>
    </Router>
  );
}

export default App;
