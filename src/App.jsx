import React from 'react';
import { useState } from 'react';

import { Navbar } from './components/Navbar';
import Itemspage from './components/itemspage';

function App() {
  const [category, setCategory] = useState('all');
  return (
    <>
    <Navbar setCategory={setCategory} />
    <Itemspage category={category}/>
    </>
  );
}

export default App;

