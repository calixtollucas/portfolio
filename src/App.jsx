import Header from "./components/sections/Header"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Sobre from "./components/sections/Sobre"
import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        <main className="flex flex-col items-center gap-4 mt-20">
          <Hero />
          <Sobre />
          <Skills />
          <Projects />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
