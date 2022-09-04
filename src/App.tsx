import NavigationRoutes from "./routes"

import { ToastAlert } from "./components/ToastAlert"
import { GlobalStyle } from "./styles/global"


function App() {
  return (
    <>
      <ToastAlert />
      <GlobalStyle />
      <NavigationRoutes />
    </>
  )
}

export default App
