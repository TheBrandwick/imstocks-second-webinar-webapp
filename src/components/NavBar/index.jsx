import React,{useState} from 'react'

export default function NavBar() {
  const [showClassSelector, setShowClassSelector] = useState(false);
  return (
    <div className="nav-bar">
        <div className="nav-bar-logo">
            <img src="https://uploads-ssl.webflow.com/5f4187883301b768b8a33763/60f1723e82aa341598e6bdde_Mask%20Group%20logo.png"  className="logo"alt="" />
            <div className="toggle-btn"><span></span></div>

            <div className="nav-bar-dropdown">
               <div className="product-section">
                   <div className='product-heading'>Our Products</div>
                   <div className="product-card-container">
                    <div className="dropdown-card product-card">
                    <img src="https://uploads-ssl.webflow.com/5f4187883301b768b8a33763/620a8edd1020ea82404a6a62_Premium%20Black.png" alt="" />
                    Masterclass Premium
                    </div>
                    <div className="dropdown-card product-card">
                    <img src="https://uploads-ssl.webflow.com/5f4187883301b768b8a33763/620d1f8686a9382857cc4456_Pro%20Black.png" alt="" />
                    Masterclass Pro
                    </div>
                    <div className="dropdown-card product-card">
                    <img src="https://uploads-ssl.webflow.com/5f4187883301b768b8a33763/61ebc9c6ec74fb93fe2c35f2_Community-p-500.png" alt="" />
                    Community
                    </div>
                   </div>

               </div>
               <div className="follow-up-btns">
                <span className='dropdown-card '>Havenspire Academy</span>
                <span className='dropdown-card ' >Student Scholarship</span>

               </div>
               <div className="app-section">
                  <div className="app-heading">Sign up on our app to access Free Content!</div>
                  <div className="app-card-container">
                    <div className="dropdown-card">
                      <img src="https://uploads-ssl.webflow.com/5f4187883301b768b8a33763/61015aa3b0b2383db5d73eeb_playstore.png" alt="" />
                      Android
                    </div>
                    <div className="dropdown-card">
                      <img src="https://uploads-ssl.webflow.com/5f4187883301b768b8a33763/61015aa3af84cfc512100a56_app-store%20(1).png" alt="" />
                      iOS
                    </div>
                  </div>
               </div>
            </div>
        </div>
        <div className="nav-bar-class-selector-desktop">
            <span>Masterclass Pro</span>
            <span>Masterclass Premium</span>

        </div>
        <div className="nav-bar-class-selector-mobile">

            <img src="https://uploads-ssl.webflow.com/5f4187883301b768b8a33763/60f10fbd3965cf76c61ebc97_Asset%2025.png" className='mobile-class-selector-img' onClick={()=>showClassSelector?setShowClassSelector(false):setShowClassSelector(true)} alt="" />

            <div className={showClassSelector?"class-selector-dropdown active":"class-selector-dropdown"}>
            <span>Masterclass Pro</span>
            <span>Masterclass Premium</span>

            </div>
        </div>
    </div>
  )
}

