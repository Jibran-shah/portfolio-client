import React from 'react'
import ReactDOM from 'react-dom'
import styles from './modal.module.css'

export default function Model({isOpen}) {
  return ReactDOM.createPortal(
    <>{
        isOpen &&
        <div className={styles.ModalOverlay}>
          <div className={styles.Modal}>
            {/* <div>
            </div> */}
          </div>
        </div>
      }
    </>,
    document.getElementById('loadingIndicator')
  )
}
