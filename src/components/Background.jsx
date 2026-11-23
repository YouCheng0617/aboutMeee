import { useEffect } from 'react'

// 背景：漂浮的光球 + 格線 + 跟著滑鼠移動的光暈
export default function Background() {
  useEffect(() => {
    const root = document.documentElement
    const handleMove = (e) => {
      root.style.setProperty('--mx', `${e.clientX}px`)
      root.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-blob bg-blob--1" />
      <div className="bg-blob bg-blob--2" />
      <div className="bg-blob bg-blob--3" />
      <div className="bg-grid" />
      <div className="bg-spotlight" />
    </div>
  )
}
