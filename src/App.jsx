import React, { useContext, useState } from 'react'
import Login from './component/Login'
import Logout from './component/Logout'
import AppleCounter from './component/AppleCounter'
import AppleBasket from './component/AppleBasket'
import Home from './pages/Home'
import { Outlet, Route, Routes } from 'react-router'
// import AppleCounter from './component/AppleCounter'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'
import Courses from './pages/Courses'
import MernCourse from './pages/MernCourse'
import DataAnalysis from './pages/DataAnalysis'
import PageNotFound from './pages/PageNotFound'
import ThemeProvider from './context/ThemeProvider'
import ContextThemeSetting from './component/ContextThemeSetting'
import ContextLearn from './component/ContextLearn'
import { UserProvider } from './context/LearnContext'
import { DataContext, DataProvider } from './context/Context'
import ClientContext from './component/ClientContext'
import EmployeeContext from './component/EmployeeContext'
import LoginContext from './component/LoginContext'
import LoginContext2 from './context/LoginContext2'
import { Data2Context } from './context/Context2'
import Admin2 from './component/Admin2'
import Employee2 from './component/Employee2'

// const App = () => {

// ------ conditional rendering with if/else and ternery for Login Logout page -------- //
// const [isLoggedIn, setLoggedIn] = useState(false)

// return (
//   <div>
//     {isLoggedIn ? <Logout/> : <Login/>}
//   </div>
// )

// conditional rendering using if/else //

// if(isLoggedIn){
//   return (
//     <Logout/>
//   )
// }
// else{
//   return (
//     <Login/>
//   )
// }
// -------------------------------------------------------------------------------------------------//


// ---------------- this is for also employee/admin but from my side -----------------------------------//
// const RenderContent = () => {
//   const {user} = useContext(DataContext)
//         if(!user){
//             return <LoginContext />
//         }
//         else{
//             return user.role === 'client' ? <ClientContext /> : <EmployeeContext />
//         }
//     }
// -----------------------------------------------------------------------------------------------------//





// -------------------------------------------- // 
const App = () => {

  //  ---------- for Admin/employee page explained by anurag sir -------------------//
  const { valid, currentUser } = useContext(Data2Context)
  console.log("valid or not", valid);

  if (!valid) {
    return <LoginContext2 />
  }
  // -------------------------------------------------------------------------------//

  return (

    // ----------------- Apple counter with conditional rendering ---------//
    // <div className='bg-amber-500 h-screen'>
    // {/* <AppleCounter /> */}
    // {/* <AppleBasket /> */}
    // </div>
    // --------------------------------------------------------------------//



    <div>

      {/* --------------- Routing for web --------------------------------------- */}
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Outlet />}>
          <Route index element={<Courses />} />
          <Route path="/courses/:id" element={<MernCourse/>}/>
          <Route path="mern" element={<MernCourse />} />
          <Route path="data" element={<DataAnalysis />} />
        </Route>
        <Route path="counter" element={<AppleCounter />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes> */}
      {/* <Home/> */}
      {/* ------------------------------------------------------------------------------ */}


      {/* ------------------- context practice for light/dark theme ---------------------- */}
      {/* <ThemeProvider>
        <ContextThemeSetting />
      </ThemeProvider> */}
      {/* ---------------------------------------------------------------------------------- */}


      {/* ---------------- this is for also employee/admin but from my side ------------------------ */}
      {/* <DataProvider>
      <RenderContent />
    </DataProvider> */}
      {/* ------------------------------------------------------------------------------------------- */}


      {/* ------ for Admin/employee page explained by anurag sir ---------------- */}
      {
        (currentUser === "Admin") ? (<Admin2 />) : (<Employee2 />)
      }

    </div>

  )

}

export default App
