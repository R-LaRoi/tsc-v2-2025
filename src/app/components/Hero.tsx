'use client'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const mobileImageRef = useRef<HTMLDivElement>(null);
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

        // Parallax effect for the image - only on desktop
        if (imageRef.current && window.innerWidth >= 768) {
          const parallaxAmount = -25;

          gsap.to(imageRef.current, {
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
        if (mobileImageRef.current && mobileOverlayRef.current && window.innerWidth < 768) {
          gsap.to(mobileOverlayRef.current, {
            yPercent: -100,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: mobileImageRef.current,
              start: "top 80%",
              end: "top 50%",
              scrub: 1
            }
          });
        }

        // Desktop image reveal animation with color overlay
        if (imageWrapRef.current && colorOverlayRef.current && window.innerWidth >= 768) {
          const isTablet = window.innerWidth < 1024;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: imageWrapRef.current,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
              onUpdate: (self) => {
                const progress = self.progress;
                const scale = isTablet ? 0.8 + (progress * 0.2) : 0.7 + (progress * 0.3);

                if (imageWrapRef.current) {
                  gsap.set(imageWrapRef.current, {
                    scale: scale,
                    transformOrigin: "center center"
                  });
                }
              }
            }
          });

          // Color overlay animation - slides up to reveal image
          tl.to(colorOverlayRef.current, {
            yPercent: -100,
            duration: 1,
            ease: "power2.inOut"
          }, 0);
        }

        // Cleanup function
        if (!isMounted) {
          return null; // or a loading skeleton
        }

        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      } catch (error) {
        console.log('GSAP loading error:', error);
      }
    };

    loadGSAP();

    // Intersection Observer for slide-in animation (keeping your existing logic)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === topWrapRef.current) {
            setIsTopWrapVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (topWrapRef.current) {
      observer.observe(topWrapRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isMounted]);

  return (
    <section className="section about-us">
      <div className="about-us-wrapper">
        {/* Top section with main title - Slide in from bottom */}
        <div className="container">
          <div
            ref={topWrapRef}
            className={`about-us-top-wrap transition-all duration-1000 ease-out ${isTopWrapVisible
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-16'
              }`}
          >

            <h1 className="about-us-title text-8xl md:text-7xl xl:text-9xl font-bold text-white mb-6 leading-tight">
              TSC


            </h1>
            <small className="tsc-name uppercase text-white ">trupti samuel consultancy</small>
            <div className="about-us-details-wrap">
              <p className="about-us-details text-lg md:text-2xl text-stone-100 max-w-3xl">

                Working with families to build a solid foundation at home.

              </p>
            </div>
          </div>
        </div>

        {/* Content section with mission statement */}
        <div className="about-us-contant-wrap">
          <div className="container">
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
                <p className="about-us-detai text-base md:text-lg text-stone-100 leading-relaxed">At Trupti Samuel Consultancy our mission is to be a source of assistance to navigate emotional and social challenges in children.
                  We provide practical strategies embedded in evidence-based research that aims to empower individuals and communities towards resilience and wellbeing through empathy and proactive solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image section - Mobile and Desktop layouts */}
        <div className="mt-8 md:mt-12 lg:mt-16 w-full">
          {/* Mobile Layout - Natural sizing */}
          <div
            ref={mobileImageRef}
            className="block md:hidden relative rounded-lg overflow-hidden"
          >
            <Image
              src="https://cdn.prod.website-files.com/682582b4cbc2b57f48237ea0/683307e433ad069d7883a29a_about-us-img.png"
              alt="Person in wellness setting"
              width={800}
              height={600}
              className="w-full h-auto"
              sizes="100vw"
              priority
            />
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
                  ref={imageRef}
                  className="absolute inset-0 w-full h-full scale-110 z-0"
                  style={{ willChange: 'transform' }}
                >
                  <Image
                    src="https://cdn.prod.website-files.com/682582b4cbc2b57f48237ea0/683307e433ad069d7883a29a_about-us-img.png"
                    alt="Person in wellness setting"
                    fill
                    className="w-full h-full object-cover object-center"
                    sizes="100vw"
                    priority
                  />
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

        {/* Additional content to enable scrolling */}

      </div>

      {/* No need for GSAP script tags since we're importing dynamically */}
    </section>
  );
}