import { useState } from "react";
export function EventComponent () {
    const[products] = useState([{id:1,name:"sourav"},{id:2,name:"sambit"}]);

    function onClickButton (event) {

         let result = products.find(product =>
            product.id==event.target.id);
            
    }


    return (
        <div className="container-fluid">

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>
                                    <button  className="btn btn-danger"><span id={product.id} className="bi bi-trash" onClick={onClickButton}></span>
                                
                                    </button>
                                    <button className="btn btn-warning ms-2"><span className="bi bi-pen "></span></button>

                                </td>
                            </tr> )
                    }
                </tbody>

            </table>

        </div>
    )

    }



//     return (
//         <div className="container-fluid">
//             <h2>products</h2>
//             <div>{
//                 products.map(product =>
//                     <div>
//                         <p>{product.name}</p>
//                         <button id={product.id} onClick={onClickButton}  ><span className="bi bi-cart4"></span>Add to cart</button>
//                     </div> )
//             }
//             </div>
//         </div>
//     )
// }





// {

//         function OnButtonClick (event) {
//             document.write(`Button id: ${event.target.id} <br>
//             Button Class: ${event.target.className} <br>
//             X position: ${event.clientX} <br>
//             Ctrl Key: ${event.ctrlKey}` )

//         }


//     return(
//     <div>
//         <button id="btnid" className="btn btn-danger" onClick={OnButtonClick}>
//         sourav
//         </button>
//     </div>

// )}