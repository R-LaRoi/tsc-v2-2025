'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the GSAP plugin once
gsap.registerPlugin(ScrollTrigger);

export default function MoreAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  // Default to false to prevent SSR hydration errors, will be set correctly in useEffect
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 991);
    checkMobile(); // Set initial state on client mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Effect to handle the scroll animation
  useEffect(() => {
    // Only run animations on desktop
    if (!isMobile) {
      const ctx = gsap.context(() => {
        // Ensure all refs are available before animating
        if (containerRef.current && imageRefs.current.length > 0 && textRef.current) {
          const validImageRefs = imageRefs.current.filter(ref => ref !== null);
          if (validImageRefs.length === 0) return;

          // 1. SET INITIAL STATE: Images start centered, scaled to 0, and rotated
          gsap.set(validImageRefs, {
            xPercent: -50,
            yPercent: -50,
            top: '50%',
            left: '50%',
            scale: 0,
            rotation: (i) => i * 15 - 30,
          });
          // Text starts invisible and slightly scaled down
          gsap.set(textRef.current, { opacity: 0, scale: 0.8 });

          // 2. CREATE TIMELINE: This animates elements to their final state on scroll
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });

          // Animate text in first
          tl.to(textRef.current, { opacity: 1, scale: 1, duration: 0.3 });

          // Then animate images to their final positions
          tl.to(validImageRefs[0], {
            top: '20%',
            left: '15%',
            scale: 1,
            rotation: -15,
            duration: 0.4,
          }, 0.1)
            .to(validImageRefs[1], {
              top: '60%',
              left: '25%',
              scale: 0.8,
              rotation: 10,
              duration: 0.4,
            }, 0.2)
            .to(validImageRefs[2], {
              top: '15%',
              left: '75%',
              scale: 0.9,
              rotation: 20,
              duration: 0.4,
            }, 0.3)
            .to(validImageRefs[3], {
              top: '70%',
              left: '80%',
              scale: 0.7,
              rotation: -10,
              duration: 0.4,
            }, 0.4)
            .to(validImageRefs[4], {
              top: '40%',
              left: '5%',
              scale: 0.6,
              rotation: 25,
              duration: 0.4,
            }, 0.5);
        }
      }, containerRef);

      return () => ctx.revert();
    }
  }, [isMobile]);

  const images = [
    '/assets/bl-one.jpg',
    '/assets/bltwo.jpg',
    '/assets/blthree.jpg',
    '/assets/bl-2.jpg',
    '/assets/bl-five.jpg',
  ];

  const imageClasses = ['first', 'second', 'third', 'fourth', 'fifth'];

  return (
    <section className="more-about-vh-wrap">
      <div className="more-about-sticky-wrap">
        <div ref={containerRef} className="more-about-contant-wrap">
          {/* Text Content (Renders on top) */}
          <div ref={textRef} className="more-about-contant">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Complimentary 30 minute initial consultation provided at no cost.
            </h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
              More About Us
            </button>
          </div>

          {/* Image Wrapper (Renders behind text on desktop) */}
          <div className="more-about-image-wrapper">
            {images.map((src, index) => (
              <div
                key={src}
                ref={(el) => { imageRefs.current[index] = el; }}
                className={`more-about-image-wrap ${imageClasses[index]}`}
                // On mobile, this inline style resets any leftover GSAP styles
                style={isMobile ? { position: 'relative', opacity: 1, transform: 'none' } : {}}
              >
                <Image
                  src={src}
                  alt={`Community image ${index + 1}`}
                  fill
                  className="more-about-image"
                  sizes="(max-width: 991px) 110px, 144px"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}