import React, { useState } from "react"
import styled from "@emotion/styled"

const StyledFooter = styled.footer`
  z-index: 9999;
  position: fixed;
  display: grid;
  grid-template-columns: 1fr auto;
  bottom: 0;
  width: 100%;
  background: #18244c;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  text-transform: initial;
  font-style: italic;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);

  a {
    color: inherit;

    &:hover,
    &:focus {
      outline: none;
      color: #e00078;
    }
  }
`

const Content = styled.p`
  padding: 0.1em 0.75em;
`

const Button = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 1em 1.5em;
  color: inherit;
  text-transform: uppercase;
  &:hover,
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`

const Footer = () => {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <StyledFooter>
      <Content>
        This website is a prototype made by{" "}
        <a
          href="https://davidleger.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          David Leger
        </a>
        . The real website for The Donut Bar is{" "}
        <a
          href="https://www.thedonutbarfreddy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </Content>
      <Button onClick={() => setDismissed(true)}>&times; Dismiss</Button>
    </StyledFooter>
  )
}

export default Footer
