import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App'

export const router = createBrowserRouter ([
    {
        path: '/home',
        element: <App/>
    },
    {   
        path: '/',
        element: <Navigate to={'home'} />
        
    },
    {
        path: '*',
        element: <h1>Not found</h1>,
    }

])
