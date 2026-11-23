// ============================================================
// 網站上所有的內容都在這個檔案，想改文字、加作品、加友站，改這裡就好
// 圖示來自 Lucide，可以到 https://lucide.dev/icons 找，再 import 進來
// ============================================================
import { Server, Code, Languages, Sparkles, Mail } from 'lucide-react'
import { GithubIcon } from '../components/icons'

export const profile = {
  name: 'youcheng',
  nameZh: '宥成',
  birthday: new Date(2007, 5, 17), // 月份從 0 開始，5 = 6月
  // 首頁打字動畫會輪流顯示這些
  roles: ['資管科學生', '後端開發者', '日文愛好者', '料理人', 'ENFP 快樂小狗'],
  intro:
    '嗨！我是宥成，臺中科技大學資管科的學生，平常主要在寫後端。' +
    '喜歡料理、唱歌、說故事，也喜歡看動漫，沒事就會問 AI 一堆哲學問題。',
  school: { name: '臺中科技大學 NUTC', url: 'https://www.nutc.edu.tw/' },
  department: { name: '資管科 IM', url: 'https://im.nutc.edu.tw/' },
  zodiac: '雙子座',
  mbti: 'ENFP-T 快樂小狗',
  hobbies: '料理、說話、唱歌、聽故事、看動漫、問 AI 哲學問題',
  travel: '去過 0 國（想去：日本、土耳其）',
}

export const skills = [
  {
    icon: Server,
    title: '後端',
    description: '主力戰場',
    items: ['Node.js', 'TypeScript', 'PostgreSQL', 'Linux', 'Git'],
  },
  {
    icon: Code,
    title: '前端',
    description: '寫得出來，美感另計',
    items: ['Next.js', 'React', 'JavaScript', 'HTML', 'CSS', 'Vite'],
  },
  {
    icon: Languages,
    title: '語言',
    description: '會說、也愛說',
    items: ['中文', '日文'],
  },
  {
    icon: Sparkles,
    title: '其他專長',
    description: '寫程式以外的我',
    items: ['社會科', '說故事', '料理', '唱歌'],
  },
]

// 新增作品：複製一個 { ... } 區塊，改成你的內容即可
// role 會顯示成卡片上方的角色標籤；demo / repo 沒有的話可以刪掉那一行
export const projects = [
  {
    title: '心情漂流瓶',
    role: '後端',
    description:
      '畢業專題。情緒分享社群：把心情寫成漂流瓶丟進不同主題的「海域」，可具名或匿名發文，' +
      '支援留言、投票、Markdown、追蹤與通知，還有小遊戲樂園。',
    tags: ['畢業專題', '社群平台', '團隊開發'],
    demo: 'https://drift-bottles.xyz/',
  },
  {
    title: '沿途',
    role: '全端・獨立開發',
    description:
      '把考試練習變成一趟火車旅程的陪伴練習網站。上傳 PDF、PPT、Word 題目檔，交給 Google AI 整理成題庫；' +
      '目前有日文五十音、濁音、拗音路線，還有吉祥物雪丸陪你練習。',
    tags: ['AI 題庫整理', 'Google AI', 'Vercel'],
    demo: 'https://along-theway.vercel.app/',
  },
  {
    title: '個人網站 aboutMeee',
    role: '全端・獨立開發',
    description: '就是你正在看的這個網站！用 React + Vite 打造，部署在 GitHub Pages。',
    tags: ['React', 'Vite', 'CSS'],
    repo: 'https://github.com/YouCheng0617/aboutMeee',
  },
]

// gradient: true 會用漸層色顯示
export const friends = [
  { name: 'Zn', url: 'https://yuzen.dev', color: '#DAA520' },
  { name: '南宮有栖', url: 'https://blog.siewilly.me/', color: '#7b00ff' },
  { name: '匿名用戶9487', url: 'https://qwo877.github.io/me/home.html', color: '#CD7F32', gradient: true },
  { name: '伊藤蒼太', url: 'https://itousouta15.tw/', color: '#5d7da1' },
  { name: '淳', url: 'https://chuen666666.github.io/', color: '#6b61f8' },
  { name: 'xuanxiao', url: 'https://xxuanxiao.pages.dev/', color: '#fff000' },
]

// 想加 IG、Discord 等，照格式加一行就好
export const socials = [
  { label: 'GitHub', url: 'https://github.com/YouCheng0617', icon: GithubIcon },
  { label: 'Email', url: 'mailto:20070617TimmyAlan@gmail.com', icon: Mail },
]
