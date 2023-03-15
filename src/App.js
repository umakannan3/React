import React from 'react';
import './App.css';
import './components/task1/task2/greet.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Hello} from './components/task1/helloworld.js'
import {Greeting} from './components/task1/task2/congrates.js'
import {Super} from './components/task3/super.js'
import './components/task3/super.css'
import {Menu} from './components/menu/menu'
import {Button} from './components/task4/button'
import './components/task4/button.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    
    <>
    <BrowserRouter>
      <Routes>
       <Route path='/'element={<Menu/>}></Route>
        <Route path='/a'element={[<Menu/>,<Hello/>]}></Route>
        <Route path='/congrates'element={[<Menu/>,<Greeting/>]}></Route>
        <Route path='/super'element={[<Menu/>,<Super/>]}></Route>
        <Route path='/button'element={[<Menu/>,<Button/>]}></Route>
    
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
