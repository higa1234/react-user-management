import { BrowserRouter } from 'react-router-dom'
import {Router} from "./router/Router"
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
      <>
      <BrowserRouter>
        <Toaster />
        <Router />
      </BrowserRouter>
      </>
  )
}

export default App
