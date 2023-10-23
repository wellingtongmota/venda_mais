import { Flex } from "@chakra-ui/react"
import UserProvider from "./contexts/UserContext"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <UserProvider>
      <Flex>
        <Outlet />
      </Flex>
    </UserProvider>
  )
}

export default App