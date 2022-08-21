import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AccountContext } from '../service/Account';

const ProtectedRoutes = (props) => {
  const Component = props.Component;
  const { getSession } = useContext(AccountContext);
  const [isLoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const session = await getSession();
        if (session) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (e) {
        setLoggedIn(false);
      }
    })();
  });

  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  } else {
    return <Component {...props} />;
  }
};

export default ProtectedRoutes;
