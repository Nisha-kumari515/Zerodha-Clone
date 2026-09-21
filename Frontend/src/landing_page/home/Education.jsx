
function Education() {
    return ( 
        <>
           <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src="media/images/education.svg" style={{width: "80%"}}/>
                    </div>
                    <div className="col-6 mt-5">
                          <h1 className="fs-2 mb-3">Free and open market education</h1>
                          <p className="mt-3 text-muted">Varsity, the largest online stock market education book in the world <br/> covering everything from the basics to advanced trading.</p>
                          <a href="" style={{textDecoration: "none"}} className="mr-5">Varsity<i class="fa-solid fa-arrow-right-long"></i></a>

                          <p className="mt-3 text-muted">TradingQ&A, the most active trading and investment community in <br/> India for all your market related queries.</p>
                           <a href="" style={{textDecoration: "none"}} className="mr-5">TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
           </div>
        </>
     );
}

export default Education;