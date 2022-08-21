
//api key
//98a7ae5e7fac41ad9bca57ca0111e4f2
import React from 'react'




const NewsItem = (props) => {


    let {title, description,imageUrl,url,author,publishedAt,source} = props;  
    return (
      <div className ="my-3 ">

        <div className="card" style = {{width:"18rem"}}>
        <img src={imageUrl} class="card-img-top "  
         alt="..." />
        <div className="card-body">
       
          <h5 className="card-title">{title}</h5>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>{source}</span>
          <p className="card-text">{description}</p>

      
          <a href={url} class="btn btn-dark">Read More</a>
          <p className="card-text">{author}</p>
          <p className="card-text">{new Date(publishedAt).toGMTString}</p>
        
                </div>
      </div>
      </div>

)
}

export default NewsItem;



