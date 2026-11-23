import { useEffect } from 'react'
import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import { Hero, About, Skills, Projects, Friends, Contact, Footer } from './components/Sections'
import { useReveal, useTabTitle } from './hooks'

export default function App() {
  useReveal()
  useTabTitle('宥成の個網', '你怎麼拋棄我了:(')

  // 網址帶 #projects 之類的錨點時，等內容渲染完再捲過去
  useEffect(() => {
    const target = window.location.hash && document.getElementById(window.location.hash.slice(1))
    if (target) target.scrollIntoView()
  }, [])

  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Friends />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
