import styles from './Header.module.scss'
import Container from '../../features/Container/Container';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    return (
        <header>
        <nav>
          <Container>
            <div className={styles.navbar}>
              <div className={styles.logoBox}>
                <div className={styles.logo}>
                <img src='https://i.postimg.cc/LXw4TCch/HIgh-level-shoes.png' border='0' alt='HIgh-level-shoes'/>
                </div>
              </div>
              <Menu />
            <MobileMenu />
            </div>
          </Container>
        </nav>
      </header>
    );
  }