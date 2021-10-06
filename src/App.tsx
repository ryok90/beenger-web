import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes'
import { Fonts } from './styles/fonts'

function App() {
  return (
    <BrowserRouter>
      <Fonts />
      <Routes />
    </BrowserRouter>
  )
}

export default App
