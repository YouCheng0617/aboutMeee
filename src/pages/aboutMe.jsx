import { useState, useEffect } from 'react'
import './aboutMe.css'


export default function AboutMe() {




  return (
    <>
      <h1 className='title'>關於我</h1>

      <div className='selfCare'>

        <div id='img'>
          <img src="image/owo.jpg" alt="yogurt" id='me' />
          <h2>yogurt(優格)</h2>
        </div>

        <div id='info'>
          <p>學校: <a href="https://www.nutc.edu.tw/" target='_block'>臺中科技大學NUTC/</a> <a href="https://im.nutc.edu.tw/" target='_blank'>資管科IM</a></p>
          <p>生日:2007/06/17 18y(雙子座)</p>
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