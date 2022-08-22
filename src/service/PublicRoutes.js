import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AccountContext } from '../service/Account';
import { isLoadingHandler } from './../redux/reducer/commonSlice';

function PublicRoutes(props) {
  const Component = props.Component;
  const dispatch = useDispatch();
  const { getSession } = useContext(AccountContext);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    handleSession();
  }, []);

  const handleSession = async () => {
    try {
      dispatch(isLoadingHandler(true));
      const session = await getSession();
      if (session) {
        setLoggedIn(true);
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

  if (isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return <Component {...props} />;
  }
}

export default PublicRoutes;
