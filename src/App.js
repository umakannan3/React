import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle'
import {Hello} from './components/task1/helloworld.js'
import {Greeting} from './components/task2/congrates.js'
import './components/task2/greet.css'
import {Super} from './components/task3/super.js'
import './components/task3/super.css'
import {Menu} from './components/menu/menu'
import {Button} from './components/task4/button'
import {Notify} from './components/task5/notify'
import {Login} from './components/task6/login'
import './components/task6/login.css'
import './components/task5/notify.css'
import './components/task4/button.css'
import './components/task7/tech.css'
import './components/portfolio/home.css'
import {Home}  from './components/portfolio/home'
import {Newmenu} from './components/portfolio/newMenu'
import {Technology} from './components/task7/technology'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {About} from './components/portfolio/about'
import {Counter} from './components/task8/count'
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
        <Route path='/notify'element={[<Menu/>,<Notify/>]}></Route>
        <Route path='/login'element={[<Menu/>,<Login/>]}></Route>
        <Route path='/Technology'element={[<Menu/>,<Technology/>]}></Route>
        <Route path='/home' element={[<Newmenu/>,<Home/>]}></Route>
        <Route path='/about'element={[<Newmenu/>,<About/>]}></Route>
        <Route path='/count'element={[<Menu/>,<Counter/>]}></Route>
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
