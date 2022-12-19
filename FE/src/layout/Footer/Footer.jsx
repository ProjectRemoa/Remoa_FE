import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
      <footer className={styles.footer}>
        <div className={styles.contents}>
          <h3 className={styles.title}>
            remoa 홈페이지입니다.
          </h3>
        </div>
      </footer>
  )
}

export default Footer
