import React, { lazy, Suspense } from 'react'
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
// import Food from './Food.jsx'

let Food = lazy(()=> import ("./Food.jsx"))


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
            },{
                path : "/food",
                element:(<Suspense fallback={<h1> ....Loading </h1>}>
                    <Food></Food>
                </Suspense>)
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
