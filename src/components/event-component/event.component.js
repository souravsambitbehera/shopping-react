import { useState } from "react";
export function EventComponent () {
    const[phone,setPhone] = useState('phone_img1.jpg')
    function openImage (e) {
        switch(e.target.id) {
            case "1":
            setPhone('phone_img1.jpg');
            break;
            case "2":
            setPhone('phone_img2.jpg');
            break;
            case "3":
            setPhone('phone_img3.jpg');
            break;
        }
    }
    return (
        <div>
            <div className="container-fluid">
           <h2>Mouse over to phone</h2>
           <img src={phone}  width="900" height="900"/>
           <p className="mt-3">
             <div>
                <span id="1" onMouseOver={openImage} style={{backgroundColor:'red', color:'white', cursor: 'grab'}} className="me-2 p-2">
                    <img src="" alt="" srcset="" />
                </span>
                <span id="2" onMouseOver={openImage} style={{backgroundColor:'green', color:'white', cursor: 'grab'}} className="me-2 p-2">Green</span>
                <span id="3" onMouseOver={openImage} style={{backgroundColor:'blue', color:'white', cursor: 'grab'}} className="me-2 p-2">Blue</span>
             </div>
           </p>
        </div>
        </div>
    )
}











// {
//     const[products,setProducts] = useState([{id:1,name:"sourav"},{id:2,name:"sambit"}]);

//     function OnClickButton (event) {

//         setProducts(products.filter(product =>
//             product.id !=event.target.id));
//             // result.splice((result.id-1),result.id)
//             // let delete_item = result.splice(result.id);
//             // document.write(products.slice(result.id))
            
//     }


//     return (
//         <div className="container-fluid">

//             <table className="table table-hover">
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         products.map(product =>
//                             <tr key={product.id}>
//                                 <td>{product.id}</td>
//                                 <td>{product.name}</td>
//                                 <td>
//                                     <button id={product.id} onClick={OnClickButton}  className="btn btn-danger"><span className="bi bi-trash"></span>
//                                     delete
//                                     </button>
//                                     <button className="btn btn-warning ms-2"><span className="bi bi-pen "></span></button>

//                                 </td>
//                             </tr> )
//                     }
//                 </tbody>

//             </table>

//         </div>
//     )

//     }



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