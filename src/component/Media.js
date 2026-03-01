
import { X, Youtube, Instagram, 
  Facebook} from "lucide-react";
import { motion } from "framer-motion";
import { personal_info } from "../common/Info";
export default function Media() {
  const socialLinks = [
    { name: "YouTube", href: personal_info.youtubeChannel, icon: Youtube },
    { name: "Instagram", href: personal_info.instagramLink, icon: Instagram },
    { name: "Facebook", href: personal_info.facebookLink, icon: Facebook },
    { name: "X", href: personal_info.twitterLink, icon: X },
  ];

  return (
    <section id="media" style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #0a1628 0%, #152238 100%)',
      padding: '4rem 0'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
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
          }}>Media & Social</span>
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginTop: '1rem' }}>
            Connect & <span style={{ color: '#d4a574' }}>Engage</span>
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.125rem', marginTop: '1rem' }}>
            Stay inspired with motivational content and real estate insights
          </p>
        </motion.div>

       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  style={{
    background:
      "linear-gradient(135deg, rgba(212, 165, 116, 0.2) 0%, rgba(212, 165, 116, 0.05) 100%)",
    backdropFilter: "blur(20px)",
    borderRadius: "1rem",
    padding: "2rem",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    marginBottom: "3rem",
  }}
>
  <div
    style={{
      position: "relative",
      aspectRatio: "16 / 9",
      borderRadius: "0.75rem",
      overflow: "hidden",
    }}
  >
<iframe width="100%"height="100%" src={personal_info.embedVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem'
        }} className="social-grid">
          {socialLinks.map((social) => (
            <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.2) 0%, rgba(212, 165, 116, 0.05) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}>
              <div style={{
                width: '3.5rem',
                height: '3.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <social.icon style={{ color: 'white' }} size={28} />
              </div>
              <span style={{ color: 'white' }}>{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .social-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}