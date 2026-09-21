import PriceComponent from "./PriceComponent";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-5 mt-5">
        <h2>Charges</h2>
        <p className="text-muted fs-5 mt-3">List of all charges and taxes</p>
      </div>

      <div className="row p-5 text-center">
        <div className="col-4">
          <PriceComponent
            imageURL="media\images\pricingEquity.svg"
            title="Free equity delivery"
            paragraph="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
          />
        </div>
        <div className="col-4">
          <PriceComponent
            imageURL="media\images\intradayTrades.svg"
            title="Intraday and F&O trades"
            paragraph="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
          />
        </div>
        <div className="col-4">
          <PriceComponent
            imageURL="media\images\pricingEquity.svg"
            title="Free direct MF"
            paragraph="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
