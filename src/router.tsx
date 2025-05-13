import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreRegistroView from "./view/register/PreRegistroView";
import PreRegisterLayout from "./layouts/PreRegisterLayout";
import AppLayout from "./layouts/AppLayout";
import LoginView from "./view/auth/LoginView";
import DashboardView from "./view/DashboardView";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
         <Route element={<PreRegisterLayout/>}>
            <Route path="/register/pre-register" element={<PreRegistroView/>} />
            <Route path="/auth/login" element={<LoginView/> } index/>
         </Route>

         <Route element={<AppLayout/>}>
            <Route path="/dashboard" element={<DashboardView/>} index/>
         </Route>
      </Routes>
    </BrowserRouter>
  )
}
