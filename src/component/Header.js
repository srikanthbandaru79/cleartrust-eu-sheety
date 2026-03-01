import { useState } from "react";
import {  Menu, X} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


export default  function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Media", href: "#media" },
    { name: "Contact", href: "#contact" },
  ];

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(10, 22, 40, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    nav: { maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' },
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '80px'
    },
    logo: {
      fontSize: '1.5rem',
      color: 'white',
      textDecoration: 'none',
      transition: 'color 0.3s'
    },
    desktopNav: {
      display: 'none',
      alignItems: 'center',
      gap: '2rem'
    },
navLink: {
  position: "relative",
  color: "rgba(255, 255, 255, 0.8)",
  textDecoration: "none",
  paddingBottom: "6px",
  transition: "color 0.3s ease",
},
    primaryBtn: {
      backgroundColor: '#d4a574',
      color: '#0a1628',
      padding: '0.625rem 1.5rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      transition: 'all 0.3s',
      border: 'none',
      cursor: 'pointer'
    },
    mobileMenuBtn: {
      display: 'block',
      color: 'white',
      padding: '0.5rem',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    },
    mobileNav: {
      padding: '1rem 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    },
    mobileNavLink: {
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      padding: '0.5rem 0',
      transition: 'color 0.3s'
    }
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.flexContainer}>
          <div style={{ flexShrink: 0 }}>
            <a href="#home" style={styles.logo}
              onMouseEnter={(e) => e.target.style.color = '#d4a574'}
              onMouseLeave={(e) => e.target.style.color = 'white'}>
              <span style={{ fontWeight: 'bold' }}>E. Urukundu Shetty</span>
            </a>
          </div>

          <div style={styles.desktopNav} className="desktop-nav">
     {navLinks.map((link) => (
  <a
    key={link.name}
    href={link.href}
    style={styles.navLink}
    className="nav-item"
  >
    {link.name}
    <span className="nav-underline"></span>
  </a>
))}
            <a href="#contact" style={styles.primaryBtn}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e8c89e';
                e.target.style.boxShadow = '0 10px 25px rgba(212, 165, 116, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#d4a574';
                e.target.style.boxShadow = 'none';
              }}>
              Get Started
            </a>
          </div>

          <button style={styles.mobileMenuBtn} className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: 'hidden' }} className="mobile-nav-menu">
              <div style={styles.mobileNav}>
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} style={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                    onMouseEnter={(e) => e.target.style.color = '#d4a574'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}>
                    {link.name}
                  </a>
                ))}
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}
                  style={{
                    backgroundColor: '#d4a574',
                    color: '#0a1628',
                    padding: '0.625rem 1.5rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                    marginTop: '1rem',
                    display: 'block',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#e8c89e'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#d4a574'}>
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

<style>{`
  @media (min-width: 768px) {
    .desktop-nav { display: flex !important; }
    .mobile-menu-btn { display: none !important; }
  }

  .nav-item {
    position: relative;
  }

  .nav-underline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 2px;
    background: #d4a574;
    transition: width 0.3s ease;
  }

  .nav-item:hover {
    color: #d4a574 !important;
  }

  .nav-item:hover .nav-underline {
    width: 100%;
  }
`}</style>
    </header>
  );
}