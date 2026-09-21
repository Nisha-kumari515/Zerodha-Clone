function RightImage({imageURL, productName, productDescription, link}) {
    return ( 
        <div className="container p-5 mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1 className="mt-5">{productName}</h1>
                    <p>{productDescription}</p>
                    <a href="" style={{textDecoration: "none"}}>{link}{<i className="fa-solid fa-arrow-right-long"></i>}</a>
                </div>
                <div className="col-6">
                    <img src={imageURL} />
                </div>
            </div>
        </div>
     );
}

export default RightImage;