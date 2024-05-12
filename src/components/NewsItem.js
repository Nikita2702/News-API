// import React, { Component } from 'react';
// export class NewsItem extends Component {

//   render() {
//     let {title,description ,imageUrl,newsUrl,author,source , date}=this.props;
//     return (
//       <div className='my-3'>
//          <div className="card">
//           <div>
//           <span className="badge rounded-pill bg-danger" style={{display:"flex" , justifyContent:'flex-end' ,position:'absolute' ,right:0}}>{source}</span>
//           </div>
            
//             <img src={!imageUrl?"https://ambcrypto.com/wp-content/uploads/2024/04/Cardano-Featured-Image-1000x600.webp":imageUrl}className="card-img-top" alt="..."/>
//             <div className="card-body">
//               <h5 className="card-title">{title}</h5>
//               <p className="card-text">{description}</p>
//               <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
//               <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
//             </div>
//         </div>
        
//       </div>
//     )
//   }
// }

import React from 'react';
const NewsItem =(props)=> {
    let {title,description ,imageUrl,newsUrl,author,source , date}=props;
    return (
      <div className='my-3'>
         <div className="card">
          <div>
          <span className="badge rounded-pill bg-danger" style={{display:"flex" , justifyContent:'flex-end' ,position:'absolute' ,right:0}}>{source}</span>
          </div>
            
            <img src={!imageUrl?"https://ambcrypto.com/wp-content/uploads/2024/04/Cardano-Featured-Image-1000x600.webp":imageUrl}className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
        
      </div>
    )
}

export default NewsItem;