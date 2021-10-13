/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../../styles/02. Index/02. Testimonials/Testimonials.module.css";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      alt: 'logo',
      src: 'https://shmector.com/_ph/13/188552034.png'
    },
    {
      alt: 'text',
      company: 'Matsumoto LLC.',
      text: "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. ",
      person: 'Seiji Matsumoto, CEO'
    }, {
      alt: 'logo',
      src: 'https://shmector.com/_ph/13/188552034.png'
    },
    {
      alt: 'text',
      company: 'Matsumoto LLC.',
      text: "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. ",
      person: 'Seiji Matsumoto, CEO'
    }, {
      alt: 'logo',
      src: 'https://shmector.com/_ph/13/188552034.png'
    },
    {
      alt: 'text',
      company: 'Matsumoto LLC.',
      text: "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. ",
      person: 'Seiji Matsumoto, CEO'
    }, {
      alt: 'logo',
      src: 'https://shmector.com/_ph/13/188552034.png'
    },
    {
      alt: 'text',
      company: 'Matsumoto LLC.',
      text: "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. ",
      person: 'Seiji Matsumoto, CEO'
    }, {
      alt: 'logo',
      src: 'https://shmector.com/_ph/13/188552034.png'
    },
    {
      alt: 'text',
      company: 'Matsumoto LLC.',
      text: "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. ",
      person: 'Seiji Matsumoto, CEO'
    }, {
      alt: 'logo',
      src: 'https://shmector.com/_ph/13/188552034.png'
    },
    {
      alt: 'text',
      company: 'Matsumoto LLC.',
      text: "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. ",
      person: 'Seiji Matsumoto, CEO'
    }, {
      alt: 'logo',
      src: 'https://shmector.com/_ph/13/188552034.png'
    },
    {
      alt: 'text',
      company: 'Matsumoto LLC.',
      text: "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. ",
      person: 'Seiji Matsumoto, CEO'
    }, {
      alt: 'logo',
      src: 'https://shmector.com/_ph/13/188552034.png'
    },
    {
      alt: 'text',
      company: 'Matsumoto LLC.',
      text: "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. ",
      person: 'Seiji Matsumoto, CEO'
    },

  ]
  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        {testimonials.map((a, i) => {
          if (a.alt === 'logo') {
            return (
              <div key={a.alt + i} className={styles.card}>
                <img className={styles.image} src={a.src} alt={a.alt}></img>
              </div>
            )
          } else {
            return (
              <div key={a.alt + i} className={styles.altCard}>
                <div className={styles.company}>{a.company}</div>
                <div className={styles.review}>{a.text}</div>
                <div className={styles.person}>{a.person}</div>
              </div>
            )
          }
        })}
      </div>
      <div className={styles.bottomRow}>
        {testimonials.map((a, i) => {
          if (i > 0) {
            if (a.alt === 'logo') {
              return (
                <div key={a.alt + i} className={styles.card}>
                  <img className={styles.image} src={a.src} alt={a.alt}></img>
                </div>
              )
            } else {
              return (
                <div key={a.alt + i} className={styles.altCard}>
                  <div className={styles.company}>{a.company}</div>
                  <div className={styles.review}>{a.text}</div>
                  <div className={styles.person}>{a.person}</div>
                </div>
              )
            }
          }
        })
        };
      </div>
    </div>
  );
};

export default Testimonials;
