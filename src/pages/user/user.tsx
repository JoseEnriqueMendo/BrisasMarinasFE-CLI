import React from 'react';
import './user.css';
import { NavBarDefault } from '../../components/navBar/navBar';
import { Footer } from '../../components/footer/footer';
import { EditUser, UserDetails } from '../../components/User/User';
import { TablaPedidos } from '../../components/tablaPedidos/tablaPedidos';

export const User: React.FC<{
  userState: boolean;
  handleauth: () => void;
  handleLogin: () => void;
}> = ({ userState, handleauth, handleLogin }) => {
  return (
    <div className="app-container-home">
      <NavBarDefault
        userState={userState}
        handleauth={() => handleauth()}
        handleLogin={() => handleLogin()}
      />
      <UserDetails />
      <Footer></Footer>
    </div>
  );
};

export const UserEdit: React.FC<{
  userState: boolean;
  handleauth: () => void;
  handleLogin: () => void;
}> = ({ userState, handleauth, handleLogin }) => {
  return (
    <div className="app-container-home">
      <NavBarDefault
        userState={userState}
        handleauth={() => handleauth()}
        handleLogin={() => handleLogin()}
      />
      <EditUser />

      <Footer></Footer>
    </div>
  );
};

export const UserHistory: React.FC<{
  userState: boolean;
  handleauth: () => void;
  handleLogin: () => void;
}> = ({ userState, handleauth, handleLogin }) => {
  return (
    <div className="app-container-home">
      <NavBarDefault
        userState={userState}
        handleauth={() => handleauth()}
        handleLogin={() => handleLogin()}
      />
      <TablaPedidos />
      <Footer></Footer>
    </div>
  );
};
