import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const n = [
    {
        id: 1,
        c: 'HTML is easy',
        p: true
    },
    {
        id: 2,
        c: 'Browser can execute JavaScript',
        p: false
    },
    {
        id: 3,
        c: 'GET and POST are the most important methods of HTTP protocol',
        p: true
    }
]

const root = ReactDOM.createRoot(document.getElementById('root')).render(<App n={n} />);
