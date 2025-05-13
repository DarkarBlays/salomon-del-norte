import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function AppLayout() {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-500/[80%] to-yellow-400/[55%] p-6 text-red-700">
        <header>
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
            <h1 className="text-5xl font-serif" >Salomón Del Norte</h1>
          </div>
        </header>
        <section>
          <Outlet />
        </section>
        <footer className="py-5">
          <p className="text-center">
            Todos los derechos reservados{" "}
            <span className="font-bold">{new Date().getFullYear()} </span>
          </p>
        </footer>
        <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
      </div>
    </>
  )
}
