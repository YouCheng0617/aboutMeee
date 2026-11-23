import './aboutMe.css'

const BIRTHDAY = new Date(2007, 5, 17) // 月份從 0 開始，5 = 6月

function getAge(birthday) {
  const today = new Date()
  let age = today.getFullYear() - birthday.getFullYear()
  const beforeBirthday =
    today.getMonth() < birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())
  if (beforeBirthday) age--
  return age
}

export default function AboutMe() {
  const age = getAge(BIRTHDAY)

  return (
    <>
      <h1 className='title'>關於我</h1>

      <div className='selfCare'>

        <div id='img'>
          <img src="image/owo.jpg" alt="youcheng" id='me' />
          <h2>youcheng(宥成)</h2>
        </div>

        <div id='info'>
          <p>學校: <a href="https://www.nutc.edu.tw/" target='_blank'>臺中科技大學NUTC/</a> <a href="https://im.nutc.edu.tw/" target='_blank'>資管科IM</a></p>
          <p>生日:2007/06/17 {age}y(雙子座)</p>
          <p>E-Mail:20070617TimmyAlan@gmail.com</p>
          <p>專長:社會科、日文、說故事、料理</p>
          <p>興趣:料理、說話、唱歌、聽故事、看動漫、問chatGPT一堆哲學問題</p>
          <p>mbti:ENFP-T 快樂小狗</p>
          <p>去過的國家:0 (想去:日本跟土耳其)</p>
        </div>
      </div>


    </>
  )
}