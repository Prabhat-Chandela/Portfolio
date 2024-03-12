import { Outlet } from "react-router-dom"
import {Header} from "./components/index"


function App() {


  return (
    <>
      <div className="max-w-screen min-h-screen bg-purple-100 text-white">
      <Header/>
      <main className="sm: pl-[15%]">
      <Outlet/>
      </main>

      </div>
    </>
  )
}

export default App
