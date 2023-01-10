import { useEffect, useState } from "react";
// import $ from "jquery"
import axios  from "axios";
import "./nasa.component.css"

export function NasaComponent () {
    const [mars, setMars] = useState([]);
    function LoadPhotos () {
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response =>{
            setMars(response.data.photos);
        })
        .catch(ex => {
            console.log(ex)
        })





        // get data by using ajax
        // $.ajax({
        //     method:"get",
        //     url:"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY",
        //     success:(response) => {
        //         setMars(response.photos);
        //     }

        // })
    }

    useEffect( ()=> {
        LoadPhotos();
    },[])

    return (
        <div className="container-fluid mt-3">
            <h2>Mars Rover Photos</h2>
            <div className="d-flex flex-wrap">
                {
                     mars.map(item => 
                        <div className="card m-2 p-2" id="card" key={item.id}>
                            <img src={item.img_src} alt="" width="100" height="100" className="card-img-top" />
                            <div className="card-body">
                                <dl key={item.rover}>
                                    <dt>Camera</dt>
                                    <dd>{item.camera.full_name}</dd>
                                    <dt>Rover</dt>
                                    <dl>{item.rover.name}</dl>
                                </dl>

                            </div>
                        </div> )
                    
                }
            </div>

        </div>
    )



}






// By using fetch 
// {
    
//     const [mars, setMars] = useState([]);

//     function LoadPhotos () {
//         fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY").then(function(response){
//             return response.json();
//         }).then(function (data) {
//             setMars(data.photos);
//         })
//     }

//     useEffect( () => {
//         LoadPhotos();
//     },[] );


//     return (
//         <div className="container-fluid mt-3">
//             <h2>Mars Rover photos </h2>
//             <div className="d-flex flex-wrap">
//                 {
//                     mars.map(item =>
//                         <div className="card m-2 p-2" id="card" key={item.img_src}>
//                             <img src={item.img_src} alt="" className="card-img-top" height="200" />
//                             <div className="card-body">
//                                 <dl key={item.camera.full_name}>
//                                     <dt>Camera</dt>
//                                     <dd>{item.camera.full_name}</dd>
//                                 </dl>
//                             </div>
//                         </div> )
//                 }

//             </div>
//         </div>
//     )
















    // return (
    //     <div className="container-fluid mt-3">
    //         <h2>Mars Photos</h2>
    //         <table className="table table-hover">
    //             <thead>
    //                 <tr>
    //                     <th>Photo id</th>
    //                     <th>Preview</th>
    //                     <th>Camera</th>
    //                     <th>Rover</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                     mars.map(item =>
    //                         <tr key={item.id}>
    //                             <td>{item.id}</td>
    //                             <td><img src={item.img_src} alt=""  width="100" height="100" /></td>
    //                             <td>{item.camera.full_name}</td>
    //                             <td>{item.rover.name}</td>
    //                         </tr> )
    //                 }
    //             </tbody>
    //         </table>
    //     </div>
    // )
// }