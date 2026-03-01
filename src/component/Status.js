
import { Users, TrendingUp, Award 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { icon: Users, number: "200,000+", label: "People Inspired" },
    { icon: TrendingUp, number: "300,000+", label: "Mentored" },
    { icon: Award, number: "6+", label: "Years of Experience" },
  ];

  const styles = {
    section: {
      position: 'relative',
      background: 'linear-gradient(180deg, #0a1628 0%, #152238 100%)',
      padding: '4rem 0'
    },
    container: { maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem'
    },
    card: {
      position: 'relative',
      background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.2) 0%, rgba(212, 165, 116, 0.05) 100%)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s'
    },
    iconBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '4rem',
      height: '4rem',
      background: 'rgba(212, 165, 116, 0.2)',
      borderRadius: '0.75rem',
      marginBottom: '1.5rem',
      transition: 'all 0.3s'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid} className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}>
                <div style={styles.iconBox}>
                  <stat.icon style={{ color: '#d4a574' }} size={32} />
                </div>
                <div style={{ fontSize: '3rem', color: 'white' }}>{stat.number}</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.125rem', marginTop: '0.5rem' }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}