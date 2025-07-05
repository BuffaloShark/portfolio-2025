import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import work1 from "../../assets/Images/SkinstricScreenshot1.png"
import work2 from "../../assets/Images/UltraverseScreenshot.png"
import work3 from "../../assets/Images/CinemaScreenshot.png"
import work4 from "../../assets/Images/LibraryScreenshot.png"
import work5 from "../../assets/Images/TreactScreenshot.png"
import work6 from "../../assets/Images/PortfolioScreenshot.png"

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const works = [
    {
      client: "Skinstric AI",
      demoLink: "https://skinstric-ai-tau.vercel.app/",
      year: "2025",
      img: work1,
      title: "Revamping Global Beauty Brand with AI.",
      detail: "A responsive React-based web app that captures user's 'faces. Analyzes skin tone and texture with an AI API, generating personalized beauty product recommendations with real-time feedback. Leveraged JavaScript, HTML, and CSS for dynamic UI, and organized demographic insights.",
    },
    {
      client: "Ultraverse NFT World",
      demoLink: "https://mike-intership.vercel.app/",
      year: "2025",
      img: work2,
      title: "Next generation NFT Management System.",
      detail: "Built over 15 reusable React components, pulled in NFT data for 1,000+ assets using Axios and RESTful APIs, and set up secure login and database management with Firebase. Designed mobile-first layouts with CSS Grid and Flexbox, making sure everything looked great on 98% of devices.",
    },
    {
      client: "Cinema Entertainment Database",
      demoLink: "https://omdb-react-seven.vercel.app/",
      year: "2025",
      img: work3,
      title: "Comprehensive Movie database.",
      detail: "Fetched and handled API data using Axios to deliver real-time search results with dynamic routing. Added smooth loading states and UI polish using CSS animations and thoughtful component structure for a clean, user-friendly experience across all devices. And users can easily add and remove their favorites to a list!",
    },
    {
      client: "Library",
      demoLink: "https://library-react-gamma-ivory.vercel.app/",
      year: "2025",
      img: work4,
      title: "Where book buying meets innovation.",
      detail: "Built a fully functional online bookstore using React, HTML, CSS, and JavaScript—complete with a working shopping cart. Used hooks, event handlers, and dynamic routing to manage everything from browsing to checkout—and beautifully responsive for mobile devices doesn't hurt.",
    },
    {
      client: "Treact",
      demoLink: "https://treact-chi.vercel.app/",
      year: "2025",
      img: work5,
      title: "Design-driven business templates.",
      detail: "Designed and built a fully responsive business website using HTML and CSS. Styled with Flexbox and grounded in a custom brand concept, the site adapts cleanly across devices and showcases a polished, professional layout.",
    },
    {
      client: "Slick Portfolio Sites",
      demoLink: "https://my-portfolio-p9r3.vercel.app/",
      year: "2024",
      img: work6,
      title: "Portfolios with bells and whistles.",
      detail: "I build sleek, responsive portfolio sites in React. This one includes features like a smooth light/dark mode toggle, subtly animated backgrounds, toggled modals for detailed project views, and a fully functional contact form. If you need a site that’s both polished and engaging, I’ve got you covered.",
    },
  ]

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="projects--grid--title">
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              )
            })}
          </div>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1 }} onAnimationComplete={() => handleComplete()} className="projects--grid--detail">
          <p className="theme--detail">
            <ScrambleText delay={1}>Discover a curated portfolio of projects where each line of code tells a story of problem-solving, creativity, and technical finesse.</ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
