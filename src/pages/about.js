import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/reuseable/HeroSection"
import InfoBlock from "../components/reuseable/InfoBlock"
import Dualinfoblock from "../components/reuseable/Dualinfoblock"
import Team from "../components/About/Team"
const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="About LCO"
    subtitle=""
    heroclass="about-background" />
    <Dualinfoblock heading="A message from CEO"/>
    <InfoBlock heading="About Vision" />
    <Team />
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`

export default AboutPage
