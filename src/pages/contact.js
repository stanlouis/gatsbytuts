import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'

const Contact = () => (
  <div>
    <Header />
    <h1>Contact Me</h1>
    <p>
      You can reach me at{" "}
      <a href="https://twitter.com/stanbytes" target="blank">
        @stanbytes
      </a>{" "}
      on Twitter!
    </p>
    <Footer />
  </div>
)

export default Contact
