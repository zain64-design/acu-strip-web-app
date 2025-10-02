import { BrowserRouter, Route, Routes } from "react-router"
import { ThemeProvider } from "flowbite-react"
import FlowBiteTheme from "./components/common/layout/FlowBiteTheme"
import WebLayout from "./components/common/layout/WebLayout"
import AuthLayout from "./components/common/layout/AuthLayout"
import NotFound from "./components/common/error/NotFound"
import LogIn from "./pages/LogIn"
import Dashboard from "./pages/Dashboard"
import UserManagement from "./pages/UserManagement"
import UserManagementEdit from "./pages/UserManagementEdit"
import VehicleManagement from "./pages/VehicleManagement"
import EarningManagement from "./pages/EarningManagement"
import Settings from "./pages/Settings"
import Providers from "./redux/Providers"
import About from "./pages/About"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsCondition from "./pages/TermsCondition"
import EditDesc from "./pages/EditDesc"
import EditProfile from "./pages/EditProfile"
import ChangePassword from "./pages/ChangePassword"
import FAQ from "./pages/FAQ"
import Notification from "./pages/Notification"
import ForgotPassword from "./pages/ForgotPassword"


function App() {

  return (
    <>
      <Providers>
        <ThemeProvider theme={FlowBiteTheme}>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route element={<WebLayout />}>
                <Route path='/dashboard' index element={<Dashboard />} />
                <Route path='/user-management'>
                  <Route index element={<UserManagement />} />
                  <Route path='edit' element={<UserManagementEdit />} />
                </Route>
                <Route path='/vehicle-management' element={<VehicleManagement />} />
                <Route path='/earnings-management' element={<EarningManagement />} />
                <Route path='/notification' element={<Notification />} />
                <Route path='/settings'>
                  <Route index element={<Settings />} />
                  <Route path='edit-profile' element={<EditProfile />} />
                  <Route path='change-password' element={<ChangePassword />} />
                  <Route path='about' element={<About />} />
                  <Route path='privacy' element={<PrivacyPolicy />} />
                  <Route path='faq' element={<FAQ />} />
                  <Route path='terms-conditions' element={<TermsCondition />} />
                  <Route path='edit' element={<EditDesc />} />
                </Route>
              </Route>
              <Route element={<AuthLayout />}>
                <Route path='/' index element={<LogIn />} />
                <Route path='/forgot-password' index element={<ForgotPassword />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Providers>
    </>
  )
}

export default App
