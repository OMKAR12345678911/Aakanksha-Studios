import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CameraScroll() {
  const sectionRef = useRef(null);
  const cameraRef = useRef(null);
  const lensRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: '(min-width: 701px)',
          mobile: '(max-width: 700px)',
        },
        (context) => {
          const { desktop } = context.conditions;

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: desktop ? '+=1700' : '+=1000',
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });

          timeline
            .fromTo(
              cameraRef.current,
              {
                x: desktop ? '-32vw' : '-12vw',
                y: 100,
                rotation: -18,
                scale: desktop ? 0.68 : 0.58,
              },
              {
                x: desktop ? '10vw' : '0vw',
                y: 0,
                rotation: 0,
                scale: desktop ? 1 : 0.76,
                duration: 2,
                ease: 'power2.out',
              }
            )
            .to(
              textRef.current,
              { opacity: 0, y: -35, duration: 0.7 },
              0.8
            )
            .to(
              cameraRef.current,
              {
                x: desktop ? '32vw' : '18vw',
                y: -20,
                rotation: 13,
                scale: desktop ? 0.8 : 0.58,
                duration: 2,
                ease: 'power1.inOut',
              },
              2
            )
            .to(
              lensRef.current,
              {
                rotation: 180,
                scale: 1.14,
                duration: 1.2,
                ease: 'power2.inOut',
              },
              2.3
            )
            .to(
              imageRef.current,
              { opacity: 1, scale: 1, duration: 1.5 },
              2.6
            )
            .to(
              cameraRef.current,
              {
                x: desktop ? '38vw' : '24vw',
                y: 90,
                rotation: 25,
                scale: desktop ? 0.55 : 0.4,
                duration: 1.5,
              },
              3
            );
        }
      );

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="camera-story" ref={sectionRef}>
      <div className="camera-story-copy" ref={textRef}>
        <span className="camera-kicker">BEHIND EVERY FRAME</span>
        <h2>
          It begins<br />
          <em>with a moment.</em>
        </h2>
        <p>
          A little light. A feeling. A story worth remembering.
        </p>
        <span className="camera-scroll-note">
          SCROLL TO EXPLORE ↓
        </span>
      </div>

      <div className="camera-art" ref={cameraRef}>
        <svg
          viewBox="0 0 620 400"
          role="img"
          aria-label="Illustration of a professional DSLR camera"
        >
          <defs>
            <linearGradient id="cameraBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4d4a43" />
              <stop offset="48%" stopColor="#201f1c" />
              <stop offset="100%" stopColor="#090909" />
            </linearGradient>
            <radialGradient id="cameraGlass">
              <stop offset="0%" stopColor="#6d817f" />
              <stop offset="32%" stopColor="#263e42" />
              <stop offset="65%" stopColor="#111b20" />
              <stop offset="86%" stopColor="#77766d" />
              <stop offset="100%" stopColor="#141414" />
            </radialGradient>
            <linearGradient id="lensBody" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#080808" />
              <stop offset="40%" stopColor="#44413a" />
              <stop offset="60%" stopColor="#171715" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
          </defs>

          <ellipse cx="310" cy="355" rx="230" ry="22" fill="#000" opacity=".3" />

          <path
            d="M112 118 L178 118 L202 82 L314 82 L342 118 L477 118
               Q505 118 505 146 L505 289 Q505 312 480 312 L111 312
               Q87 312 87 287 L87 145 Q87 118 112 118 Z"
            fill="url(#cameraBody)"
            stroke="#777064"
            strokeWidth="3"
          />

          <path
            d="M205 82 L217 66 L302 66 L315 82"
            fill="#292823"
            stroke="#827965"
            strokeWidth="3"
          />

          <rect x="237" y="91" width="48" height="10" rx="3" fill="#080808" />
          <rect x="116" y="137" width="55" height="34" rx="5" fill="#151513" stroke="#70685a" />
          <circle cx="445" cy="139" r="12" fill="#121212" stroke="#a08b64" strokeWidth="3" />
          <rect x="367" y="96" width="31" height="13" rx="3" fill="#090909" />
          <circle cx="151" cy="120" r="7" fill="#c8a66b" />

          <g ref={lensRef} style={{ transformOrigin: '310px 220px' }}>
            <path
              d="M225 143 L395 143 L418 174 L418 270 L394 296 L226 296
                 L203 270 L203 174 Z"
              fill="url(#lensBody)"
              stroke="#756d5d"
              strokeWidth="3"
            />
            <path d="M222 158 L398 158 M214 174 L408 174 M211 270 L411 270"
              stroke="#9a8b70" strokeWidth="3" opacity=".7" />
            <circle cx="310" cy="220" r="91" fill="#080808" stroke="#b3a68d" strokeWidth="5" />
            <circle cx="310" cy="220" r="77" fill="#282720" stroke="#625e50" strokeWidth="5" />
            <circle cx="310" cy="220" r="65" fill="url(#cameraGlass)" stroke="#a59a7e" strokeWidth="3" />
            <circle cx="310" cy="220" r="39" fill="#172b30" stroke="#647b7b" strokeWidth="2" />
            <circle cx="310" cy="220" r="18" fill="#0b1317" />
            <ellipse cx="291" cy="201" rx="17" ry="8" fill="#b4d0c9" opacity=".38" transform="rotate(-40 291 201)" />
            <circle cx="310" cy="220" r="58" fill="none" stroke="#c8a66b" strokeWidth="1.5" opacity=".8" />
          </g>

          <text x="310" y="139" textAnchor="middle" fontSize="12" fill="#d8c69e" letterSpacing="5">
            AAKANKSHA
          </text>
          <text x="310" y="331" textAnchor="middle" fontSize="10" fill="#c8a66b" letterSpacing="4">
            PROFESSIONAL PHOTOGRAPHY
          </text>
        </svg>
      </div>

      <div className="camera-reveal" ref={imageRef}>
        <span>THE ART OF SEEING</span>
        <h3>Every frame,<br /><em>a feeling.</em></h3>
        <p>Beautifully captured. Forever remembered.</p>
      </div>

      <span className="camera-index">01 — THE CREATIVE PROCESS</span>
    </section>
  );
}
