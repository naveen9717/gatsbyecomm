import React from 'react'
import Heading from "./Heading";
import { Link } from 'gatsby'
export default function InfoBlock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                 <div className="row">
                  <div className="col-10 col-sm-8 mx-auto text-center">
                   <p className="lead text-white mb-4">
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   </p>
                   <Link to="/about/">
                    <button className="btn btn-warning btn-lg">
                        {heading}
                    </button>
                   </Link>
                  </div>
                 </div>
            </div>
        </section>
    )
}
