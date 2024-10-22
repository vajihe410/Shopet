//Functions
import { e2p } from '@/utils/replaceNumber'
//Styles
import styles from './Header.module.css'

function Header() {
  return (
    <header>
        <div className={styles.topHeader}>
            <p><span>{`تا ${e2p(50)} %`}</span>تخفیف برای تمامی محصولات</p>
        </div>
    </header>
  )
}

export default Header