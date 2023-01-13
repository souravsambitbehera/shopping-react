import { useState } from "react";
export function EventComponent () {
    const[products] = useState([{id:1,name:"sourav"},{id:2,name:"sambit"}]);

    function onClickButton (event) {
         let result = products.find(product =>
            product.id==event.target.id);
            document.write(result.name + "<br>" + result.id)
    }

    return (
        <div className="container-fluid">
            <h2>products</h2>
            <div>{
                products.map(product =>
                    <div>
                        <p>{product.name}</p>
                        <button id={product.id} onClick={onClickButton}  ><span className="bi bi-cart4"></span>Add to cart</button>
                    </div> )
            }
            </div>
        </div>
    )
}





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