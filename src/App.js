import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './configs/routes';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const { isLoading } = useSelector((state) => state.common);

  return (
    <div className='App'>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className='loader'>
              <LoadingOutlined style={{ fontSize: '50px' }} />
            </div>
          }
        >
          {isLoading && (
            <div className='loader'>
              <LoadingOutlined style={{ fontSize: '50px' }} />
            </div>
          )}
          <AppRoute />
        </Suspense>
      </BrowserRouter>
    </div>
  );    
}   

export default App;
