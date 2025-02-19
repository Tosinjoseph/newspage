import './Hero.css'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="herocontainer">
            <div className="left container">
                <img src="./image-web-3-desktop.jpg" alt="" />
                <div className="lefttext">
                    <span>The Bright<br/> Future of<br/> Web 3.0 ?</span>
                    <div className="lefttext-right">
                        <p>I really dont want to delve much into this,<br/>
because this content is not whats important now.<br/>
I just feel like not using Lorem ipsum.</p>
                        <button type='submit'>READ MORE</button>
                    </div>

                </div>
            </div>
            <div className="right container">
                <h1>News</h1>
                <div className="first">
                <h2>Hydrogen VS Electric Cars</h2>
                <p>Ok i would like to say something about this but i have got a lot on my plate</p>
                </div>
                <div className="first">
                <h2>The Downsides of AI Artistry</h2>
                <p>Ok i would like to say something about this but i have got a lot on my plate</p>
                </div>
                <div className="first">
                <h2>Is VC Funding Drying Up?</h2>
                <p>Ok i would like to say something about this but i have got a lot on my plate</p>
                </div>
                
                
            </div>
        </div>
        <div className="herobottom container">
            <div className="bottomcontainer">
              <img src="./image-retro-pcs.jpg" alt="" />
              <div className="bcr">
                <h1>01</h1>
                <h2>Reviving Retro PCs</h2>
                <p>Ok i have gotta write something so lets get on with it on time.</p>
              </div>
            </div>
            <div className="bottomcontainer">
              <img src="./image-top-laptops.jpg" alt="" />
              <div className="bcr">
                <h1>02</h1>
                <h2>Top 10 Laptops of 2025</h2>
                <p>Ok i have gotta write something so lets get on with it on time.</p>
              </div>
            </div>
            <div className="bottomcontainer">
              <img src="./image-gaming-growth.jpg" alt="" />
              <div className="bcr">
                <h1>03</h1>
                <h2>The Growth of Gaming</h2>
                <p>Ok i have gotta write something so lets get on with it on time.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero