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
import {Socbtn} from './components/task4/Socbtn'
import {Notify} from './components/task5/notify'
import {Login} from './components/task6/login'
import './components/task6/login.css'
import './components/task5/notify.css'
import './components/task4/socbtn.css'
import './components/task7/tech.css'
import {Technology} from './components/task7/technology'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Counter} from './components/task8/count'
import {Mango} from './components/task9/mango'
import {Feedback} from './components/task10/feedback'
import './components/task10/feedback.css'
import {Heart} from './components/task10/heart'
import {Date} from './components/task11/date';
import {Register} from './components/node/week1/registration'
import {Load} from './components/node/week1/loading'
import {Jewell} from './components/jsontask/jewell'
import {Fake} from './components/fakestore/fake'
import {Fake1} from './components/fakestore/fake1'
function App() {
  return (
    
    <>
    <BrowserRouter>
      <Routes>
       <Route path='/'element={<Menu/>}></Route>
        <Route path='/home1'element={[<Menu/>,<Hello/>]}></Route>
        <Route path='/congrates'element={[<Menu/>,<Greeting/>]}></Route>
        <Route path='/super'element={[<Menu/>,<Super/>]}></Route>
        <Route path='/button'element={[<Menu/>,<Socbtn/>]}></Route>
        <Route path='/notify'element={[<Menu/>,<Notify/>]}></Route>
        <Route path='/login'element={[<Menu/>,<Login/>]}></Route>
        <Route path='/Technology'element={[<Menu/>,<Technology/>]}></Route>
        <Route path='/count'element={[<Menu/>,<Counter/>]}></Route>
        <Route path='/mango'element={[<Menu/>,<Mango/>]}></Route>
        <Route path='/feed'element={[<Menu/>,<Feedback/>]}></Route>
        <Route path='/heart'element={[<Menu/>,<Heart/>]}></Route>
        <Route path='/date'element={[<Menu/>,<Date/>]}></Route>
        <Route path='/register'element={<Register/>}></Route>
        <Route path='/load'element={<Load/>}></Route>
        <Route path='/jewell' element={[<Menu/>,<Jewell/>]}></Route>
        <Route path='/fake' element={[<Menu/>,<Fake/>]}></Route>
        <Route path='/fake1/:id' element={[<Menu/>,<Fake1/>]}></Route>
  
            </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
