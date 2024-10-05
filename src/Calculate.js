import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import useStore from './store/useStore';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Calc() {

  //Get the values of the store
  const { firstNumber, secondNumber, setFirstNumber, setSecondNumber , result , setResult } = useStore();

  return (
    <>
     <input value={firstNumber} onChange={e => setFirstNumber(parseInt(e.target.value))} />
     <input value={secondNumber} onChange={e => setSecondNumber(parseInt(e.target.value))} />
    <button onClick={setResult}>Calculate</button>
     <p>The result is {result}.</p>

    <div>
      Click here to view the result somewhere else
      <Link to="/result">View Result</Link>
    </div>
    </>
  );
}

export default Calc;
