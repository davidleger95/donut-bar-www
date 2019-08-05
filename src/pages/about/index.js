import React from "react"
import styled from "@emotion/styled"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Menu from "../../components/Menu"
import { Link } from "gatsby"

const MenuWrapper = styled.div`
  text-align: center;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <MenuWrapper>
      <Menu />
    </MenuWrapper>
    <h1>About Us</h1>
    <p>
      Our owner, and HDS (head donut slinger), is beyond excited to make this
      dream a reality! The Donut Bar is located in the heart of downtown
      Fredericton (A.K.A Freddy Beach). We are dedicated to delivering
      <em>fresh-to-death</em> gourmet donuts, and take pride in being the very
      first donut bar in the area. We aim to push the boundaries on the
      traditional donut by combining interesting flavors with ALL of your
      childhood favorites!!
    </p>
    <Link to="/orders">Order Now</Link>
  </Layout>
)

export default AboutPage
