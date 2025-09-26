import { BrowserRouter, Route, Routes } from "react-router"
import { ThemeProvider } from "flowbite-react"
import FlowBiteTheme from "./components/common/layout/FlowBiteTheme"
import WebLayout from "./components/common/layout/WebLayout"
import AuthLayout from "./components/common/layout/AuthLayout"
import NotFound from "./components/common/error/NotFound"
import LogIn from "./pages/LogIn"
import Dashboard from "./pages/Dashboard"
import UserManagement from "./pages/UserManagement"
import VehicleManagement from "./pages/VehicleManagement"
import EarningManagement from "./pages/EarningManagement"
import Settings from "./pages/Settings"
import Providers from "./redux/Providers"
import About from "./pages/About"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsCondition from "./pages/TermsCondition"


function App() {

  return (
    <>
    <ThemeProvider theme={FlowBiteTheme}>
      <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route element={<WebLayout />}>
            <Route path='/dashboard' index element={<Dashboard />} />
            <Route path='/user-management' element={<UserManagement/>} />
            <Route path='/vehicle-management' element={<VehicleManagement/>} />
            <Route path='/earnings-management' element={<EarningManagement/>} />
            <Route path='/settings'>
              <Route index element={<Settings/>}/>
              <Route path='about' element={<About/>} />
              <Route path='privacy' element={<PrivacyPolicy/>} />
              <Route path='terms-conditions' element={<TermsCondition/>} />
            </Route>
          </Route>
          <Route element={<AuthLayout />}>
            <Route path='/' index element={<LogIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Providers>
      </ThemeProvider>
    </>
  )
}

export default App
