import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = ({ data }) => {
  const { href, text, logo } = data;

  return (
    <footer className={styles.footer}>
      <div className="block">
        <a
          className={styles.link}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.text}>{text}</div>
              <div className={styles.logo}>
                <Image src={logo.src} alt={logo.alt} width={71} height={16} />
              </div>
            </div>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
