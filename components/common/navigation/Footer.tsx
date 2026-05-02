import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* ── Left brand section ── */}
        <div className={styles.brand}>
          
          {/* ✅ Logo Image */}
          <div className={styles.logo}>
            <Image
              src="/images/footerandamanlogo.png"  
              alt="Andaman Logo"
              width={191}
              height={80}
              priority
            />
          </div>

          {/* Contact info */}
          <div className={styles.contactList}>
            
            {/* Phone */}
            <div className={styles.contactRow}>
              <svg className={styles.icon} width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M12.4 9.567l-1.956-1.956a1.083 1.083 0 00-1.533.044l-.956.956a9.473 9.473 0 01-3.566-3.566l.956-.956a1.083 1.083 0 00.044-1.533L3.433.6A1.083 1.083 0 001.9.556L.9 1.556C.344 2.111.1 2.878.178 3.667c.3 3.022 2.1 6.122 4.7 8.722 2.6 2.6 5.7 4.4 8.722 4.7.789.078 1.556-.166 2.111-.722l1-1a1.083 1.083 0 00-.311-1.8z" fill="#FFFFFF"/>
              </svg>
              <span className={styles.contactText}>5214654825</span>
            </div>

            {/* Email */}
            <div className={styles.contactRow}>
              <svg className={styles.icon} width="13" height="13" viewBox="0 0 13 13" fill="none">
                <rect x="0.5" y="2.5" width="12" height="8" rx="1" stroke="#FFFFFF" strokeWidth="1"/>
                <path d="M0.5 3.5l6 4 6-4" stroke="#FFFFFF" strokeWidth="1"/>
              </svg>
              <a href="mailto:andaman@gmail.com" className={styles.contactText}>
                andaman@gmail.com
              </a>
            </div>

          </div>
        </div>

        <div className={styles.spacer} />
      </div>
    </footer>
  );
};

export default Footer;