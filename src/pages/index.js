import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      
      <h1>Greetings.</h1>
      <h2>I'm Stanley, a full-stack developer living in the DMV</h2>
      <p>Need a developer?</p>
      <Link to="/contact">Contact me.</Link>
      
    </Layout>
  )
}

export default IndexPage
