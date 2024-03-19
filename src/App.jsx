import { Outlet } from "react-router-dom"
import { Header, Topbar } from "./components/index"


function App() {


  return (
    <>
      <div className="max-w-screen h-screen flex flex-col sm:grid sm:grid-col-12 sm:grid-rows-12 bg-gray-100/50">

        <div className="sm:col-span-12 sm:row-span-1">
        <Topbar />
        </div>

        <div className="sm:col-span-1 sm:row-span-11">
        <Header />
        </div>

        <main className="flex-1 sm:col-span-11 sm:row-span-11 border border-red-600">
          <Outlet />
        </main>

      </div>
    </>
  )
}

export default App
