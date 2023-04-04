import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import Profile from './components/Profile';
import Header from './components/Header';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';
import TestRedux from './components/TestRedux';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <div className="App">
      <ListContainer />
      {/* <TestRedux />
      <Header />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<test />} />

        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
}

export default App;
