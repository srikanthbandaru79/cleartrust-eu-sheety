import { Mic, UserCheck, Home, Compass, ChevronRight } from "lucide-react";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Mic,
      title: "Motivational Speaking",
      description:
        "Powerful keynote speeches and presentations that inspire action, clarity, and transformation in individuals and organizations.",
      link: "#contact",
    },
    {
      icon: UserCheck,
      title: "Personal Coaching",
      description:
        "One-on-one personalized coaching sessions designed to unlock your potential and achieve your personal and professional goals.",
      link: "#contact",
    },
    {
      icon: Home,
      title: "Real Estate Mentorship",
      description:
        "Expert guidance and strategies to navigate the real estate market successfully and build sustainable wealth.",
      link: "#contact",
    },
    {
      icon: Compass,
      title: "Life & Career Clarity",
      description:
        "Strategic guidance to help you find direction and make confident life & career decisions.",
      link: "#contact",
    },
  ];

  return (
    <section
      id="services"
      style={{
        background: "linear-gradient(180deg, #0a1628 0%, #152238 50%, #0a1628 100%)",
        padding: "6rem 1rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 3.5rem" }}
        >
          <span
            style={{
              display: "inline-block",
              background: "rgba(212,165,116,0.15)",
              color: "#d4a574",
              padding: "6px 14px",
              borderRadius: 999,
              fontSize: 13,
            }}
          >
            What I Offer
          </span>

          <h2 style={{ color: "#fff", fontSize: 42, margin: "14px 0" }}>
            Services That <span style={{ color: "#d4a574" }}>Transform</span>
          </h2>

          <p style={{ color: "rgba(255,255,255,.7)", fontSize: 18 }}>
            Practical guidance designed to create real personal & professional growth
          </p>
        </motion.div>

        {/* Grid */}
        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 18px 40px rgba(212,165,116,.25)",
              }}
              className="service-card"
            >
              <div className="icon-wrap">
                <service.icon size={28} color="#d4a574" />
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <a href={service.link} className="learn-more">
                Learn More <span className="arrow-icon"><ChevronRight size={16} strokeWidth={3} /></span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 36px;
          }
        }

        .service-card {
          background: linear-gradient(135deg, rgba(212,165,116,0.18), rgba(212,165,116,0.05));
          border-radius: 22px;
          padding: 28px;
          border: 1px solid rgba(255,255,255,.1);
          display: flex;
          flex-direction: column;
          min-height: 260px;
          overflow: hidden;
          contain: layout paint;
          transition: border-color .2s ease;
        }

        .service-card:hover {
          border-color: rgba(212,165,116,.5);
        }

        .icon-wrap {
          width: 54px;
          height: 54px;
          background: rgba(212,165,116,.2);
          border-radius: 12px;
          display: grid;
          place-items: center;
          margin-bottom: 16px;
        }

        .service-card h3 {
          color: white;
          font-size: 22px;
          margin-bottom: 10px;
        }

        .service-card p {
          color: rgba(255,255,255,.7);
          line-height: 1.6;
          flex: 1;
        }

        .learn-more {
          margin-top: 18px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #d4a574;
          font-weight: 600;
          text-decoration: none;
          line-height:1;
          transition: transform .2s ease, color .2s ease;
         
        }
         .learn-more .arrow-icon{
        display:flex;
        align-items:centre;
        posistion:relative;
        top:2px;
        margin-top:2px;
        transistion:transform .2s ease;
        }

        .learn-more:hover {
          transform: translateX(6px);
          color: #e8c89e;
        }
      `}</style>
    </section>
  );
}