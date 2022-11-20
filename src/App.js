import React from 'react'
import './app.scss'
import preloader from './assets/preloader.svg'
import { Route, Routes, Navigate, Link, useLocation } from 'react-router-dom'


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
          projects.map(proj => <Link
            className='button_a'
            key={proj}
            to={proj}
          >{proj}</Link>)
        }
      </div>
    </div>
  )
}

function App() {
  const {pathname} = useLocation()

  React.useEffect(() => {
    document.body.classList.add(`body${pathname.slice(1)}`);
    return () => {
        document.body.classList.remove(`body${pathname.slice(1)}`);
    };

}, [pathname])
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
          <Route path='*' element={<Navigate to='/' />}></Route>
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
