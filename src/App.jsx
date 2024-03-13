import { Outlet } from "react-router-dom"
import { Header, Topbar } from "./components/index"


function App() {


  return (
    <>
      <div className="max-w-screen h-screen grid grid-col-12 grid-rows-12 bg-gray-200">

        <div className="col-span-12 row-span-1">
        <Topbar />
        </div>

        <div className="col-span-1 row-span-11">
        <Header />
        </div>

        <main className="col-span-11 row-span-11 border border-red-600">
          <Outlet />
        </main>

      </div>
    </>
  )
}

export default App
