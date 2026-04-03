import { useScrollReveal } from '@/hooks/useScrollReveal';

const tags = [
  { label: 'Ministry President', highlight: true },
  { label: 'Conference Convener', highlight: true },
  { label: 'OAP / Broadcaster' },
  { label: 'Spoken Word Artist' },
  { label: 'School of Ministry Graduate' },
  { label: 'C&S Church Member' },
  { label: 'Brand Designer' },
  { label: 'Writer' },
];

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-background border-t border-border" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <div className="reveal lg:sticky lg:top-[90px]">
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-bg-subtle shadow-[var(--shadow-lg)]">
              <div className="w-full h-full bg-gradient-to-br from-bg-subtle to-border flex flex-col items-center justify-center gap-3">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-text-light opacity-20">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
                <span className="text-[11px] tracking-[3px] uppercase text-text-light">Jesse Falodun</span>
              </div>
            </div>
            <div className="mt-5 text-center">
              <h3 className="font-heading text-[22px] font-medium">Jesse Falodun</h3>
              <p className="text-[10.5px] tracking-[2.5px] uppercase text-primary mt-1">
                President, Cherubs Cove
              </p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <div className="eyebrow reveal">About Our President</div>
            <h2 className="section-title reveal">
              A Voice. A <em>Vision.</em>
              <br />A Commission.
            </h2>
            <div className="space-y-5">
              <p className="body-text reveal">
                Jesse Falodun was born and bred in Kano. He is a young man passionately given to God,
                with a burning concern for raising high the banner of Christ in every sector of society. His
                heart beats especially for raising burning youths for the Lord and for the propagation of the
                Gospel of Christ, particularly within the Cherubim and Seraphim Church.
              </p>
              <p className="body-text reveal">
                One of Jesse's topmost commissions is seeing the C&S Church perfectly modeled after our
                Lord Jesus Christ and watching the Church rise to become the one rightly after the Father's
                heart. Committed to learning the ways of the Lord, he graduated from the International
                School of Ministry in 2021 and has continued in further pursuit of knowledge in God. He is
                a dedicated, fervent member of Spirit Life Cherubim and Seraphim Church, Ibadan, Nigeria.
              </p>
              <p className="body-text reveal">
                A graduate of Mass Communication from Kogi State University, Jesse is an On-Air
                Personality (OAP) whose voice has graced several radio stations across Nigeria, including
                Cool FM Kano, Radio Nigeria Kogi, Fusion FM and Premier FM in Ibadan. He is an anointed
                Spoken Word Artist who believes deeply in the transforming power of words.
              </p>
              <p className="body-text reveal">
                He strikes a unique balance across every dimension of life, engaging also in business as a
                graphics designer and personal and business branding expert. In his leisure, he loves to
                write, sing, and take long strolls and prayer walks. He is the convener of the International
                Quivers Conference.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8 reveal">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3.5 py-1.5 rounded-full border text-[11px] font-bold tracking-[1.5px] uppercase ${
                    tag.highlight
                      ? 'bg-orange-soft border-primary/25 text-primary'
                      : 'border-border-mid text-muted-foreground'
                  }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
