import React from "react";

const StockProgress = () => {
  return (
    <div className="stock-progress-wrapper">
      <div className="stock-progress-header">
        <span>checkout</span> How Your
        <br />
        <span>Stocks </span>
        are doing.
      </div>

    <div className="stock-detail-card">
      <div className="stock-detail-header">
       <div className="stock-title-wrapper">
       <div className="stock-name">Tata Motors Ltd <span>LARGECAP</span></div>
        <div className="stock-info">Consumer Discretionary → Four Wheelers</div>
       </div>
        <div className="search-icon">
          <img src="/assets/svg/icons8-search-30.svg" alt="search" />
        </div>
      </div>

      <div className="stock-content-wrapper">
         <div className="stock-price-wrap">
          <p className="stock-desc">Tata Motors Limited is an automobile company engaged in manufacture of motor</p>  
          <div className="stock-current-price">
          ₹ 465.25
          <span>3.65 (-0.77)</span>
          </div>

          <div className="stock-update-on">
            <div className="label">Last updated at:</div>
            <div className="">3:58pm on 5 Aug</div>
          </div>
        </div>
        <div className="stock-price-ratio">
          <div className="stock-returns-wrap">
            <div className="items">
            <div className="label">1M Return</div>
            <div className="price-growth">
            12.92%
            </div>
            </div>
            <div className="items">
            <div className="label">1Y Return</div>
            <div className="price-growth">
            55.92%
            </div>
            </div>
            <div className="pe">
              <div className="label">PE</div>
              <div className="pricw-growth">
                -14.50
              </div>
            </div>
          </div>
          <div className="stock-returns-wrap">
            <div className="items">
            <div className="label">1M Return</div>
            <div className="price-growth">
            12.92%
            </div>
            </div>
            <div className="items">
            <div className="label">1Y Return</div>
            <div className="price-growth">
            55.92%
            </div>
            </div>
            <div className="pe">
              <div className="label">PE</div>
              <div className="pricw-growth">
                -14.50
              </div>
            </div>
          </div>
          <div className="stock-returns-wrap">
            <div className="items">
            <div className="label">1M Return</div>
            <div className="price-growth">
            12.92%
            </div>
            </div>
            <div className="items">
            <div className="label">1Y Return</div>
            <div className="price-growth">
            55.92%
            </div>
            </div>
            <div className="pe">
              <div className="label">PE</div>
              <div className="pricw-growth">
                -14.50
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="stock-card-footer"> 
      <div className="buy-btn">
        Buy
      </div>
      <div className="sell-btn">
        Sell
        </div>
      </div>
    </div>
    <div className="stock-progress-footer">
       <div className="title">
       <span>HAVE MORE</span>
        <br />
        QUESTIONS
        <br />
        <span>FOR US? </span>
       </div>

        <div className="contatct-cta">
        Contact an Academy Counselor
        </div>
    </div>
    </div>
  );
};

export default StockProgress;
