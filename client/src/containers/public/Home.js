import React, { useEffect } from 'react';
import { Header } from '../../components';
import * as apis from '../../apis';

const Home = () => {

  useEffect(() => {
    const fecthDataHome = async () => {
      const response = await apis.getHome();
      console.log(response);
    }

    fecthDataHome();
  }, []);

  return (
    <div className='overflow-y-auto'>
      <div className='h-[70px] flex items-center px-[60px]'>
        <Header />
      </div>
    </div>
  )
}

export default Home;