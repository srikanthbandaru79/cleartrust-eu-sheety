import { Youtube, Instagram, Facebook, Mail, Phone,X } from "lucide-react";
import { personal_info } from "../common/Info";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <div style={styles.grid}>

          {/* Brand */}
          <div style={styles.col}>
            <h3 style={styles.brand}>E. Urukundu Shetty</h3>
            <p style={styles.desc}>
              Inspiring clarity, confidence, and growth through transformative
              speaking and mentorship.
            </p>
        
    <div style={styles.socials}>
  {[
    { Icon: Youtube, href: personal_info.youtubeChannel },
    { Icon: Instagram, href: personal_info.instagramLink },
    { Icon: Facebook, href: personal_info.facebookLink },
    { Icon: X, href: personal_info.twitterLink },
  ].map(({ Icon, href }, i) => (
    <a
      key={i}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.icon}
    >
      <Icon size={18} />
    </a>
  ))}
</div>
          </div>
{/* Services */}
          <div style={styles.col}>
            <h4 style={styles.title}>Services</h4>
            <div style={styles.rowLinks}>
              {[
                "Motivational Speaking",
                "Personal Coaching",
                "Real Estate Mentorship",
                "Life & Career Clarity",
              ].map((x) => (
                <a key={x} href="#" style={styles.link}>{x}</a>
              ))}
            </div>
          </div>
    {/* Quick Links */}
<div style={styles.col}>
  <h4 style={styles.title}>Quick Links</h4>
  <div style={styles.rowLinks}>
    {[
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Media", href: "#media" },
      { name: "Contact", href: "#contact" },
    ].map((item) => (
      <a
        key={item.name}
        href={item.href}
        style={styles.link}
      >
        {item.name}
      </a>
    ))}
  </div>
</div>

          

          {/* Contact */}
          <div style={styles.col}>
            <h4 style={styles.title}>Get in Touch</h4>
            <p style={styles.contact}><Mail size={16} /> {personal_info.email}</p>
            <p style={styles.contact}><Phone size={16} />{personal_info.mobile}</p>
            <p style={styles.note}>Typically responds within 24 hours</p>
          </div>

        </div>

        <div style={styles.divider} />



        <div style={styles.bottom}>
          <span>© 2026 E. Urukundu Shetty. All rights reserved.</span>
          <span>
            Designed & Developed by{" "}
  <a 
    href="https://cleartrustdigital.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: '#d4a574',
      fontWeight: 600,
      letterSpacing: '0.5px'
    }}
  >
    ClearTrust Digital
  </a></span>
          <span>Made with 💛 for inspiring change</span>
        </div>

      
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "linear-gradient(180deg, #0a1628 0%, #0f1e33 100%)",
    padding: "4rem 1.5rem 2rem",
    borderTop: "1px solid rgba(255,255,255,.08)",
  },
  container: { maxWidth: 1200, margin: "0 auto", color: "white" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "2.5rem",
  },

  col: { display: "flex", flexDirection: "column", gap: 10 },

  brand: { fontSize: 20, marginBottom: 6 },
  desc: { opacity: 0.7, lineHeight: 1.6 },

  socials: { display: "flex", gap: 12, marginTop: 12 },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    background: "rgba(255,255,255,.1)",
    display: "grid",
    placeItems: "center",
    color: "white",
  },

  title: { fontSize: 15, marginBottom: 6, color: "white" },

  rowLinks: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
  },

  link: {
    fontSize: 14,
    textDecoration: "none",
    color: "rgba(255,255,255,.7)",
  },

  contact: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    opacity: 0.8,
    fontSize: 14,
  },

  note: { opacity: 0.6, fontSize: 13 },

  divider: {
    height: 1,
    background: "rgba(255,255,255,.08)",
    margin: "2.5rem 0 1.5rem",
  },

  bottom: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
    fontSize: 14,
    opacity: 0.7,
  },
};