import React from 'react';
import './home.css';
import { NavBarDefault } from '../../components/navBar/navBar';
import Cards from '../../components/listCards/cards';
import { Footer } from '../../components/footer/footer';
import { Categories } from '../../components/categories/category';

export const Home: React.FC<{
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
      <Categories></Categories>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
};
