import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import logo from "../images/donut-bar-logo.png"
import "../globalStyle.css"
import Menu from "../components/Menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ textAlign: "center" }}>
      <header className="Header">
        <h1>
          <img
            src={logo}
            className="Header-logo"
            alt="Since 2017. The Donut Bar. Fresh to death donuts."
          />
        </h1>
        <Menu />
      </header>
      <div>
        <h2 className="heading-2">Location</h2>
        <address className="location">346 Queen Street, Fredericton</address>
      </div>
      <div>
        <h2 className="heading-2">Hours</h2>
        <ul className="hours-list">
          <li className="hours-item">
            <time>Tue-Wed: 9:30 AM-5:00 PM</time>
          </li>
          <li className="hours-item">
            <time>Thu-Fri: 8:00 AM-3:00 PM</time>
          </li>
          <li className="hours-item">
            <time>Sat: 10:00 AM-3:00 PM</time>
          </li>
          <li className="hours-item">
            <time>Sun-Mon: Closed</time>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
