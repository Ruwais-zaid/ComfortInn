import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../src/layouts/Layouts'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import AddHotels from './pages/AddHotels'
import { useAppContext } from './context/Appcontext'


const App = () => {
  const {isLoggedIn} =useAppContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <p>Homepage</p>
        </Layout>} />
        <Route path='/search' element={<Layout>
          <p>SearchPage</p>
        </Layout>}></Route>
        <Route path="/register" element={<Layout>
          <Register/>
        </Layout>} />
        <Route path="/sign" element={<Layout>
          <SignIn/>
        </Layout>}></Route>
        {
          isLoggedIn && <>
          <Route path='/add-hotel' element={<Layout>
            <AddHotels/>
          </Layout>}></Route>
          </>
        }
      </Routes>
    </Router>
  )
} 

export default App
