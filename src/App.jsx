import { Flex } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <Flex>
      <Outlet />
    </Flex>
  )
}

export default App