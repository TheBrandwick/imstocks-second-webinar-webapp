import React from 'react'

export default function MasterClass() {
  return (
    <div className="master-class-section">
      <div className="follow-up-heading">
Follow us on Instagram for Next Batch Updates
      </div>
      <div className="master-class-inner-wrapper">
        <div className="master-class-video-section">
            <div className="heading">
                <div className='heading-item-1'>
                    <span>Your One Stop Solution to Stock Market Trading.</span>
                    <span>MASTERCLASS</span>
                </div>
<img src="https://uploads-ssl.webflow.com/5f4187883301b768b8a33763/60f10fbd3965cf76c61ebc97_Asset%2025.png" alt="" />
            </div>
            <div className="yt-video">

            <iframe src="https://www.youtube.com/embed/tbZEmVTFsZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="sign-up">
                <div className="sign-up-btn">SIGN UP NOW</div>
            </div>
        </div>
        <div className="digital-learning-section">
            <div className="heading">
                <div className='heading-item-1'> 
                    <span>UNMATCHED <br/> DIGITAL</span>
                    <span> LEARNING <br/> EXPERIENCE</span>
                </div>
                <div className="heading-item-2">
                    <span>offering everthing <br/>you will ever need!</span>
                </div>
        
            </div>
            <div className="sub-heading">
            Offers developed by Seasoned Experts to support your Trading journey and enhance your Trading Skills.
            </div>
            <div className="digital-cards-container">
<DigitalCard/>
<DigitalCard/>
<DigitalCard/>
<DigitalCard/>
<DigitalCard/>
<DigitalCard/>
            </div>
        </div>
      </div>
    </div>
  )
}


function DigitalCard(){
    return(
        <div className="digital-card">
        <div className="digital-card-heading">
            <span>HAVENSPIRE</span>
            <span>DAILY</span>
        </div>
        <div className="para">
        Lifetime Access to News, Catalyst Alerts, Analyst Upgrades/Downgrades, Options data & much more!
        </div>
        <div className="footer">
        Explore
        </div>
        </div>
    )
}