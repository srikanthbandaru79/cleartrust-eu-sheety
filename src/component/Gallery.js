import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image,
  Video,
  Newspaper,
  Trophy,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";

import medchal_1 from '../assets/medchal/image1.png'
import medchal_2 from '../assets/medchal/image2.png'
import medchal_3 from '../assets/medchal/image3.png'

import impact_1 from '../assets/impact/impact1.png'
import impact_2 from '../assets/impact/impact1.png'

import news_1 from '../assets/news/image1.png'
import news_2 from '../assets/news/image2.png'
import news_3 from '../assets/news/image3.png'

import award_1 from '../assets/awards/image1.png'

export default function Gallery() {

  const [filter, setFilter] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const filters = [
    { id: "all", label: "All", icon: Image },
    { id: "events", label: "Events", icon: Video },
    { id: "press", label: "Press & Media", icon: Newspaper },
    { id: "awards", label: "Awards", icon: Trophy }
  ];

  const events = [
    {
      id: 1,
      category: "events",
      title: "Medchal Police Leadership Training",
      description: "Leadership and mindset training session for police officers",
      images: [medchal_1, medchal_2, medchal_3]
    },
    {
      id: 2,
      category: "events",
      title: "Personal Development Program",
      description: "Empowering students with clarity, confidence, and life direction.",
      images: [impact_1, impact_2]
    },
    {
      id: 3,
      category: "press",
      title: "Featured in Media",
      description: "Media recognition for contributions to leadership and personal development.",
      images: [news_1, news_2, news_3]
    },
    {
      id: 4,
      category: "awards",
      title: "Leadership Excellence Award",
      description: "Honored for inspiring leadership and mentoring future leaders",
      images: [award_1]
    }
  ];

  const filtered =
    filter === "all"
      ? events
      : events.filter(e => e.category === filter);

  const styles = {

    section: {
      padding: "100px 20px",
      background: "linear-gradient(180deg,#152238,#0a1628)"
    },

    container: {
      maxWidth: "1200px",
      margin: "auto"
    },

    header: {
      textAlign: "center",
      marginBottom: "60px"
    },

    badge: {
      display: "inline-block",
      padding: "8px 20px",
      borderRadius: "30px",
      background: "rgba(212,165,116,0.2)",
      border: "1px solid rgba(212,165,116,0.4)",
      color: "#d4a574",
      marginBottom: "20px"
    },

    title: {
      fontSize: "clamp(36px,5vw,56px)",
      color: "white"
    },

    highlight: {
      background: "linear-gradient(90deg,#d4a574,#e8c89e)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    },

    subtitle: {
      color: "rgba(255,255,255,0.65)",
      marginTop: "10px"
    },

    divider: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      marginTop: "20px"
    },

    line: {
      width: "60px",
      height: "1px",
      background: "rgba(212,165,116,0.5)"
    },

    dot: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: "#d4a574"
    },

    filters: {
      display: "flex",
      justifyContent: "center",
      gap: "16px",
      margin: "60px 0",
      flexWrap: "wrap"
    },

    filterBtn: active => ({
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 24px",
      borderRadius: "30px",
      border: "1px solid rgba(255,255,255,0.15)",
      background: active ? "#d4a574" : "rgba(255,255,255,0.05)",
      color: active ? "#0a1628" : "white",
      cursor: "pointer"
    }),

grid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 380px))",
  justifyContent: "center",
  gap: "30px"
},

    card: {
      background: "rgba(255,255,255,0.05)",
      borderRadius: "16px",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.1)",
      maxWidth:"380px"
    },

    slider: { position: "relative" },

    img: {
      width: "100%",
      height: "260px",
      objectFit: "cover",
      cursor: "pointer"
    },

    navBtn: pos => ({
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      [pos]: "10px",
      background: "rgba(0,0,0,0.6)",
      border: "none",
      padding: "8px",
      borderRadius: "50%",
      color: "white",
      cursor: "pointer"
    }),

    cardBody: { padding: "20px" },

    cardTitle: {
      color: "white",
      fontSize: "18px",
      fontWeight: "600"
    },

    cardDesc: {
      color: "rgba(255,255,255,0.6)",
      marginTop: "6px"
    },

    lightbox: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.95)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999
    },

    lightImg: {
      maxWidth: "90%",
      maxHeight: "85vh"
    },

    closeBtn: {
      position: "absolute",
      top: 30,
      right: 30,
      background: "rgba(0,0,0,0.6)",
      border: "none",
      padding: "10px",
      borderRadius: "50%",
      cursor: "pointer"
    },

    arrowBtn: pos => ({
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      [pos]: 40,
      background: "rgba(0,0,0,0.6)",
      border: "none",
      padding: "12px",
      borderRadius: "50%",
      cursor: "pointer"
    })
  };

  function EventCard({ event }) {

    const [index, setIndex] = useState(0);

    const next = () =>
      setIndex(i => (i === event.images.length - 1 ? 0 : i + 1));

    const prev = () =>
      setIndex(i => (i === 0 ? event.images.length - 1 : i - 1));

    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        style={styles.card}
      >

        <div style={styles.slider}>

          <img
            src={event.images[index]}
            style={styles.img}
            alt=""
            onClick={() => {
              setSelectedEvent(event);
              setCurrentImage(index);
            }}
          />

          {event.images.length > 1 && (
            <>
              <button style={styles.navBtn("left")} onClick={prev}>
                <ChevronLeft size={18}/>
              </button>

              <button style={styles.navBtn("right")} onClick={next}>
                <ChevronRight size={18}/>
              </button>
            </>
          )}

        </div>

        <div style={styles.cardBody}>
          <div style={styles.cardTitle}>{event.title}</div>
          <div style={styles.cardDesc}>{event.description}</div>
        </div>

      </motion.div>
    );
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>

        <div style={styles.header}>
          <div style={styles.badge}>Gallery</div>

          <h2 style={styles.title}>
            Moments of <span style={styles.highlight}>Impact</span>
          </h2>

          <p style={styles.subtitle}>
            Events, press coverage, and milestones from our journey
          </p>

          <div style={styles.divider}>
            <div style={styles.line}></div>
            <div style={styles.dot}></div>
            <div style={styles.line}></div>
          </div>
        </div>

        <div style={styles.filters}>
          {filters.map(f => {
            const Icon = f.icon;

            return (
              <button
                key={f.id}
                style={styles.filterBtn(filter === f.id)}
                onClick={() => setFilter(f.id)}
              >
                <Icon size={18}/>
                {f.label}
              </button>
            );
          })}
        </div>

        <motion.div layout style={styles.grid}>
          <AnimatePresence>
            {filtered.map(e => (
              <EventCard key={e.id} event={e}/>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {selectedEvent && (
        <div
          style={styles.lightbox}
          onClick={() => setSelectedEvent(null)}
        >

          <button
            style={styles.closeBtn}
            onClick={() => setSelectedEvent(null)}
          >
            <X color="white"/>
          </button>

          <img
            src={selectedEvent.images[currentImage]}
            style={styles.lightImg}
            alt=""
          />

          {selectedEvent.images.length > 1 && (
            <>
              <button
                style={styles.arrowBtn("left")}
                onClick={e => {
                  e.stopPropagation();
                  setCurrentImage(i =>
                    i === 0
                      ? selectedEvent.images.length - 1
                      : i - 1
                  );
                }}
              >
                <ChevronLeft color="white"/>
              </button>

              <button
                style={styles.arrowBtn("right")}
                onClick={e => {
                  e.stopPropagation();
                  setCurrentImage(i =>
                    i === selectedEvent.images.length - 1
                      ? 0
                      : i + 1
                  );
                }}
              >
                <ChevronRight color="white"/>
              </button>
            </>
          )}

        </div>
      )}

    </section>
  );
}