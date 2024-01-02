import React from 'react'
import { useState } from 'react';
import Heart from "react-animated-heart";
import { FaHeart } from "react-icons/fa";

import '../../../frontend/src/Shop.css'



const Animationheart = ({ isHeartRed, onClick }) => {
    return (
      <div className={`heart ${isHeartRed ? "is-active" : ""}`} onClick={onClick}></div>
    );
  };

export default Animationheart