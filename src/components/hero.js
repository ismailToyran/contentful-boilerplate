import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

export default ({ data }) => (
  <Hero>
    <HeroImage
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <HeroDetails>
      <h3>{data.name}</h3>
      <HeroTitle>{data.title}</HeroTitle>
      <p>{data.shortBio.shortBio}</p>
    </HeroDetails>
  </Hero>
)

const Hero = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
`;

const HeroImage = styled(Img)`
  height: 61.8vh;
  max-height: 400px;
`

const HeroDetails = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  font-size: 14px;
  padding: 0 0.5em;
  @media(min-width: 1000px) {
    font-size: 20px;
  }
  @media(min-width: 600px) {
    font-size: 16px;
  }
  h3 {
    margin: 0;
  }
`;

const HeroTitle = styled.p`
  margin: 0;
  font-size: 1.125em;
  font-weight: bold;
`;