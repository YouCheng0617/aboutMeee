// ============================================================
// 網站上所有的內容都在這個檔案，想改文字、加作品、加友站，改這裡就好
// ============================================================

export const profile = {
  name: 'youcheng',
  nameZh: '宥成',
  birthday: new Date(2007, 5, 17), // 月份從 0 開始，5 = 6月
  // 首頁打字動畫會輪流顯示這些
  roles: ['資管科學生', '後端開發者', '日文愛好者', '料理人', 'ENFP 快樂小狗'],
  intro:
    '嗨！我是宥成，臺中科技大學資管科的學生，平常主要在寫後端。' +
    '喜歡料理、唱歌、說故事，也喜歡看動漫，沒事就會問 ChatGPT 一堆哲學問題。',
  school: { name: '臺中科技大學 NUTC', url: 'https://www.nutc.edu.tw/' },
  department: { name: '資管科 IM', url: 'https://im.nutc.edu.tw/' },
  zodiac: '雙子座',
  mbti: 'ENFP-T 快樂小狗',
  hobbies: '料理、說話、唱歌、聽故事、看動漫、問 ChatGPT 哲學問題',
  travel: '去過 0 國（想去：日本、土耳其）',
}

export const skills = [
  {
    icon: '💻',
    title: '網頁開發',
    description: '主力在後端，前端也寫得出來',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Git'],
  },
  {
    icon: '🗣️',
    title: '語言',
    description: '會說、也愛說',
    items: ['中文', '日文'],
  },
  {
    icon: '✨',
    title: '其他專長',
    description: '寫程式以外的我',
    items: ['社會科', '說故事', '料理', '唱歌'],
  },
]

// 新增作品：複製一個 { ... } 區塊，改成你的內容即可
// demo / repo 沒有的話可以刪掉那一行
export const projects = [
  {
    title: '個人網站 aboutMeee',
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
  { label: 'GitHub', url: 'https://github.com/YouCheng0617' },
  { label: 'Email', url: 'mailto:20070617TimmyAlan@gmail.com' },
]
