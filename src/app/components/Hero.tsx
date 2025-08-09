'use client'
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const topWrapRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const colorOverlayRef = useRef<HTMLDivElement>(null);
  const mobileOverlayRef = useRef<HTMLDivElement>(null);
  const [isTopWrapVisible, setIsTopWrapVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Import GSAP dynamically since it's client-side only
    const loadGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');

        gsap.registerPlugin(ScrollTrigger);

        // Parallax effect for the video - only on desktop
        if (videoRef.current && window.innerWidth >= 768) {
          const parallaxAmount = -25;

          gsap.to(videoRef.current, {
            yPercent: parallaxAmount,
            ease: "none",
            scrollTrigger: {
              trigger: imageWrapRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }

        // Mobile overlay animation
        if (mobileVideoRef.current && mobileOverlayRef.current && window.innerWidth < 768) {
          gsap.to(mobileOverlayRef.current, {
            yPercent: -100,
            ease: "power2.out",
            duration: 1.5,
            delay: 0.5,
            scrollTrigger: {
              trigger: mobileVideoRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });
        }

        // Desktop overlay animation
        if (colorOverlayRef.current && window.innerWidth >= 768) {
          gsap.to(colorOverlayRef.current, {
            yPercent: -100,
            ease: "power2.out",
            duration: 2,
            delay: 1,
            scrollTrigger: {
              trigger: imageWrapRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse"
            }
          });
        }
      } catch (error) {
        console.error('Failed to load GSAP:', error);
      }
    };

    loadGSAP();
  }, [isMounted]);

  // Intersection Observer for top wrap visibility
  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTopWrapVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (topWrapRef.current) {
      observer.observe(topWrapRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isMounted]);

  return (
    <section className={`section ${styles.aboutUs}`}>
      <div className={styles.aboutUsWrapper}>
        {/* Top section with main title - Slide in from bottom */}
        <div className={styles.container}>
          <div
            ref={topWrapRef}
            className={`${styles.aboutUsTopWrap} transition-all duration-1000 ease-out ${isTopWrapVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-16'
              }`}
          >
            <h1 className="about-us-title text-8xl md:text-7xl xl:text-9xl font-bold text-white mb-6 leading-tight">
              TSC
            </h1>
            <small className="tsc-name uppercase text-white">trupti samuel consultancy</small>
            <div className={styles.aboutUsDetailsWrap}>
              <p className="about-us-details text-lg md:text-2xl text-stone-100 max-w-3xl">
                Working with families to build a solid foundation at home.
              </p>
            </div>
          </div>
        </div>

        {/* Content section with mission statement */}
        <div className={styles.aboutUsContantWrap}>
          <div className={styles.container}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left column - Mission title */}
              <div className="about-us-title-wrap">
                <div className="section-title-wrap max-width-45 mg-bottom-0-rem left opacity-100 transform-none">
                  <h2 className="section-title color-white text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
                    Centered on Empathy and Connection
                  </h2>
                </div>
              </div>

              {/* Right column - Mission description */}
              <div className="about-section-details-wrap opacity-100 transform-none">
                <p className="about-us-detai text-base md:text-lg text-stone-100 leading-relaxed">
                  At Trupti Samuel Consultancy our mission is to be a source of assistance to navigate emotional and social challenges in children.
                  We provide practical strategies embedded in evidence-based research that aims to empower individuals and communities towards resilience and wellbeing through empathy and proactive solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video section - Mobile and Desktop layouts */}
        <div className="mt-8 md:mt-12 lg:mt-16 w-full">
          {/* Mobile Layout - Natural sizing */}
          <div
            ref={mobileVideoRef as unknown as React.RefObject<HTMLDivElement>}
            className="block md:hidden relative rounded-lg overflow-hidden"
          >
            <video
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/tscvidai.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Mobile Overlay - starts hidden */}
            <div
              ref={mobileOverlayRef}
              className="absolute inset-0 w-full h-full z-10"
              style={{
                willChange: 'transform',
                transform: 'translateY(-100%)',
                background: 'linear-gradient(0deg,rgba(236, 223, 218, 1) 0%, rgba(214, 158, 139, 1) 100%)'
              }}
            />
          </div>

          {/* Desktop Layout - Fixed height with parallax */}
          <div
            ref={imageWrapRef}
            className="hidden md:block relative overflow-hidden rounded-lg md:h-[70vh] lg:h-[80vh] xl:h-screen"
            style={{ willChange: 'transform' }}
          >
            <div className="absolute inset-0 w-full h-full">
              <div className="relative w-full h-full">
                <div
                  ref={videoRef as unknown as React.RefObject<HTMLDivElement>}
                  className="absolute inset-0 w-full h-full scale-110 z-0"
                  style={{ willChange: 'transform' }}
                >
                  <video
                    className="w-full h-full object-cover object-center"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/assets/tscvidai.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Desktop Overlay */}
                <div
                  ref={colorOverlayRef}
                  className="absolute inset-0 w-full h-full z-10"
                  style={{
                    willChange: 'transform',
                    transform: 'translateY(0%)',
                    background: 'linear-gradient(0deg,rgba(236, 223, 218, 1) 0%, rgba(214, 158, 139, 1) 100%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}