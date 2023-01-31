import React from 'react'
import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik'
import * as yup from "yup"

const FormikComponet = () => {
  return (
    <div>
        <h2>Register</h2>
        <Formik
        initialValues={
            {
                Username:"",
                Email:""
            }
            
        }
        validationSchema={
            yup.object({
                Username : yup.string().required(),
                Email :yup.string().required().email()
            })

        }
        onSubmit = {
            values =>{
                alert(JSON.stringify(values))
            }
        }
        >
            <Form>
                <dl>
                    <dt>Username</dt>
                    <dd>
                        <Field name="Username" type="text" />
                    </dd>
                    <dd>
                        <ErrorMessage name='Username' />
                    </dd>
                    <dt>Email</dt>
                    <dd>
                        <Field name="Email" type="email" />
                    </dd>
                    <dd>
                        <ErrorMessage name='Email' />
                    </dd>
                </dl>
                <button>Register</button>

            </Form>

        </Formik>
    </div>
  )
}

export default FormikComponet