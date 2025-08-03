import Header from "./components/sections/Header"
import Hero from "./components/sections/Hero"
import Sobre from "./components/sections/Sobre"
import ToggleTheme from "./components/ToggleTheme"
import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        <main className="flex flex-col items-center gap-4 mt-20">
          <Hero />
          <Sobre />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
