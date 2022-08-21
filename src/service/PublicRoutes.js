import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AccountContext } from '../service/Account';

function PublicRoutes(props) {
  const Component = props.Component;
  const { getSession } = useContext(AccountContext);
  const [isLoggedIn, setLoggedIn] = useState(false);
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

  if (isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return <Component {...props} />;
  }
}

export default PublicRoutes;
