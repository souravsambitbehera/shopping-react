import { useState } from "react"
import './styledemo.component.css'
export function StyleDemoComponent (){
    const[theme, setTheme] = useState('');

    function HandelThemeChange (e) {
        if (e.target.checked){
            setTheme('dark-theme');
        }else{
            setTheme('');
        }
    }



    return (
        <div className="container-fluid d-flex justify-content-center text-align-center">
 
            <form action="" className={theme} >
                <div className="form-switch">
                    <input type="checkbox" onChange={HandelThemeChange} className="form-check-input" name="" id="" />  Dark Mode
                </div>

                <h2 className="bi bi-person-fill">Login Form</h2>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" name="" id="" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="" id="" className="form-control" /></dd>
                </dl>
                <button className="btn btn-dark w-100">Login</button>
            </form>



        </div>
    )
}
















// {
//     const[styleObject, setStyleObject] = useState({backgroundColor:"",textAlign:""});



//     function OnBackgroundChange (e) {
//         setStyleObject({
//             backgroundColor:e.target.value,
//             textAlign:styleObject.textAlign
        
//         })

//     }
//     function OnTextAlignChange (e) {
//         setStyleObject({
//             backgroundColor:styleObject.backgroundColor,
//             textAlign:e.target.value
//         })

//     }


//     return (
//         <div className="container-fluid">
//             <h2>Choose styles</h2>
//             <dl>
//                 <dt>BackGround color</dt>
//                 <dd>
//                     <select onChange={OnBackgroundChange}>
//                         <option value="red">red</option>
//                         <option value="green">green</option>
//                         <option value="yellow">yellow</option>
//                     </select>
//                 </dd>

//                 <dt>Text align</dt>
//                 <dd>
//                     <select onChange={OnTextAlignChange}>
//                         <option value="center">center</option>
//                         <option value="left">left</option>
//                         <option value="right">right</option>
//                     </select>
//                 </dd>

//             </dl>
//                 <h2 style={styleObject}>sourav</h2>
//         </div>
//     )
// }















  


// {

//     const[styleObject, setStyleObject] =useState({border:"",boxShadow:""});
//     const[userError, setUserError] = useState("")

//     function OnBlurChange (e){
//         if (e.target.value.charCodeAt(0)>=65 && e.target.value.charCodeAt(0)<90){
//             setStyleObject({
//                 border:"3px solid green",
//                 boxShadow:"2px 2px 3px green"
//             })
//             setUserError('');

//         }else{
//             setStyleObject({
//                 border:"3px solid red",
//                 boxShadow:"2px 2px 3px red"
//             })
//             setUserError("You have to write first letter as capital")
//         }
//     }

//     return (
//         <div className="container-fluid">
//             <h2>Register User</h2>
//             <dl>
//                 <dt>User Name</dt>
//                 <dd><input type="text" style={styleObject} onBlur={OnBlurChange}/></dd>
//             </dl>
//             <dd style={{color:"red"}}>{userError}</dd>

//         </div>
//     )
// }