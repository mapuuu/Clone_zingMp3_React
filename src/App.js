import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const {test, homeData} = useSelector(state => state.app);
  console.log(homeData);

  return (
    <>
      <div className="flex flex-col gap-8 h-screen items-center justify-center">
        app
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
