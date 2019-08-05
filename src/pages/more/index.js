import React from "react"
import styled from "@emotion/styled"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Menu from "../../components/Menu"

const MenuWrapper = styled.div`
  text-align: center;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <MenuWrapper>
      <Menu />
    </MenuWrapper>
    <h1>A note from the builder</h1>
    <p>
      If you're wondering why this website exists despite it not being the
      official website for The Donut Bar, it's because I just wanted to create
      something awesome! If you think it should be the official website,
      however, I wouldn't mind if you put in a good word for me next time you're
      picking up a donut! ;) <br />
      <br />
      Sincerely,
      <br />
      <br />
      David Leger
      <br />
      <a href="https://davidleger.me" target="_blank" rel="noopener noreferrer">
        www.davidleger.me
      </a>
    </p>
  </Layout>
)

export default AboutPage
