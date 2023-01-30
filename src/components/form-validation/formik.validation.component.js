import React from 'react'
 import { useFormik } from 'formik';

const FormikFromValidation = () => {
    const formik = useFormik({
        initialValues : {
            UserName: '',
            Age: 0,
            Mobile: '',
            City:''
        },
        onSubmit : (values) => {
            alert(JSON.stringify(values));
        }
    })

    return(
        <div className="container-fluid mt-3">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>Name</dt>
                    <dd><input name="UserName" onChange={formik.handleChange} type="text"/></dd>
                    <dt>Age</dt>
                    <dd><input name="Age" onChange={formik.handleChange}  type="text"/></dd>
                    <dt>Mobile</dt>
                    <dd><input name="Mobile" onChange={formik.handleChange} type="text"/></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} >
                            <option value="-1">Select Your City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                </dl>
                <button className="btn btn-primary">Submit</button>
            </form>
         </div>
    )
}

export default FormikFromValidation