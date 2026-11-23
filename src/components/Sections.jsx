import { useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight, ArrowUpRight, Construction } from 'lucide-react'
import { GithubIcon } from './icons'
import { profile, skills, projects, friends, socials } from '../data/profile'
import { getAge, getGreeting, useNow } from '../hooks'

// 打字動畫的內容：每個身分顯示 1.8 秒
const ROLE_SEQUENCE = profile.roles.flatMap((role) => [role, 1800])

function SectionHead({ eyebrow, title }) {
  return (
    <div className="section-head reveal">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}

export function Hero() {
  const now = useNow(60 * 1000) // 招呼語只需要每分鐘檢查一次
  return (
    <section id="home" className="hero">
      <p className="hero-kicker hero-in" style={{ '--i': 0 }}>
        <span className="dot" />
        {getGreeting(now.getHours())}{profile.name}の自己紹介です。
      </p>
      <h1 className="hero-title hero-in" style={{ '--i': 1 }}>
        <span className="gradient-text">{profile.name}</span>
        <span className="hero-zh">{profile.nameZh}</span>
      </h1>
      <div className="hero-typing hero-in" style={{ '--i': 2 }}>
        <span className="hero-typing-prefix">我是 </span>
        <TypeAnimation sequence={ROLE_SEQUENCE} wrapper="span" repeat={Infinity} />
      </div>
      <div className="btn-row hero-in" style={{ '--i': 3 }}>
        <a className="btn btn-primary" href="#projects">
          看看作品 <ArrowRight className="btn-arrow" size={18} />
        </a>
        <a className="btn btn-ghost" href="#contact">聯絡我</a>
      </div>
      <a href="#about" className="scroll-hint" aria-label="往下捲動" />
    </section>
  )
}

export function About() {
  const info = [
    {
      label: '學校',
      value: (
        <>
          <a href={profile.school.url} target="_blank" rel="noreferrer">{profile.school.name}</a>
          {' / '}
          <a href={profile.department.url} target="_blank" rel="noreferrer">{profile.department.name}</a>
        </>
      ),
      wide: true,
    },
    { label: '生日', value: `2007/06/17（${getAge(profile.birthday)} 歲）` },
    { label: '星座', value: profile.zodiac },
    { label: 'MBTI', value: profile.mbti },
    { label: '旅行', value: profile.travel },
    { label: '興趣', value: profile.hobbies, wide: true },
  ]

  return (
    <section id="about" className="section">
      <SectionHead eyebrow="About me" title="關於我" />
      <div className="about">
        <div className="avatar reveal">
          <img src={`${import.meta.env.BASE_URL}image/owo.jpg`} alt={profile.nameZh} />
        </div>
        <div>
          <p className="about-intro reveal">{profile.intro}</p>
          <div className="info-grid">
            {info.map((item, i) => (
              <div
                key={item.label}
                className={`card info-item reveal ${item.wide ? 'info-item--wide' : ''}`}
                style={{ '--d': i }}
              >
                <p className="info-label">{item.label}</p>
                <p className="info-value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHead eyebrow="Skills" title="我會的東西" />
      <div className="skills-grid">
        {skills.map((group, i) => (
          <div key={group.title} className="card skill-card reveal" style={{ '--d': i }}>
            <span className="skill-icon" aria-hidden="true">
              <group.icon size={24} strokeWidth={1.75} />
            </span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item} className="chip">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

// 作品卡片：滑鼠移動時會 3D 傾斜，並有光暈跟著游標
function ProjectCard({ project }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const el = ref.current
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    el.style.setProperty('--rx', `${(0.5 - y) * 10}deg`)
    el.style.setProperty('--ry', `${(x - 0.5) * 10}deg`)
    el.style.setProperty('--gx', `${x * 100}%`)
    el.style.setProperty('--gy', `${y * 100}%`)
  }

  const handleLeave = () => {
    ref.current.style.setProperty('--rx', '0deg')
    ref.current.style.setProperty('--ry', '0deg')
  }

  return (
    <article ref={ref} className="card project-card" onPointerMove={handleMove} onPointerLeave={handleLeave}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="chips chips--small">
        {project.tags.map((tag) => (
          <li key={tag} className="chip">{tag}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Demo <ArrowUpRight size={16} />
          </a>
        )}
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer">
            <GithubIcon size={16} /> GitHub
          </a>
        )}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHead eyebrow="Projects" title="作品集" />
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={project.title} className="reveal" style={{ '--d': i }}>
            <ProjectCard project={project} />
          </div>
        ))}
        <div className="reveal" style={{ '--d': projects.length }}>
          <div className="card project-card project-card--placeholder">
            <Construction className="placeholder-icon" size={36} strokeWidth={1.5} aria-hidden="true" />
            <p>更多作品製作中…</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Friends() {
  return (
    <section id="friends" className="section">
      <SectionHead eyebrow="Friends" title="友達のWeb" />
      <div className="friends-grid">
        {friends.map((friend, i) => (
          <a
            key={friend.url}
            href={friend.url}
            target="_blank"
            rel="noreferrer"
            className={`card friend-card reveal ${friend.gradient ? 'friend-card--gradient' : ''}`}
            style={{ '--friend-color': friend.color, '--d': i }}
          >
            <span className="friend-avatar" aria-hidden="true">{friend.name[0]}</span>
            <span className="friend-text">
              <span className="friend-name">{friend.name}</span>
              <span className="friend-url">{friend.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="card contact reveal">
        <p className="section-eyebrow">Contact</p>
        <h2 className="contact-title">
          一起<span className="gradient-text">聊聊</span>吧！
        </h2>
        <p className="contact-text">不管是程式、日文、料理還是哲學問題，都歡迎來找我聊天。</p>
        <div className="btn-row btn-row--center">
          {socials.map((social, i) => (
            <a
              key={social.label}
              href={social.url}
              target={social.url.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className={`btn ${i === 0 ? 'btn-primary' : 'btn-ghost'}`}
            >
              {social.icon && <social.icon size={18} />}
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {profile.name}（{profile.nameZh}）· Built with React + Vite
    </footer>
  )
}
