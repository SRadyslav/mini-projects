import React from 'react'
import './app.scss'
import preloader from './assets/preloader.svg'
import { Route, Routes, redirect } from 'react-router-dom'


const Counter = React.lazy(() => import(/* webpackChunkName: "Counter"*/ './Counter'));
const Gallery = React.lazy(() => import(/* webpackChunkName: "Gallery"*/ './Gallery'));
const Modal = React.lazy(() => import(/* webpackChunkName: "Modal"*/ './Modal'));
const Quiz = React.lazy(() => import(/* webpackChunkName: "Quiz"*/ './Quiz'));
const Users = React.lazy(() => import(/* webpackChunkName: "Users"*/ './Users'));

const projects = ['Counter', 'Modal', 'Quiz', 'Users', 'Gallery']


const AppContent = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        {
          projects.map(proj => <a
            className='button_a'
            key={proj}
            href={proj}
          >{proj}</a>)
        }
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <AppContent />
      <React.Suspense fallack={preloader}>
        <Routes>
          <Route path='/' element={<h1 className='h1_app'>Select project ↑</h1>}></Route>
          <Route path='/Counter' element={<Counter />}></Route>
          <Route path='/Gallery' element={<Gallery />}></Route>
          <Route path='/Modal' element={<Modal />}></Route>
          <Route path='/Quiz' element={<Quiz />}></Route>
          <Route path='/Users' element={<Users />}></Route>
          <Route path='*' action={redirect('/')}></Route>
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
