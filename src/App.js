
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import IndexPage from './Components/IndexPage';
import ShowPage from './Components/ShowPage';
import NewPage from './Components/NewPage';
import EditPage from './Components/EditPage';


function App() {



  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<IndexPage/>}></Route>
        <Route path="/snacks/:id" element={<ShowPage/>}/>
        <Route path="/new-snack" element={<NewPage/>}/>
        <Route path="/snacks/:id/edit" element={<EditPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
