import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'
import Footer from '../components/footer'

const About = () => (
  <div>
    <Header />
    <h1>About Me</h1>
    <p>I am a full-stack developers specializing in NodeJS</p>
    <Link to="/Contact">Contact Me</Link>
    <Footer />
  </div>
)

export default About
