import { useEffect, useState } from 'react'

// 每隔 interval 毫秒回傳一次目前時間
export function useNow(interval = 1000) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), interval)
    return () => clearInterval(timer)
  }, [interval])
  return now
}

// 有 .reveal class 的元素捲到畫面上時，加上 .is-visible 觸發淡入動畫
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// 回傳目前畫面中間是哪個區塊的 id，用來標示導覽列
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

// 切到別的分頁時換標題
export function useTabTitle(title, awayTitle) {
  useEffect(() => {
    document.title = title
    const handleVisibilityChange = () => {
      document.title = document.hidden ? awayTitle : title
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [title, awayTitle])
}

const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六']
const pad = (n) => String(n).padStart(2, '0')

export function formatClock(d) {
  return `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} (${WEEKDAYS[d.getDay()]}) ` +
    `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

export function getGreeting(hour) {
  if (hour >= 5 && hour <= 10) return 'おはよう！'
  if (hour >= 11 && hour <= 16) return 'こんにちは！'
  return 'こんばんは！'
}

export function getAge(birthday, today = new Date()) {
  let age = today.getFullYear() - birthday.getFullYear()
  const beforeBirthday =
    today.getMonth() < birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())
  if (beforeBirthday) age--
  return age
}
