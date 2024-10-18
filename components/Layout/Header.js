//Styles
import styles from './Header.module.css'

function Header() {
  return (
    <header>
        <div className={styles.topHeader}>
            <p><span>تا 50 % </span>تخفیف برای تمامی محصولات</p>
        </div>
    </header>
  )
}

export default Header