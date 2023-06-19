import { BrowserRouter, Routes, Route  } from "react-router-dom"
import LoginPage from './pages/Login.page.jsx'
import ClientPage from "./pages/Client.page.jsx"
import RegisterPage from "./pages/Register.page.jsx"
import SearchPage from "./pages/Search.page.jsx"


function App() {
  

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' Component={LoginPage} exact></Route>
            <Route path='/client' Component={ClientPage} ></Route>
            <Route  path='/register' Component={RegisterPage}></Route>
            <Route path='/search' Component={SearchPage} ></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
