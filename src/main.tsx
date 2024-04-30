import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Profile from './components/Profile.tsx'
import Goku from './components/Goku.tsx'
import Vegeta from './components/Vegeta.tsx'
import DefaultProfile from './components/DefaultProfile.tsx'
import ErrorPage from './components/ErrorPage.tsx'
import routes from './routes.tsx'

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
