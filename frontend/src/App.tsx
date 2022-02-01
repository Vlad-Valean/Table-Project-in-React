import React from 'react';
import './App.css';
import Banner from "./Header/Header";
import Menu from './Menu/Menu';
import Table from './Table/Table';

function App() {
  return (
      <div>
        <Banner/>
        <div className="content-container">
          <Menu/>
          <Table/>
        </div>
      </div>
  );
}

export default App;
