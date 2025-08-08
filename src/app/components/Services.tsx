'use client';

import Image from 'next/image';

export default function Services() {
  return (
    <section className="section services">
      <div className="container">
        <div className="services-grid">
          {/* Left Column (Content) */}
          <div className="services-content">
            <h2 className="section-title">
              We believe in <span className="section-title-color">Evidence-Based Parenting </span>for Confident Families.
            </h2>
            <p className="section-description">

              Parenting can be overwhelming. At Trupti Samuel Consultancy, we provide evidence-based guidance to help you navigate the challenges of raising children from birth to age fourteen. Our goal is to empower you with the knowledge and tools you need to foster a happy and healthy family environment.
            </p>
            <div className="services-features">
              <div className="feature-item">
                <div className="feature-icon">
                  {/* Assuming you have a checkmark icon */}
                  <Image
                    src="/checkmark.svg"
                    alt="Feature Icon"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="feature-content">
                  <h3>Evidence-Based Parenting</h3>
                  <p>We use evidence-based strategies from child development and psychology to help you understand your child's behavior.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Image
                    src="/checkmark.svg"
                    alt="Feature Icon"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="feature-content">
                  <h3>Effectively Responding to Challenges</h3>
                  <p>Our approach gives you the confidence to respond effectively to any parenting challenge.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="services-image">
            <Image
              src="/assets/bl-one.jpg" // Using your provided image path
              alt="Workout tracker app on a phone and watch"
              width={800}  // Provide larger base width for better quality
              height={1200} // Provide larger base height
              className="main-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}