import React from "react"
import styled from "@emotion/styled"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Menu from "../../components/Menu"
import { Link } from "gatsby"

const MenuWrapper = styled.div`
  text-align: center;
`

const DonutsPage = () => (
  <Layout>
    <SEO title="Orders" />
    <MenuWrapper>
      <Menu />
    </MenuWrapper>
    <h1>About Us</h1>
    <p>
      Our donuts aren't fresh-to-death for no reason. We make our donuts fresh
      <em>daily</em> and in limited quantities. Our donuts are made with
      yeast-raised dough that is hand-rolled, cut, and proofed for a total of 3
      hours. Our donuts are then topped with a variety of icings, glazes, and
      wicked fun toppings that are constantly changing. We take pride in our
      donuts, and hold them to a very high standard, so if you want 'em, you
      better get here early! Cause once they're gone, they're gone!
    </p>
    <p>
      "And if ya don't knoww, now ya knowwww" - his highness Notorious B.I.G
    </p>
    <Link to="/orders">Order Now</Link>
  </Layout>
)

export default DonutsPage
