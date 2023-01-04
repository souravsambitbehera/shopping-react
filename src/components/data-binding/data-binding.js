export function DataBinding () {
    let menu = [
        {Name:"sourav",Have:["Mobile","Laptop"]},
        {Name:"Sambit",Have:["Tv","Pen"]}
    ]
    return (
        <div>
            <ul>
            {

                menu.map(item => <li key={item}>{item.Name}

                <ol>
                    {
                        item.Have.map(device => <li>
                            {device}
                        </li> )
                    }
                </ol>
                
                </li> )
            }
            </ul>
        </div>
    )
}














// {
//     let products = [
//         {Name:"Mobile",Price:30000,Color:'Blue',Stuck:true},
//         {Name:"TV",Price:40000,Color:'Black',Stuck:true},
//         {Name:"Laptop",Price:50000,Color:'White',Stuck:false}

//     ]
//     return (
//         <div className="container fluid">
//             <h2>Product Table</h2>
//             <table className="table table-hover">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th>Color</th>
//                         <th>Stuck</th>
//                     </tr>
//                 </thead>
//                 <tbody>

//                     {
//                         products.map(product => 
//                            <tr key={product}>
//                             <td>{product.Name}</td>
//                             <td>{product.Price}</td>
//                             <td>{product.Color}</td>
//                             <td>{product.Stuck==true?"Available":"Not Available"}</td>



//                            </tr> )
//                     }
                  
//                 </tbody>
//             </table>
           
//         </div>
//     )


// }


// {
//     let products = ["sourav","sambit","behera"];
//     return (
//         <div>
//             <ul>
//                 {
//                     products.map(product=> <li key={product}>{product}</li>)
//                 }
//             </ul>
//             <select name="" id="">
//                 {
//                     products.map(product => 
//                         <option value="">{product}</option>
//                         )
//                 }
//             </select>

//             <ul>
//                 {
//                     products.map(product =>
//                         <li><input type="checkbox" name="" id="" /> {product}</li>
//                         )
//                 }
//             </ul>
//         </div>
//     )
// }

    // This is the basic example of data-binding in react 
    // let userName = "sourav"
    // let products = ["phone","tv","washing-machine"]
//     let products = {  
//         Name:"Oneplus Phone",
//         Price:30000,
//         Model:"Oneplus7",
//         Stock:true
//     }
//     return (  
//         <div className="container-fluid">
//             <h2>Product Details</h2>
//             <dl>
//                 <dt>Name</dt>
//                 <dd>{products.Name}</dd>
    
//                 <dt>Price</dt>
//                 <dd>{products.Price}</dd>

//                 <dt>Model</dt>
//                 <dd>{products.Model}</dd>

//                 <dt>Stock</dt>
//                 <dd>{products.Stock==true?"product is available":"product is not available"}</dd>
//             </dl>


//         </div>






//         <div>
//             <ul>{
//                 products.map(product=> <li key={product}>{product}</li>
//                 )
//             }
//             </ul>

//             {/* {userName} */}
//         </div>
  
//     )

// }