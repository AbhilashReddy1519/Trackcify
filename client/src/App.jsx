import React from 'react'
import NavBar from './components/layouts/NavBar'
import Footer from './components/layouts/Footer'
import { BrowserRouter } from 'react-router-dom'
import RoutesClient from './routes/routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='min-h-screen flex flex-col bg-gray-200 mt-25'>
          <NavBar />
          <main>
            <RoutesClient />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App