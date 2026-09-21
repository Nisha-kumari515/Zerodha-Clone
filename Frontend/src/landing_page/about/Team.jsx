function Team() {
    return ( 
        <div className="container">
            <div className="row p-3 ">
                <h1 className="text-center" >People</h1>
            </div>

            <div className="row p-3  text-muted "
                 style={{fontSize: "1em", lineHeight: "1.8"}}  >
                <div className="col-6 p-5 text-center">
                    <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%" , width: "50%"}} />
                    <h4 className="mt-5">Nithin Kamath</h4>   
                    <h6>Founder, CEO</h6>
                    
                </div>

                <div className="col-6 p-5">
                   <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                   <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                   <p>Playing basketball is his zen.</p>
                   <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
            
            <div className="row text-center mt-5" >
                <div className="col-4 ">
                     <img src="https://zerodha.com/static/images/Nikhil.jpg" style={{borderRadius:"100%" , width: "50%"}}/>
                     <h4 className="mt-5 fs-5 ">Nikhil Kamath</h4>   
                    <h6 className="text-muted">Co-founder & CFO</h6>
                </div>
                <div className="col-4">
                    <img src="https://zerodha.com/static/images/Kailash.jpg" style={{borderRadius:"100%" , width: "50%"}}/>
                    <h4 className="mt-5 fs-5">Dr. Kailash Nadh</h4>   
                    <h6 className="text-muted">CTO</h6>
                </div>
                <div className="col-4">
                    <img src="https://zerodha.com/static/images/Venu.jpg" style={{borderRadius:"100%" , width: "50%"}}/>
                    <h4 className="mt-5 fs-5">Venu Madhav</h4>   
                    <h6 className="text-muted">COO</h6>
                </div> 
            </div>

            <div className="row text-center mt-5" >
                <div className="col-4 ">
                     <img src="https://zerodha.com/static/images/Seema.jpg" style={{borderRadius:"100%" , width: "50%"}}/>
                     <h4 className="mt-5 fs-5 ">Nikhil Kamath</h4>   
                    <h6 className="text-muted">Co-founder & CFO</h6>
                </div>
                <div className="col-4">
                    <img src="https://zerodha.com/static/images/karthik.jpg" style={{borderRadius:"100%" , width: "50%"}}/>
                    <h4 className="mt-5 fs-5">Dr. Kailash Nadh</h4>   
                    <h6 className="text-muted">CTO</h6>
                </div>
                <div className="col-4">
                    <img src="https://zerodha.com/static/images/Austin.jpg" style={{borderRadius:"100%" , width: "50%"}}/>
                    <h4 className="mt-5 fs-5">Venu Madhav</h4>   
                    <h6 className="text-muted">COO</h6>
                </div> 
            </div>
        </div>
     );
}

export default Team;