import {  Quote
} from "lucide-react";
import { motion } from "framer-motion";
import eu_sheety_about from '../assets/eu_sheety_about.jpg'

export default function About() {
  const styles = {
    section: {
      position: 'relative',
      background: 'linear-gradient(180deg, #152238 0%, #0a1628 100%)',
      padding: '4rem 0'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem',
      alignItems: 'center'
    }
  };

  return (
    <section id="about" style={styles.section}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={styles.grid} className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px rgba(212, 165, 116, 0.2)' }}>
              <img
                src={eu_sheety_about}
                alt="About E. Urukundu Shetty"
                style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <span style={{
                display: 'inline-block',
                backgroundColor: 'rgba(212, 165, 116, 0.2)',
                color: '#d4a574',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.875rem'
              }}>About Me</span>
              <h2 style={{ fontSize: '2.5rem', color: 'white', marginTop: '1rem' }}>
                Empowering Lives Through <span style={{ color: '#d4a574' }}>Inspiration</span>
              </h2>
            </div>

            <div>
              <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                With over 6 years of dedicated experience, I've had the privilege of inspiring and mentoring over 200,000 individuals across diverse backgrounds. My journey began with a simple belief: everyone has untapped potential waiting to be unleashed.
              </p>
              <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                As a motivational speaker and real estate mentor, I combine practical wisdom with transformative insights to help professionals and individuals navigate their personal and career journeys.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} style={{
              background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.2) 0%, rgba(212, 165, 116, 0.05) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(212, 165, 116, 0.3)'
            }}>
              <Quote style={{ color: '#d4a574' }} size={32} />
              <blockquote style={{ color: 'white', fontSize: '1.25rem', fontStyle: 'italic', marginTop: '1rem' }}>
                "True success is not just about what you achieve, but about who you inspire along the way."
              </blockquote>
              <div style={{ marginTop: '1rem', color: '#d4a574' }}>- E. Urukundu Shetty</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (min-width: 1024px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  );
}