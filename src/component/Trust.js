
import { Shield, Heart, Target, Zap, Star, 
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function Trust() {
  const trustPoints = [
    { icon: Shield, title: "Proven Track Record", description: "Over 6 years of consistent results and life-changing transformations" },
    { icon: Heart, title: "Authentic Approach", description: "Genuine care and personalized attention for every individual" },
    { icon: Target, title: "Results-Driven", description: "Focused strategies that deliver measurable outcomes and real growth" },
    { icon: Zap, title: "Transformative Impact", description: "Immediate actionable insights that create lasting positive change" },
    { icon: Star, title: "Industry Expertise", description: "Deep knowledge in both personal development and real estate" },
    { icon: CheckCircle, title: "Trusted by Thousands", description: "Endorsed by 200,000+ inspired individuals and mentored professionals" },
  ];

  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #152238 0%, #0a1628 100%)',
      padding: '4rem 0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto 4rem' }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: 'rgba(212, 165, 116, 0.2)',
            color: '#d4a574',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.875rem'
          }}>Why Choose Me</span>
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginTop: '1rem' }}>
            Built on <span style={{ color: '#d4a574' }}>Trust & Excellence</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem'
        }} className="trust-grid">
          {trustPoints.map((point, index) => (
            <motion.div key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, transparent 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}>
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  background: 'rgba(212, 165, 116, 0.2)',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <point.icon style={{ color: '#d4a574' }} size={28} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem' }}>
                  {point.title}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.2) 0%, rgba(212, 165, 116, 0.05) 100%)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1rem',
            padding: '3rem 2rem',
            border: '1px solid rgba(212, 165, 116, 0.3)',
            textAlign: 'center',
            marginTop: '4rem'
          }}>
          <h3 style={{ fontSize: '1.875rem', color: 'white', marginBottom: '1rem' }}>
            Ready to Begin Your Transformation?
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto 2rem' }}>
            Join thousands who have already taken the first step towards a more fulfilling and successful life
          </p>
          <a href="#contact" style={{
            display: 'inline-flex',
            backgroundColor: '#d4a574',
            color: '#0a1628',
            padding: '1rem 2rem',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e8c89e';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#d4a574';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 2rem !important; }
        }
        @media (min-width: 1024px) {
          .trust-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}