import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/reuseable/HeroSection"
import InfoBlock from "../components/reuseable/InfoBlock"
import Dualinfoblock from "../components/reuseable/Dualinfoblock"
import Team from "../components/About/Team"
import Contact from '../components/Contact/contact'
const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="Contact us"
    subtitle=""
    heroclass="about-background" />
    <Dualinfoblock heading="A message from CEO"/>
    <InfoBlock heading="How can we help you?" />
    <Contact />
    <Team />
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`

export default ContactPage
