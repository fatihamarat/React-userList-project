import React from 'react';
//import { Formik, Field, Form } from 'formik';
import {useFormik} from "formik";
import validationSchema from './ContactValidation';

function Contact() {
  // return (
  //   <div>
  //       <h2>İletişim</h2>
  //       <Formik
  //       initialValues={{
  //       firstName: '',
  //       lastName: '',
  //       email: '',
  //       message: "",
  //     }}
  //     onSubmit={async (values) => {
  //       await new Promise((r) => setTimeout(r, 500));
  //       alert(JSON.stringify(values, null, 2));
  //     }}
  //   >
  //     <Form>
  //       <label htmlFor="firstName">First Name</label>
  //       <Field id="firstName" name="firstName" placeholder="isim" />

  //       <label htmlFor="lastName">Last Name</label>
  //       <Field id="lastName" name="lastName" placeholder="soyisim" />

  //       <label htmlFor="email">Email</label>
  //       <Field
  //         id="email"
  //         name="email"
  //         placeholder="jane@acme.com"
  //         type="email"
  //       />
  //       <label htmlFor="message">Message</label>
  //       <Field id="message" name="message" placeholder="Mesajınız..." />
  //       <button type="submit">Submit</button>
  //     </Form>
  //   </Formik>
  //   </div>
  // )

    const {handleSubmit,handleChange,handleBlur,values,isSubmitting,errors,touched} = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        message:"",
      },
      onSubmit: async (values,bag) => {
        //alert(JSON.stringify(values, null, 2));
        await new Promise((r)=>setTimeout(r,1000));
        console.log(values);
        bag.resetForm();
      },
      validationSchema,
    });
    return (
      <div>
        <h2>İletişim</h2>
         <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label><br/>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={values.firstName}
            disabled={isSubmitting}
            onBlur={handleBlur("firstName")}
          />
          {errors.firstName && touched.firstName && <div className="error">{errors.firstName}</div>}
        </div>
        <br/>
        <div>
          <label htmlFor="lastName">Last Name</label><br/>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={values.lastName}
            disabled={isSubmitting}
            onBlur={handleBlur("lastName")}
          />
          {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>}
        </div>
        <br/>
        <div>
          <label htmlFor="email">Email</label><br/>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
            disabled={isSubmitting}
            onBlur={handleBlur("email")}
          />
          {errors.email && touched.email && <div className="error">{errors.email}</div>}
        </div>
        <br/>
        <div>
          <label htmlFor="message">Message</label><br/>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            onChange={handleChange}
            value={values.message}
            disabled={isSubmitting}
            onBlur={handleBlur("message")}
          />
          {errors.message && touched.message && <div className="error">{errors.message}</div>}
        </div>
        <br/>
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
      </div>
     
    );
  
}

export default Contact;