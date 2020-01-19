import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'
export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
             <Heading title={heading}/>
             <div className="row">
              <div className="col-8 mx-auto">
              <p className="lead text-white mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              </div>
              <div className="col-4 ">
              <div class="card bg-dark text-white">
                 <img src="https://images.pexels.com/photos/859265/pexels-photo-859265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="goes here"/>
                 <div class="card-body">
                 <h5 class="card-title text-success">Just click photos</h5>
                <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <Link to="/services/">
                    <button className="btn btn-warning btn-block">
                        {heading}
                    </button>
                   </Link>
                </div>
               </div>
              </div>
             </div>
            </div>
        </section>
    )
}
