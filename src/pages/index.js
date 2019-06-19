import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Greetings.</h1>
      <h2>I'm Stanley, a full-stack developer living in the DMV</h2>
      <p>Need a developer?</p>
      <Link to="/contact">Contact me.</Link>
      <Footer />
    </div>
  )
}

export default IndexPage
