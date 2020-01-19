import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from '../components/reuseable/HeroSection'
import InfoBlock from "../components/reuseable/InfoBlock"
import Dualinfoblock from "../components/reuseable/Dualinfoblock"
import Showtimes from '../components/Services/showtime'

const ServicePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="TV program"
    subtitle="show time"
    heroclass="service-background" />
    <Dualinfoblock heading="A message from CEO"/>
    <InfoBlock heading="About Vision" />
    <Showtimes />
    
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: { eq: "friends.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`

export default ServicePage
