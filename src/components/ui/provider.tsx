"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { system } from "../../theme/theme"
import { ThemeProvider } from "next-themes"

export function Provider(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
      {props.children}
      </ThemeProvider>
    </ChakraProvider>
  )
}

// export { ChakraProvider }
