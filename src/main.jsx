import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home, Signup, Saved, Settings, Login, User } from './pages/index.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Protected } from './components/index.js'



const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        ),
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        ),
      },
      {
        path: "/saved",
        element: (
          <Protected authentication>
            <Saved />
          </Protected>
        ),
      },
      {
        path: "/settings",
        element: (
          <Protected authentication>
            <Settings />
          </Protected>
        ),
      },
      {
        path: "/user",
        element: (
          <Protected authentication>
            <User />
          </Protected>
        ),
      },
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
