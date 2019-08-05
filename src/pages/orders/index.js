import React from "react"
import styled from "@emotion/styled"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Menu from "../../components/Menu"

const MenuWrapper = styled.div`
  text-align: center;
`

const OrdersPage = () => (
  <Layout>
    <SEO title="Orders" />
    <MenuWrapper>
      <Menu />
    </MenuWrapper>
    <h1>Orders</h1>
    <p>
      <strong>
        NOTE: This is not the official website for The Donut Bar. Although you
        can place orders through this website, information such as pricing,
        flavours, etc. could be our of date.
      </strong>
    </p>
    <h2>Pre-orders</h2>
    <p>
      Wanna beat the lines!?! <br />
      <a href="mailto:melissa@thedonutbarfreddy.com?subject=[PRE-ORDER]%20The%20Donut%20Bar&body=NAME: %0D%0APICK-UP DATE/TIME: %0D%0AQUANTITY (min 1/2 dozen): %0D%0ANOTES: %0D%0A%0D%0A---%0D%0A%0D%0AThis email was sent from https://donut-bar.netlify.com (created by davidleger95@me.com).">
        Pre-order now!
      </a>
      <br />
      <h3>Terms</h3>
      <ul>
        <li>
          All pre-orders come from this month's flavour list. Please see the
          list below.
        </li>
        <li>Minimum order quantity: 1/2 dozen (6)</li>
        <li>Minimum notice: 24 hours from shop opening</li>
        <li>
          Sorry, we <em>do not</em> deliver
        </li>
        <li>Pick-up: TUES+WED 9:30-5; THUR+FRI 7:30-3 ; SAT 10:30AM-3pm</li>
      </ul>
    </p>
  </Layout>
)

export default OrdersPage
