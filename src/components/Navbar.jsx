import { useEffect, useState } from 'react'
import { formatClock, useActiveSection, useNow } from '../hooks'

const LINKS = [
  { id: 'about', label: '關於我' },
  { id: 'skills', label: '技能' },
  { id: 'projects', label: '作品' },
  { id: 'friends', label: '友站' },
  { id: 'contact', label: '聯絡' },
]
const SECTION_IDS = ['home', ...LINKS.map((link) => link.id)]

// 時鐘獨立成一個元件，每秒更新時只會重新渲染它自己
function Clock() {
  const now = useNow()
  return <time className="nav-clock">{formatClock(now)}</time>
}

export default function Navbar() {
  const active = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled || open ? 'nav--scrolled' : ''}`}>
      <a href="#home" className="nav-logo" onClick={close}>
        宥成<span>.</span>
      </a>
      <nav className={`nav-links ${open ? 'is-open' : ''}`}>
        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? 'is-active' : ''}
            onClick={close}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <Clock />
      <button
        className="nav-toggle"
        aria-label={open ? '關閉選單' : '開啟選單'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}
