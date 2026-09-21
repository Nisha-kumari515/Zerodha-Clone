
function Hero() {
  return (
    <div style={{backgroundColor: "rgb(240, 240, 240)"}}>
    <div className="container" >
      <div className="row p-4 " >
        <div className="col-6">
            <h1>Support Portal</h1>
        </div>
        
        <div className="col-6 text-end">
            <button className="p-2 btn btn-primary fs-5 mb-5" style={{width: "20%"}}>My tickets</button>
        </div>
        
        <div className="support-search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input    
            type="text"
            placeholder=" Eg: How do I open my account, How do I activate F&O..."
            style={{width:"100%", height:"50px"}}
          />
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default Hero;
