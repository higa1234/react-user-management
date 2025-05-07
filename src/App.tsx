import { Button } from '@chakra-ui/react'
import { useColorModeValue } from './components/ui/color-mode'
import { BrowserRouter } from 'react-router-dom'

import {Router} from "./router/Router"

function App() {

  const bg = useColorModeValue("teal", "red.200")
  const color = useColorModeValue("white", "gray.800")

  return (
      <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </>
  )
}

export default App
