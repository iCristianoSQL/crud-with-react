import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

import usersReducers from "./features/Users"

const store = configureStore({
  reducer: {
    users: usersReducers
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)