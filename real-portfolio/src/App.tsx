import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import Skills from './components/Skills'
import ProjectCard from './components/ProjectCard'
import PersonaCard from '/images/PersonaScreenshot.png'
import BulldogImage from '/images/BulldogExchange.png'
import ReelMovies from '/images/ReelMovies.png'
import GumballRoom from'/images/GumballRoom.png'
import MincedReality from '/images/MincedReality.png'
import { motion, MotionConfig } from 'framer-motion'
import Reveal from './components/utils/Reveal'

const projects = [
  { id: 1, title: 'ReelMovies', date:'Fall 2025',image: ReelMovies,description: 'A movie rating and review website developed for my Software Engineering class, using React, MongoDB, and OMDb API.', url: 'https://github.com/JoshuaPerras/rating-reviewBoard' },
  { id: 2, title: 'Bulldog Marketplace', date:'Spring 2025' ,image: BulldogImage,description: 'A marketplace platform for UGA students to buy and sell items. Sellers can handle price offers and set meeting locations using the Google Maps API.', url: 'https://github.com/tung555/Bulldog-Exchange' },
  { id: 5, title: 'Minced Reality - Mixed Reality Cooking Game', date:'Fall 2026' , image: MincedReality, description: 'A mixed reality cooking game that combines physical and digital kitchen elements to create an immersive chaotic experience.', url: 'https://medium.com/@kevin.huynh.4414/minced-reality-fusion-dish-of-overcooked-mixed-reality-fa28508060c9' },

]

export default function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#ACC4DC] text-gray-900">
       <NavBar />
      <header className="mx-auto p-6 flex items-center justify-between max-w-6xl">
        
      </header>

      <main className="mx-auto p-6 max-w-6xl">
        <div className="mt-8">
          <Routes>
            <Route path="/" element={<><Hero /><Skills />
             <Reveal>
             <section id="projects" className="mt-20">
                  <h3 className="text-center md:text-left text-5xl font-semibold mb-10 text-white font-josefin text-shadow-md text-shadow-[#759DC5]  pb-2 border-white">Latest projects</h3>
                  <div className="grid justify-center md:justify-start gap-6 md:grid-cols-3">
                    {[...projects].reverse().map((p) => (
                      <ProjectCard key={p.id} title={p.title} date={p.date} image={p.image} description={p.description} url={p.url} />
                    ))}
                  </div>
                </section>
                </Reveal>
            
            
            </>} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  )
}
