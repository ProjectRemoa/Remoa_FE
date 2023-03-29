import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer} style={window.location.href.includes("mypage") || 
    window.location.href.includes("manage/feedback") ||
    window.location.href.includes("manage/share")?
    {position:"relative"}:{position:"absolute",bottom:"-240px"}}>
        <div className={styles.contents}>
          <h3 className={styles.title}>
            remoa 홈페이지입니다.
          </h3>
        </div>
    </footer>
      
  )
}

export default Footer
