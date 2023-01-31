import { useFormik } from "formik";
// import * as yup from "yup";
import * as yup from "yup";

export function ValidationSchemaExample(){
    const formik = useFormik({
        initialValues:{
            UserName:"",
            Password:"",
            Email:""
        },
        validationSchema:yup.object({
            UserName: yup.string().required().min(4).max(10),
            Password: yup.string().required().min(4),
            Email: yup.string().required().email()

        }),
        onSubmit : values => {
            alert(JSON.stringify(values))
        }
    })
    return(
        <div className="container-fluid">
            <form action="" onSubmit={formik.handleSubmit}>
                <dl className="center">
                    <dt>UserName</dt>
                    <dd><input type="text" {...formik.getFieldProps("UserName")} /></dd>
                    <p>{formik.errors.UserName}</p>
                    <dt>Password</dt>
                    <dd><input type="text" {...formik.getFieldProps("Password")} /></dd>
                    <p>{formik.errors.Password}</p>

                    <dt>Email</dt>
                    <dd><input type="email" {...formik.getFieldProps("Email")} /></dd>
                    <p>{formik.errors.Email}</p>

                    <button className="btn btn-success">Submit</button>
                </dl>
            </form>

        </div>
    )
}