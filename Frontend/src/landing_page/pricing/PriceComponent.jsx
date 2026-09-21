function PriceComponent({imageURL, title, paragraph}) {
    return ( 
        <div className="p-4">
              <img src={imageURL} style={{width:"230px", height:"auto"}} />
              <h3 className="mt-5 ">{title}</h3>
              <p className="mt-3 text-muted">{paragraph}</p>
        </div>
     );
}

export default PriceComponent;