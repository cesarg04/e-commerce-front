import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/appRouter'
import App from './App'
import './index.css'

const query = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={query}>
            <ReactQueryDevtools/>
            <RouterProvider router={ router }/>
        </QueryClientProvider>
    </React.StrictMode>
)
