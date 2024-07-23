import React from 'react'
import Header from "./template/Header";
import Sidemenu from './template/Sidemenu';

const MainLaout = ({ Component }) => {
  return (
    <div>
      <div className="w-full h-screen flex">
        <Sidemenu />
        <div className="w-[calc(100%-240px)]">
          <Header />
          {Component}
        </div>
      </div>
    </div>
  )
}

export default MainLaout
