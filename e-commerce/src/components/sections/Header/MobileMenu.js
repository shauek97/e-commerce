import styles from "./Header.module.scss";
import NavLinks from "./NavLinks";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);

  console.log(open);

  return (
    <>
      <div className={styles.mobileSetting}>
        <div className={styles.mobileMenu}>
          {open && (
            <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
          )}
        </div>
        <div className={styles.hamburgerBox}>
          <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          </div>
        </div>
      </div>
    </>
  );
}
