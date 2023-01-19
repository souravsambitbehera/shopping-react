import { useState } from "react";
import './event.component.css'
export function EventComponent () {
    const[phone,setPhone] = useState('phone_img1.jpg')
    function openImage (e) {
        switch(e.target.id) {
            case "id1":
            setPhone('phone_img1.jpg');
            break;
            case "id2":
            setPhone('phone_img2.jpg');
            break;
            case "id3":
            setPhone('phone_img3.jpg');
            break;
            case "id4":
            setPhone('phone_img4.jpg');
            break;
            case "id5":
            setPhone('phone_img5.jpg');
            break;
            case "id6":
            setPhone('phone_img6.jpg');
            break;
         
        }
    }
    return (
        <div className="container-fluid">
            
           <div className="row mt-4 ms-4">

               <div className="col-2">
                                <img src="phone_img1.jpg"  id="id1" className="phone_img_hover" onMouseOver={openImage} /><br/>

                                <img src="phone_img2.jpg"  id="id2" className="phone_img_hover" onMouseOver={openImage} /><br/>

                                <img src="phone_img3.jpg"  id="id3" className="phone_img_hover" onMouseOver={openImage} /><br/>

                                <img src="phone_img4.jpg"  id="id4" className="phone_img_hover" onMouseOver={openImage} /><br/> 

                                <img src="phone_img5.jpg"  id="id5" className="phone_img_hover" onMouseOver={openImage} /><br/> 

                                <img src="phone_img6.jpg"  id="id6" className="phone_img_hover" onMouseOver={openImage} /><br/> 

               </div>
                <div className="col-6">
                    {/* <h2>Mouse over to phone</h2> */}
                    <img src={phone}  width="500" height="500"/> 
                </div>

                <div className="col-3 mt-10">
                    <h2 className="mb-1">Apple iPhone 14 Pro Max 128GB Deep Purple</h2>
                    <a href="https://www.apple.com/" className="link-primary text-decoration-none mb-5 ">Visit Apple Store</a>
                    <h3 className="mb-3">Phone Details</h3>
                    <table className="">

                        <tr>
                            <th>Brand</th>
                            <td>Apple</td>
                        </tr>
                        <tr>
                            <th>Model <br/> Name</th>
                            <td>Iphone</td>
                        </tr>
                        <tr>
                            <th>Operating <br/> System</th>
                            <td>IOS</td>
                        </tr> 
                        <tr>
                            <th>Cellular <br/> Technology</th>
                            <td>5G</td>
                        </tr>
                    </table>

                    <dl className="mt-4">
                        <dt>About this item</dt>
                        <dd className="ms-3">17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion <br/>
Dynamic Island, a magical new way to interact with iPhone
48MP Main camera for up to 4x greater resolution
Cinematic mode now in 4K Dolby Vision up to 30 fps
Action mode for smooth, steady, handheld videos</dd>
                    </dl>

                </div>
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