import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './template/Header';
import Sidemenu from './template/Sidemenu';

const MainLaout = ({ Component }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log('check isAuthenticated: ', isAuthenticated);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);



  return (

    <>
      <div>
        <div className="w-full h-screen flex">
          <Sidemenu />
          <div className="w-[calc(100%-240px)]">
            <Header />
            {Component}
          </div>
        </div>
      </div>
    </>

  )
}

export default MainLaout
