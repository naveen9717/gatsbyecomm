import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from '../components/reuseable/HeroSection'
import InfoBlock from '../components/reuseable/InfoBlock'
import Dualinfoblock from '../components/reuseable/Dualinfoblock'
import Coursecart from '../components/cart/coursecart'
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="I write Code"
    subtitle="LearnCodeOnline.in"
    heroclass="hero-background" />
    <InfoBlock heading="About us" />
    <Coursecart courses={data.courses} />
    <Dualinfoblock img={data.img.childImageSharp.fluid} heading="Our Teams"/>
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses:allContentfulCourses{
      edges{
        node{
          id
          title
          price
          category
          description {
            description
          }
          image{
            fixed(width:200, height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
}
`

export default IndexPage
