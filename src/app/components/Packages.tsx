'use client';
import styles from '../styles/Packages.module.css';
import Image from 'next/image';

export default function Packages() {
  const packages = [
    {
      title: "CONNECTION PACKAGE",
      subtitle: "Parenting Consultation",
      description: "The Connection Package focuses on parent-child relationships and family systems theory, to enhance parenting skills to better manage behaviours and connection lens.",
      icon: "/assets/icon-1.png"
    },
    {
      title: "CALM PACKAGE",
      subtitle: "Baby Massage (BM)",
      description: "The Calm Package provides a dedicated space for parents to connect with their infant through baby massage. This program is grounded in the principles of attachment theory, leveraging the power of touch to foster a secure and lasting bond. We explore how these sessions can support a child's early development by promoting relaxation, stimulating healthy growth, and improving sleep patterns.",
      icon: "/assets/icon-2.png"
    },
    {
      title: "CURIOUS PACKAGE",
      subtitle: "Professional Development for Early & Primary School Educators",
      description: "If you're an early childhood centre & you're seeking professional development workshops, we tailor sessions based on the needs of the centre. Past workshops have focused on introduction to trauma, enhancing emotional and social development.",
      icon: "/assets/icon-3.png"
    }
  ];

  return (
    <section className={styles.packagesSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.packagesHeader}>
          <h2 className={styles.packagesTitle}>
            Explore Our <span className={styles.titleHighlight}>Professional Development</span> & Family Support Packages
          </h2>
          <p className={styles.packagesCaption}>
            Navigating the journey of parenthood and education requires specialized support. Our packages are thoughtfully developed to provide parents and educators with the tools to build stronger connections, manage complex behaviors, and foster a nurturing environment for children.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.packagesGrid}>
          {packages.map((pkg, index) => (
            <div key={index} className={styles.packageCard}>
              <div className={styles.packageIcon}>
                <Image
                  src={pkg.icon}
                  alt={`${pkg.title} icon`}
                  width={40}
                  height={40}
                  className={styles.iconImage}
                  priority={index < 3}
                />
              </div>
              <div className={styles.packageContent}>
                <h3 className={styles.packageTitle}>{pkg.title}</h3>
                <h4 className={styles.packageSubtitle}>{pkg.subtitle}</h4>
                <p className={styles.packageDescription}>{pkg.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}