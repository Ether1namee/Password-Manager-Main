import './App.css';
import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Error404 from './components/ErrorPage/Error404';
import ShowAllPassword from './components/ShowPassword/ShowAllPassword';
import ProtectedRoute from './components/ProtectedRoute';

//<Route exact path='/' element={<ProtectedRoute />} >
//<Route exact path='/' element={<Chat />} /> 
//</Route>

function App() {
  return (
    <Router>
            <Routes>
                <Route exact path='/' element={<ProtectedRoute/>}  >
                      <Route exact path='/' element={<ShowAllPassword/>} />
                </Route>
                <Route exact path='/' element={<ShowAllPassword/>} /> 
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path="*" element={<Error404 />}/>
            </Routes>
          
        </Router>
      
  );
}

export default App;
