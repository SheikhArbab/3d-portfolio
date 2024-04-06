import React from 'react'
import * as R from "react-router-dom"
import * as L from "../layout/index"
import * as P from "../pages/index"

const Routing = () => {

    const router = R.createBrowserRouter(
        R.createRoutesFromElements(
            //RootLayout start
            <R.Route path='/' element={<L.RootLayout />}>


                <R.Route index element={<P.Home />} /> 
                <R.Route path='*' element={<P.NotFound />} /> 



                </R.Route> 
            //  RootLayout end
        )
    );


    return <R.RouterProvider router={router} />
}

export default Routing