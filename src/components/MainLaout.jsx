import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './template/Header';
import Sidemenu from './template/Sidemenu';

const MainLaout = ({ Component }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } else if (!isAuthenticated) {
      navigate('/login');
    } else if (error) {
      navigate('/createuser');
    }
  }, [dispatch, isAuthenticated, navigate, error]);

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
