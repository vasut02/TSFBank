import React from 'react'
import home from './illustration/home.png'

const Welcome = () => {


    return (
        <div>
            {/* home section start */}
            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="home-left">
                            <div className="text-1">WELCOME TO</div>
                            <h2 className="text-10"> TSF BANKING SYSTEM</h2>
                            <div className="text-3"> <span className="typing" /></div>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <a href="#home" >Send</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Welcome
