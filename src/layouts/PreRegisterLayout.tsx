import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function PreRegisterLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-yellow-500/[80%] to-yellow-400/[55%] ">
      <header className="p-6">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-5xl font-serif text-red-700">Salomón Del Norte</h1>
        </div>
      </header>

      <main className="flex-grow">
        <section className="max-w-screen-2xl mx-auto p-5">
          <Outlet />
        </section>
      </main>

      <footer className="py-5">
        <p className="text-center text-red-700">
          Todos los derechos reservados{" "}
          <span className="font-bold">{new Date().getFullYear()}</span>
        </p>
      </footer>

      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </div>
  );
}
