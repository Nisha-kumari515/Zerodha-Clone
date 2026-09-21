function Universe() {
    return ( 
        <div className="container p-5">
            <div className="row text-center p-5 ">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>


                <div className="col-4 p-3 mt-5">
                    <img src="media\images\smallcaseLogo.png" style={{width:"140px", height:"auto"}} />
                    <p className="fs-10 text-muted"> Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\streakLogo.png" style={{width:"100px", height:"auto"}} />
                    <p className="fs-10 text-muted">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\sensibullLogo.svg" style={{width:"150px", height:"auto"}} />
                    <p className="fs-10 text-muted">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>

                 <div className="col-4 p-3 mt-5">
                    <img src="media\images\zerodhaFundhouse.png" style={{width:"160px", height:"auto"}} />
                    <p className="fs-10 text-muted"> Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\dittoLogo.png" style={{width:"100px", height:"auto"}} />
                    <p className="fs-10 text-muted">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\goldenpiLogo.png" />
                    <p className="fs-10 text-muted">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
                <button className=" btn btn-primary fs-5 mt-5" style={{width: "20%", margin: "0 auto"}}>Signup for free</button>
            </div>
        </div>
     );
}

export default Universe;