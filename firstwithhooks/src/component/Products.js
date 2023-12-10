import React from 'react';
import './Products.css';

const Products = (props) => {
   
    const renderProducts = props.products.map((item,index) => {
        return(
           <div className="card" key={item.id}>
               <img src={item.image} alt={item.name}/>
               <div>
                   <h3>{item.name}</h3>
                   <p>{item.description}</p>
                   <p>Rs.{item.cost}</p>
                   <p>{item.uses}</p>
               </div>
            </div>
        )
    }) 

    return(
       <div className="main">
           {renderProducts}
       </div>
    )
}


export default Products;

// const renderProduct = []

// props.products.forEach((item) => {
//     renderProduct.push(
//         <div className="card">
//            <img src={item.image} alt={item.name}/>
//            <div>
//                <h3>{item.name}</h3>
//                <p>{item.description}</p>
//                <p>Rs.{item.cost}</p>
//                <p>{item.uses}</p>
//            </div>
//         </div>
//     )
// })

// return(
//    <div className="main">
//        {renderProducts}
//    </div>
// )