import { BrowserRouter, Routes, Route, Router  } from "react-router-dom"
import { useState } from 'react'
import LoginPage from './pages/Login.page.jsx'

import styled from "styled-components"



function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/login' Component={LoginPage} exact></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
