import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Greetings.</h1>
      <h2>I'm Stanley, a full-stack developer living in the DMV</h2>
      <p>Need a developer?</p>
      <Link to="/contact">Contact me.</Link>
    </div>
  )
}

export default IndexPage
