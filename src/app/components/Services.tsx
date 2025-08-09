import styles from '../styles/Services.module.css';
import Image from 'next/image';

export default function Services() {
  return (
    <section className={`section ${styles.services}`}>
      <div className={styles.container}>
        <div className={styles.servicesGrid}>
          {/* Left Column (Content) */}
          <div className={styles.servicesContent}>
            <h2 className={styles.sectionTitle}>
              We believe in <span className={styles.sectionTitleColor}>Evidence-Based Parenting </span>for Confident Families.
            </h2>
            <p className={styles.sectionDescription}>
              Parenting can be overwhelming. At Trupti Samuel Consultancy, we provide evidence-based guidance to help you navigate the challenges of raising children from birth to age fourteen. Our goal is to empower you with the knowledge and tools you need to foster a happy and healthy family environment.
            </p>
            <div className={styles.servicesFeatures}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>

                </div>
                <div className={styles.featureContent}>
                  <h3>Evidence-Based Parenting</h3>
                  <p>We use evidence-based strategies from child development and psychology to help you understand your child's behavior.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>

                </div>
                <div className={styles.featureContent}>
                  <h3>Effectively Responding to Challenges</h3>
                  <p>Our approach gives you the confidence to respond effectively to any parenting challenge.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className={styles.servicesImage}>
            <Image
              src="/assets/bl-one.jpg"
              alt="Workout tracker app on a phone and watch"
              width={800}
              height={1200}
              className={styles.mainImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}