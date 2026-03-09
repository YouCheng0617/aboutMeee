import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import './App.css'
import "moment/dist/locale/zh-tw"
import moment from 'moment'
import "animate.css"
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Friend from './pages/friend'
import AboutMe from './pages/aboutMe'
moment.locale("zh-tw")

function App() {
  const [yogurt, setYogurt] = useState("こんにちは！yogurtの自己紹介です。")
  const [nowTime, setNowTime] = useState(moment().format("YYYY年 MMM Do HH:mm:ss (ddd)"))
  const [nowHour, setNowHour] = useState(moment().format("HH"))
  useEffect(() => {
    const timer = setInterval(() => {
      setNowTime(moment().format("YYYY年 MMM Do HH:mm:ss (ddd)"))
    }, 1000)
    const timer2 = setInterval(() => {
      setNowHour(moment().format("HH"))
    }, 3600000)
    return () => {
      clearInterval(timer)
      clearInterval(timer2)
    }
  }, [])
  useEffect(() => {
    if (nowHour === "05" || nowHour === "06" || nowHour === "07" || nowHour === "08" || nowHour === "09" || nowHour === "10") {
      setYogurt("おはよう！yogurtの自己紹介です。")
    } else if (nowHour === "11" || nowHour === "12" || nowHour === "13" || nowHour === "14" || nowHour === "15" || nowHour === "16") {
      setYogurt("こんにちは！yogurtの自己紹介です。")
    } else {
      setYogurt("こんばんは！yogurtの自己紹介です。")
    }
  }, [nowHour])
  useEffect(() => {
    const orTitle = "優格の個網"
    const chTitle = "你怎麼拋棄我了:("
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        document.title = chTitle
      } else {
        document.title = orTitle
      }
    })
  })



  return (
    <>
    
      <header>
        <p id='nowTime'>{nowTime}</p>

      </header>

      <main>



        <div id="yogurtAnime">
          <TypeAnimation
            key={yogurt}
            sequence={[yogurt, 1000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>
          
          <Routes>
            <Route index element={<></>} />
            <Route path='friend' element={
              <Friend/>
            } />  
          </Routes>
          
          <Routes>
            <Route path='aboutMe' element={
              <AboutMe/>
            }/>

          </Routes>

      </main>

      <footer>
        <NavLink to={'/'}>主頁</NavLink>
        <NavLink to={'/aboutMe'}>關於我</NavLink>
        <NavLink to={'/friend'}>友站</NavLink>
        <h3>本網頁還在開發中</h3>
      </footer>
      
    </>
  )
}

export default App
