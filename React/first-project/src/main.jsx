import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import Home from './Home.jsx'
import ErrorPage from './ErrorPage.jsx'
import SingleProduct from './SingleProduct.jsx'


let Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About></About>
            }, {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path:"/product/:id",
                element:<SingleProduct></SingleProduct>
            }

        ],
        errorElement : <ErrorPage></ErrorPage>
    }
    // {
    //     path: "/about",
    //     element: <About></About>
    // },
    // {
    //     path: "/cart",
    //     element:<Cart></Cart>
    // },
    // {
    //     path : "/contact",
    //     element:<Contact></Contact>
    // }
])


ReactDOM.createRoot(document.getElementById('root')).
    render(
        <RouterProvider router={Router}> </RouterProvider>

    )
