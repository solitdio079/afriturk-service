import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import ErrorPage from './error-page'
import Home from './routes/home'
import About from './routes/about'
import Contact from './routes/contact'

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [{
    index: true,
    element: <Home />,
    errorElement: <ErrorPage/>
  }, {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage/>
    }, {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage/>
  }]

}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
