import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/index";


function App() {


  return (
    <>
      <div className="w-screen min-h-screen flex flex-col">

        <Header />

        <main className="flex-1 ">
          <Suspense fallback={<div>Loading</div>}>
            <Outlet />
          </Suspense>
        </main>

      </div>
    </>
  )
}

export default App;
