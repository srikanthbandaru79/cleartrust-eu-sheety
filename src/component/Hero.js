
import { Calendar, MessageCircle} from "lucide-react";
import { motion } from "framer-motion";
import eu_sheety_hero from '../assets/eu_sheety_hero.jpg'

import { personal_info } from "../common/Info";
export default function Hero() {
  const styles = {
    section: {
      position: 'relative',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a1628 0%, #152238 50%, #0a1628 100%)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    },
    container: {
      position: 'relative',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '5rem 1rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem',
      alignItems: 'center'
    },
    badge: {
      display: 'inline-block',
      backgroundColor: 'rgba(212, 165, 116, 0.2)',
      color: '#d4a574',
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(212, 165, 116, 0.3)',
      width:'fit-content'
    },
    heading: {
      fontSize: '3rem',
      lineHeight: '1.2',
      color: 'white'
    },
    goldText: { color: '#d4a574' },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    primaryBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      backgroundColor: '#d4a574',
      color: '#0a1628',
      padding: '1rem 2rem',
      borderRadius: '0.75rem',
      textDecoration: 'none',
      transition: 'all 0.3s',
      border: 'none',
      cursor: 'pointer'
    },
    secondaryBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '0.75rem',
      textDecoration: 'none',
      transition: 'all 0.3s',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }
  };

  return (
    <section id="home" style={styles.section}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '5rem',
          right: '5rem',
          width: '24rem',
          height: '24rem',
          background: 'rgba(212, 165, 116, 0.1)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }} />
      </div>

      <div style={styles.container}>
        <div style={styles.grid} className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ color: 'white', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={styles.badge}>Motivational Speaker & Real Estate Mentor</span>
              
              <h1 style={styles.heading}>
                Inspiring <span style={styles.goldText}>Clarity</span>,<br />
                <span style={styles.goldText}>Confidence</span> & <span style={styles.goldText}>Growth</span>
              </h1>
              
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '40rem'
              }}>
                Helping individuals and professionals unlock their potential and achieve excellence in life and real estate through personalized mentorship and powerful guidance.
              </p>
            </div>

            <div style={styles.buttonContainer} className="hero-buttons">
              <a href="#contact" style={styles.primaryBtn}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e8c89e';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4a574';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                <Calendar size={20} />
                <span>Book a Speaking Session</span>
              </a>
              <a href={personal_info.whatsappLink} target="_blank" rel="noopener noreferrer" style={styles.secondaryBtn}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                <MessageCircle size={20} />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <div
    style={{
      position: "relative",
      borderRadius: "1.5rem",
      overflow: "hidden",
      boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
      width: "100%",
      maxWidth: "450px",
    }}
  >
    {/* Golden gradient overlay */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(135deg, rgba(212,165,116,0.25) 0%, transparent 100%)",
        zIndex: 2,
      }}
    />

    <img
      src={eu_sheety_hero}
      alt="E. Urukundu Shetty"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  </div>
</motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; gap: 4rem !important; }
          .hero-buttons { flex-direction: row !important; }
        }
        @media (min-width: 640px) {
          .hero-buttons { flex-direction: row !important; }
        }
      `}</style>
    </section>
  );
}