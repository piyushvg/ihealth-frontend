import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AccountContext } from '../service/Account';
import { isLoadingHandler, userHandler } from './../redux/reducer/commonSlice';

const ProtectedRoutes = (props) => {
  const Component = props.Component;
  const dispatch = useDispatch();
  const { getSession } = useContext(AccountContext);
  const [isLoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    handleSession();
  }, []);

  const handleSession = async () => {
    try {
      dispatch(isLoadingHandler(true));
      const session = await getSession();
      if (session) {
        setLoggedIn(true);
        dispatch(userHandler(session.idToken.payload));
        dispatch(isLoadingHandler(false));
      } else {
        setLoggedIn(false);
        dispatch(isLoadingHandler(false));
      }
    } catch (e) {
      setLoggedIn(false);
      dispatch(isLoadingHandler(false));
    }
  };

  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  } else {
    return <Component {...props} />;
  }
};

export default ProtectedRoutes;
