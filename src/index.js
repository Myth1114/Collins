import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import './main.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
const theme = createTheme({
  palette: {
    primary: {
      main: '#00ae42',
    },
    secondary: {
      main: '#ff4336',
      // main: '#17c0eb',
    },
    error: {
      main: '#ff4757',
    },
    success: {
      main: '#4caf50',
    },
    info: {
      main: '#1e90ff',
    },
  },
})
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
