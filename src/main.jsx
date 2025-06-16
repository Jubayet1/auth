import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Layout from './Components/LayOut/Layout.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import Login from './Components/LogIn/Login.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }, 
      {
        path: "/signup",
        element: <SignUp />,
      }, 
      {
        path: "login",
        element: <Login />
      }
    ] 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={route}>
        <App />
    </RouterProvider>
      </AuthProvider>
  </StrictMode>,
)
