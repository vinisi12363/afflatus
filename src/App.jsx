import { BrowserRouter, Routes, Route  } from "react-router-dom"
import LoginPage from "./pages/SignIn/index.jsx"
import ClientPage from "./pages/Dashboard/ClientsList/index.jsx"
import RegisterPage from "./pages/Dashboard/Register/index.jsx"
import SearchPage from "./pages/Dashboard/Search/index.jsx"
import ChildPage from "./pages/Dashboard/ChildRegister/index.jsx"
import { ToastContainer } from 'react-toastify';

function App() {
  return (
      <>
        <ToastContainer/>
        <BrowserRouter>
            <Routes>
              <Route path='/' Component={LoginPage} exact></Route>
              <Route path='/dashboard/client' Component={ClientPage} ></Route>
              <Route  path='/dashboard/register' Component={RegisterPage}></Route>
              <Route path='/dashboard/search' Component={SearchPage} ></Route>
              <Route path='/dashboard/child' Component={ChildPage}></Route>
            </Routes>
        </BrowserRouter>
      </>
  )
}

export default App;
