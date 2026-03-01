
import {Calendar, MessageCircle, Mail, Phone 
} from "lucide-react";
import { motion } from "framer-motion";
import { personal_info } from "../common/Info";


export default function CTA() {
  return (
    <section id="contact" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #152238 50%, #0a1628 100%)',
      padding: '4rem 0',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.3) 0%, rgba(212, 165, 116, 0.2) 50%, rgba(212, 165, 116, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1.5rem',
            padding: '3rem 2rem',
            border: '1px solid rgba(212, 165, 116, 0.4)'
          }}>
          <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'white', lineHeight: '1.2', marginBottom: '1.5rem' }}>
              Let's Start Your <span style={{ color: '#d4a574' }}>Journey</span> Together
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              Take the first step towards transforming your life and career. Book a session or reach out on WhatsApp for immediate support.
            </p>
          </div>

    <div
  className="cta-buttons"
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    width: "100%",
  }}
>
  {/* Primary Button */}
  <a href="#home"
    className="cta-primary"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.75rem",
      backgroundColor: "#d4a574",
      color: "#0a1628",
      padding: "1.1rem 2rem",
      borderRadius: "0.75rem",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: 600,
      transition: "all 0.3s ease",
      width: "100%",
      maxWidth: "420px",
    }}
  >
    <Calendar size={22} />
    <span>Book a Speaking Session</span>
  </a>

  {/* Secondary Button */}
  <a
    href={personal_info.whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="cta-secondary"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.75rem",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "white",
      padding: "1.1rem 2rem",
      borderRadius: "0.75rem",
      textDecoration: "none",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      fontSize: "1rem",
      fontWeight: 500,
      transition: "all 0.3s ease",
      width: "100%",
      maxWidth: "420px",
    }}
  >
    <MessageCircle size={22} />
    <span>WhatsApp Now</span>
  </a>
</div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem',
            maxWidth: '42rem',
            margin: '3rem auto 0',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }} className="contact-info">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              <Mail size={20} style={{ color: '#d4a574' }} />
              <span>{personal_info.email}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              <Phone size={20} style={{ color: '#d4a574' }} />
              <span>{personal_info.mobile}</span>
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (min-width: 640px) {
          .cta-buttons { flex-direction: row !important; }
          .cta-buttons a { width: auto !important; }
        }
        @media (min-width: 768px) {
          .contact-info { grid-template-columns: repeat(2, 1fr) !important; }
        }
        

      .cta-primary,
      .cta-secondary {
        width: auto !important;
        min-width: 240px;
      }
    }

    .cta-primary:hover {
      background-color: #e8c89e !important;
      transform: translateY(-4px);
      box-shadow: 0 15px 30px rgba(212,165,116,0.25);
    }

    .cta-secondary:hover {
      background-color: rgba(255, 255, 255, 0.2) !important;
      transform: translateY(-4px);
    }
      `}</style>
    </section>
  );
}

