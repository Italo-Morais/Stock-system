import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App/App.tsx'
import { ResetGlobal } from './styles/global.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ResetGlobal />
  </React.StrictMode>,
)
