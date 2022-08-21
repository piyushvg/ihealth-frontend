import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../service/Pool';

const AccountContext = createContext();

const Account = (props) => {
  const navigate = useNavigate();
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject(err);
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });
  };

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username: Username,
        Pool: Pool,
      });
      const authDetails = new AuthenticationDetails({
        Username: Username,
        Password: Password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          resolve(data);
          navigate('/dashboard');
        },
        onFailure: (err) => {
          console.error('onFailure:', err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log('New Password required!', data);
          resolve(data);
          navigate('/dashboard');
        },
      });
    });
  };

  const signOut = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
      navigate('/signin');
    }
  };

  return (
    <AccountContext.Provider value={{ authenticate, getSession, signOut }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
