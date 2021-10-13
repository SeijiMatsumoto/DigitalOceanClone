import React from 'react';
import styles from '../../../styles/02. Index/08. Links/Links.module.css';

const Links: React.FC = () => {

  const Company = ['About', 'Leadership', 'Blog', 'Careers', 'Customers', 'Partners', 'Referral Program', 'Press', 'Legal', 'Trust Platform', 'Investor Relations'];

  const Products = ['Products Overview', 'Droplets', 'Kubernetes', 'Managed Databases', 'Spaces', 'Marketplace', 'Load Balancers', 'Block Storage', 'Tools & Integrations', 'API', 'Pricing', 'Documentation', 'Release Notes'];

  const Community = ['Tutorials', 'Meetups', 'Q&A', 'Write for DOnations', 'Droplets for Demos', 'Hatch Startup Program', 'Shop Swag', 'Research Program', 'Currents Research', 'Open Source', 'Code of Conduct', 'Newsletter Signup'];

  const Solutions = ['Web & Mobile Apps', 'Website Hosting', 'Game Development', 'Streaming', 'VPN', 'Startups', 'SaaS Solutions', 'Agency & Web Dev Shops', 'Managed Cloud Hosting Providers', 'Big Data', 'Business Solutions'];

  const Contact = ['Support', 'Sales', 'Report Abuse', 'System Status'];

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.linkCol}>
          <div className={styles.title}>Company</div>
          {Company.map(link => <div key={link} className={styles.link}>{link}</div>)}
        </div>
        <div className={styles.linkCol}>
          <div className={styles.title}>Products</div>
          {Products.map(link => <div key={link} className={styles.link}>{link}</div>)}
        </div>
        <div className={styles.linkCol}>
          <div className={styles.title}>Community</div>
          {Community.map(link => <div key={link} className={styles.link}>{link}</div>)}
        </div>
        <div className={styles.linkCol}>
          <div className={styles.title}>Solutions</div>
          {Solutions.map(link => <div key={link} className={styles.link}>{link}</div>)}
        </div>
        <div className={styles.linkCol}>
          <div className={styles.title}>Contact</div>
          {Contact.map(link => <div key={link} className={styles.link}>{link}</div>)}
        </div>
      </div>
    </div>
  );
};

export default Links;