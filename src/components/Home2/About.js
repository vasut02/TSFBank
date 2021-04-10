import React from 'react'
import about_us from './illustration/about_us.png'

const About = () => {
    return (
        <div>
            {/* about section start */}
            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">About Us</h2>
                    <div className="about-content">
                        <div className="column left ">
                            <img src= {about_us} alt='' />
                        </div>
                        <div className="column right">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque
                            autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus
                            accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus
                            veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis
                            beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                            <a href="#contact">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About
