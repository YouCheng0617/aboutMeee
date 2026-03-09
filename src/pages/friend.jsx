import { useState,useEffect } from 'react'
import './friend.css'

export default function Friend(){
    
    return(
     <div className='friend'>
                 <p>
                   友達のWeb：
                   <a href="https://yuzen.dev" target='_blank' style={{ color: "#DAA520" }}>Zn</a>
                   、
                   <a href="https://qwo877.github.io/me/home.html" target='_blank' id='Moew'>匿名用戶9487</a>
                   、
                   <a href="https://itousouta15.tw/" target='_blank' style={{ color: "#5d7da1" }}>伊藤蒼太</a>
                 </p>
               </div>
    )
}