import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{Home , Signup , Saves , Settings , Login , User} from './pages/index.js'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'



const router = createBrowserRouter([

  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: (            
                <Login />           
        ),
    },
    {
        path: "/signup",
        element: (
                <Signup />
        ),
    },
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
