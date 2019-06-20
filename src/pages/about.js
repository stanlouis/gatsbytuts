import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";

const About = () => (
  <Layout>
    <h1>About Me</h1>
    <p>I am a full-stack developers specializing in NodeJS</p>
    <Link to="/Contact">Contact Me</Link>
  </Layout>
)

export default About
