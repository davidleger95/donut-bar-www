import React from "react"
import styled from "@emotion/styled"
import electricMint from "../../images/electric-mint.png"
import homer from "../../images/homer.png"
import luckyCharms from "../../images/lucky-charms.png"
import mm from "../../images/mm.png"
import pbDream from "../../images/pb-dream.png"

const Background = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`

const Donut = styled.img`
  position: absolute;
  z-index: 0;
  mix-blend-mode: multiply;
  pointer-events: none;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  height: ${({ size }) => size};
  transform: rotateZ(${({ rotate }) => rotate || 0}deg);
`

export default function DonutsBackground() {
  return (
    <Background role="presentation">
      <Donut
        src={pbDream}
        size="calc(15vw + 550px)"
        top="-300px"
        left="calc(15vw - 500px)"
      />
      <Donut
        src={homer}
        size="calc(10vw + 400px)"
        right="calc(15vw - 200px)"
        top="-250px"
      />
      <Donut
        src={electricMint}
        right="calc(10vw - 350px)"
        top="10%"
        size="calc(15vw + 400px)"
        rotate="-80"
      />
      <Donut src={mm} right="calc(50vw - 700px)" bottom="-250px" size="700px" />
      <Donut
        src={luckyCharms}
        left="calc(25vw - 450px)"
        bottom="-250px"
        size="600px"
      />
    </Background>
  )
}
