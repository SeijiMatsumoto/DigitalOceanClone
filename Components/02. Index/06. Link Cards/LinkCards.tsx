/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../../../styles/02. Index/06. Link Cards/LinkCards.module.css';

const LinkCards: React.FC = () => {
  const cards = [
    {
      image: 'https://www.digitalocean.com/static/how-to-install-mysql-tutorial-image-c9df8de13b2979771c812d83958439e2.jpg',
      cat: 'tutorial',
      title: 'How to Install MySQL on Ubuntu 20.04',
      date: 'July 30, 2020',
      views: '319k'
    },
    {
      image: 'https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/yH6JtLgzXRt8uZ7ig3YAXu8g/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882',
      cat: 'tutorial',
      title: 'How To Deploy a React Application to DigitalOcean App Platform',
      date: 'December 18, 2020',
      views: '22.8k'
    },
    {
      image: 'https://www.digitalocean.com/static/how-to-install-nodejs-tutorial-image-17f95ba1cbb0d1102ac4357ecee071d0.jpg',
      cat: 'tutorial',
      title: 'How To Install Node.js on Ubuntu 20.04',
      date: 'August 9, 2020',
      views: '273.1k'
    },
    {
      image: 'https://images.prismic.io/www-static/588e28d3-d41e-480b-937b-8c3b19201f6e_DODX3568-790x400-Blog.jpg?auto=compress,format',
      cat: 'Blog',
      title: 'How to scale your SaaS product without breaking the bank',
      date: 'June 22, 2021',
      views: ''
    },
    {
      image: 'https://images.prismic.io/www-static/722b4cb0-1550-403a-841d-34c650886001_83603309-5cc1-4ac8-b282-020370af345d_kubernetes-made-for-you-hero-bg.jpeg?auto=compress,format',
      cat: 'blog',
      title: 'Contributing to open source software: Kubernetes',
      date: 'June 15, 2021',
      views: ''
    },
    {
      image: 'https://assets.digitalocean.com/articles/how-to-code-in-python-banner/how-to-code-in-python.png',
      cat: 'tutorial',
      title: 'How To Code in Python',
      date: 'August 23, 2021',
      views: '16.1m'
    },
    {
      image: 'https://images.prismic.io/www-static/6d8d81b1-971a-4313-b033-b4e125cb14a0_MondoDB-blog-header-790x395.PNG?auto=compress,format',
      cat: 'blog',
      title: 'Introducing DigitalOcean Managed MongoDB – a fully managed, database as a service for modern apps',
      date: 'June 29, 2021',
      views: ''
    },
    {
      image: 'https://images.prismic.io/www-static/49d47d15-ad17-41ef-aba8-69e58eb0ff33_blog-illustration-3-870x440.jpg?auto=compress,format',
      cat: 'blog',
      title: 'Multi-cloud vs hybrid cloud: Everything your business needs to know',
      date: 'July 22, 2021',
      views: ''
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.subDiv}>
        {cards.map(card => {
          return (
            <div className={styles.cardDiv} key={card.image}>
              <div className={styles.cardTop}>
                <img className={styles.mainImage} src={card.image} alt="article image" />
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.textHalf}>
                  <div className={styles.category}>{card.cat}</div>
                  <div className={styles.title}>{card.title}</div>
                </div>
                <div className={styles.statsHalf}>
                  <div className={styles.date}>{card.date}</div>
                  <div className={styles.views}>{card.views}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default LinkCards;