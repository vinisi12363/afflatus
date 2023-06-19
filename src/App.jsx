import { BrowserRouter, Routes, Route  } from "react-router-dom"
import LoginPage from './pages/Login.page.jsx'
import ClientPage from "./pages/Client.page.jsx"


function App() {
  

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/login' Component={LoginPage} exact></Route>
            <Route path='/client' Component={ClientPage} ></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
