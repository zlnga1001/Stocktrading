import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {StockOverviewPage} from "./pages/StockOverviewPage"
import {StockDetailpage} from "./pages/StockDetailpage"
import './App.css'

export default function App() {
  return (
    <main className = "container">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element= {<StockOverviewPage />} />
          <Route path = "/detail/:symbol" element ={<StockDetailpage/>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
