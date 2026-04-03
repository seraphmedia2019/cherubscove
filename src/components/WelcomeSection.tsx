import { useScrollReveal } from '@/hooks/useScrollReveal';
import welcomeImg from '@/assets/welcome.jpg';

export default function WelcomeSection() {
  const ref = useScrollReveal();

  return (
    <section id="welcome" className="bg-background py-24" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20 items-center">
          <div className="reveal aspect-[4/5] rounded-sm overflow-hidden bg-bg-subtle">
            <img
              src={welcomeImg}
              alt="Cherubs Cove Ministry gathering"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <div className="eyebrow reveal">Who We Are</div>
            <h2 className="font-heading text-[clamp(26px,3vw,40px)] font-normal italic leading-[1.3] mt-3 reveal">
              The <em className="not-italic text-primary">Making</em> Place
            </h2>
            <div className="w-12 h-0.5 bg-primary my-8 reveal" />
            <p className="body-text reveal">
              Cherubs Cove is an interdenominational ministry committed to raising a generation on fire for God.
              We exist to equip, ignite, and release burning youths into every sphere of society, with the Gospel
              of Jesus Christ as our foundation and compass.
            </p>
            <p className="body-text mt-4 reveal">
              We believe the Church must rise to reflect Christ in its fullness, and we are devoted to providing
              a spiritual environment where every individual finds their place in God's grand narrative. From our
              gatherings to our flagship International Quivers Conference, everything flows from one conviction:
              this is the making place.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap reveal">
              <a href="#conference" className="btn-solid-custom">
                Quiver's Conference
              </a>
              <a href="#about" className="btn-outline-custom">
                Our President
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
