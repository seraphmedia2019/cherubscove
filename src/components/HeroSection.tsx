import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero1 from '@/assets/hero/hero1.jpg';
import hero2 from '@/assets/hero/hero2.jpg';
import hero3 from '@/assets/hero/hero3.jpg';
import hero4 from '@/assets/hero/hero4.jpg';
import hero5 from '@/assets/hero/hero5.jpg';

const slides = [hero1, hero2, hero3, hero4, hero5];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col relative overflow-hidden pt-[70px]">
      <div className="flex-1 relative min-h-[calc(100vh-70px)] flex items-end">
        {/* Sliding images */}
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Ministry gathering ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === current ? 'opacity-100 scale-[1.02]' : 'opacity-0 scale-100'
            }`}
            style={{
              transition: 'opacity 1s ease-in-out, transform 6s ease-out',
              transform: i === current ? 'scale(1.03)' : 'scale(1)',
            }}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}

        {/* Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to top, rgba(8,5,2,0.88) 0%, rgba(8,5,2,0.55) 40%, rgba(8,5,2,0.2) 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-[2] px-8 md:px-16 pb-16 md:pb-20 pt-16 max-w-[820px]">
          <div className="inline-flex items-center gap-2.5 text-[10px] font-bold tracking-[5px] uppercase text-white/55 mb-5">
            <span className="w-[18px] h-px bg-primary inline-block" />
            Welcome to Cherubs Cove Ministry
          </div>
          <h1 className="font-heading text-[clamp(48px,7.5vw,96px)] font-normal leading-[0.95] mb-2.5" style={{ color: '#fff' }}>
            The <em className="text-primary italic">Making</em>
            <br />
            Place.
          </h1>
          <p className="font-heading text-[clamp(16px,2vw,21px)] font-normal italic mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
            An interdenominational ministry raising burning youths for the Lord.
          </p>
          <p
            className="text-[13px] font-light leading-[1.8] mb-10 max-w-[480px] border-l-2 border-primary pl-4"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            "Each will be like a refuge from the wind and a shelter from the storm."
            <br />
            <span className="text-[11px] tracking-[1.5px] opacity-70 font-body">Isaiah 32:2</span>
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/register" className="btn-primary-custom">
              Register for Quiver's 2026
            </Link>
            <Link to="/about-jesse" className="btn-ghost-custom">
              Meet Jesse Falodun
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 right-8 z-[3] flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-primary w-6' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scripture Bar */}
      <div className="bg-primary py-3.5 px-8 text-center">
        <p className="font-heading text-[13.5px] italic leading-relaxed" style={{ color: '#fff' }}>
          "Each will be like a refuge from the wind and a shelter from the storm."{' '}
          <span className="font-body not-italic text-[10px] tracking-[2px] ml-2 opacity-80">
            — Isaiah 32:2
          </span>
        </p>
      </div>
    </section>
  );
}
