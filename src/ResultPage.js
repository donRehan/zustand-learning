import React, { useState } from 'react';
import useStore from './store/useStore';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Result() {
  const result = useStore(state => state.result);

  return (
    <p>Result is {result}</p>
  )
}

export default Result;
