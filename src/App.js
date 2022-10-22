import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Home, Login, Public } from './containers/public';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router';
import path from './ultis/path'; 


function App() {

  

  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />}/>
            <Route path={path.LOGIN} element={<Login />}/>
          </Route>
        </Routes>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
    
  );
}

export default App;
