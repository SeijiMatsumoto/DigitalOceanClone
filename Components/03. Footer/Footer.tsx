import React from "react";
import styles from '../../styles/03. Footer/Footer.module.css';

const Footer: React.FC = () => {
  const links = [
    {
      src: 'https://www-static.cdn.prismic.io/www-static/51eb90d0-78bb-4da2-ac44-7b33613791b5_twitch-social-icon.svg',
      url: '',
      alt: 'twitch button'
    }, {
      src: 'https://www-static.cdn.prismic.io/www-static/0ce90f12-44de-484b-a6d8-88f0de86487d_twitter-social-icon.svg',
      url: '',
      alt: 'twitter button'
    }, {
      src: 'https://www-static.cdn.prismic.io/www-static/ff40ad33-e14c-4ef2-857a-9b078129479e_facebook-social-icon.svg',
      url: '',
      alt: 'facebook button'
    }, {
      src: 'https://www-static.cdn.prismic.io/www-static/225701df-7335-4682-a3f5-6ceb6f8aee97_instagram-social-icon.svg',
      url: '',
      alt: 'instagram button'
    }, {
      src: 'https://www-static.cdn.prismic.io/www-static/f2c16f3b-e8ad-49cc-b379-f7bdcac19b98_youtube-social-icon.svg',
      url: '',
      alt: 'youtube button'
    }, {
      src: 'https://www-static.cdn.prismic.io/www-static/4c2ca1f4-35be-488b-93fb-9a7ef42a02f2_linkedin-social-icon.svg',
      url: '',
      alt: 'linkedin button'
    }, {
      src: 'https://www-static.cdn.prismic.io/www-static/1f4c0b73-f446-4798-9888-69d16f788fff_dev-social-icon.svg',
      url: '',
      alt: 'dev button'
    }, {
      src: 'https://www-static.cdn.prismic.io/www-static/8d2a15bd-f909-4f2c-b205-c5554342ec45_glassdoor-social-icon.svg',
      url: '',
      alt: 'glassdoor button'
    }, {
      src: 'https://www-static.cdn.prismic.io/www-static/0b01dc07-472a-4812-99a8-6a353105984b_builtin-social-icon.svg',
      url: '',
      alt: 'b button'
    },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.leftSide}>
          <img className={styles.logo} src='https://images.prismic.io/www-static%2F903fd83b-8963-42c2-baf6-44f4d6bb83f2_digitalocean-logo-mark.svg?auto=compress,format' alt='logo' />
          <div className={styles.rights}>© 2021 DigitalOcean, LLC. All rights reserved.</div>
        </div>
        <div className={styles.rightSide}>
          {links.map(link => {
            return (
              <div key={link.alt} className={styles.icon}>
                <img src={link.src} alt={link.alt} className={styles.iconImg} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
