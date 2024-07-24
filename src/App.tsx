import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"

function App() {
  

  return (
    <main className="w-full max-h-screen">
      <div className="text-center p-10 max-sm:block sm:block lg:hidden">
       <p> Try to view the website on your Computer,Laptop</p>
       <p>It won't show on your phone or small screen</p>

      </div>
        <Home/>
        <Footer/>
    </main>
  )
}

export default App
