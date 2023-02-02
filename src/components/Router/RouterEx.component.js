import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import { BmiCalculator } from "../bmi-calculator/bmi.calculator.component";
import { ValidationSchemaExample } from "../form-validation/formik.yup.component";

export function RouterExComponent(){


    return(
        <>
            <h2>This is home page</h2>
            

            <BrowserRouter>
            <Link to="form">form</Link>

            <Routes>
                <Route path="/" element={<BmiCalculator/>} ></Route>
                <Route path="form" element={<ValidationSchemaExample/>} />
                <Route path="*" element="Not Found" />
            </Routes>
            </BrowserRouter>
        </>

        
    )
}