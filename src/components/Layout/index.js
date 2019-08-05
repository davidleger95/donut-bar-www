/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import DonutsBackground from "../DonutsBackground"
import Footer from "../Footer"

import "../../globalStyle.css"

const Container = styled.main`
  margin: auto;
  max-width: 600px;
`

const Layout = ({ children }) => {
  return (
    <>
      <DonutsBackground />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
