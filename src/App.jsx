import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import './App.css'
import "moment/dist/locale/zh-tw"
import moment from 'moment'
import "animate.css"
import { NavLink, Route, Routes } from "react-router-dom";
import Friend from './pages/friend'
import AboutMe from './pages/aboutMe'
moment.locale("zh-tw")

const TIME_FORMAT = "YYYY年 MMM Do HH:mm:ss (ddd)"

// 依照小時決定招呼語
function getGreeting(hour) {
  if (hour >= 5 && hour <= 10) return "おはよう！youchengの自己紹介です。"
  if (hour >= 11 && hour <= 16) return "こんにちは！youchengの自己紹介です。"
  return "こんばんは！youchengの自己紹介です。"
}

function App() {
  const [now, setNow] = useState(() => moment())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(moment())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 招呼語直接從目前時間算出來，整點一到就會換
  const yogurt = getGreeting(now.hour())

  useEffect(() => {
    const orTitle = "宥成の個網"
    const chTitle = "你怎麼拋棄我了:("
    const handleVisibilityChange = () => {
      document.title = document.hidden ? chTitle : orTitle
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return (
    <>
      <header>
        <p id='nowTime'>{now.format(TIME_FORMAT)}</p>
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
          <Route path='aboutMe' element={<AboutMe />} />
          <Route path='friend' element={<Friend />} />
          <Route path='*' element={<h2>找不到這個頁面 QAQ</h2>} />
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
