"use client"
import React from 'react'
import { useFormik } from 'formik'
import { contactSchema } from '../schemas/contactSchema';
import emailjs from '@emailjs/browser';


function Contact() {
    const initialValues = {
      name: "",
      email: "",
      mobile: "",
      description: "",
    };
  
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: initialValues,
      validationSchema: contactSchema,
      onSubmit: (values, action) => {
        // Prepare email template parameters
        const templateParams = {
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          description: values.description,
        };
  
        // Send email using EmailJS
        const service_id ="service_6w1cy4j";
        const template_id ="template_n0p2bww";
        const public_key = "54VmCZ2nOujV97Svg";

        emailjs
          .send(
            service_id, // Replace with your EmailJS Service ID
            template_id, // Replace with your EmailJS Template ID
            templateParams,
            public_key // Replace with your EmailJS User ID
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              alert("Email sent successfully!");
              action.resetForm(); // Reset form fields
            },
            (error) => {
              console.error("FAILED...", error);
              alert("Failed to send email. Please try again.");
            }
          );
      },
    });
  
    return (
      <>
        <h4 className="text-navy">Get call from our technical experts!</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              className="form-control"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? <p className="text-danger">{errors.name}</p> : null}
          </div>
  
          <div className="mb-3">
            <label className="form-label">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              className="form-control"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <p className="text-danger">{errors.email}</p> : null}
          </div>
  
          <div className="mb-3">
            <label className="form-label">Mobile *</label>
            <div className="input-group">
              <span className="input-group-text">+91</span>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                autoComplete="off"
                className="form-control"
                placeholder="Enter your mobile number"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.mobile && touched.mobile ? <p className="text-danger">{errors.mobile}</p> : null}
          </div>
  
          <div className="mb-3">
            <label className="form-label">Description *</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              autoComplete="off"
              rows="4"
              placeholder="Enter description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.description && touched.description ? <p className="text-danger">{errors.description}</p> : null}
          </div>
  
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4">
              Request Callback
            </button>
          </div>
        </form>
      </>
    );
  }
  

function Contact2() {

    const initialValues = {
        name: "",
        email: "",
        mobile: "",
        description: "",
    };



    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: contactSchema,
        onSubmit: (values, action) => {
            
            action.resetForm();
        }
    })

    console.log(errors);



    return (
        <>
            <h4 className="text-navy">Get call from our technical experts!</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name *</label>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        autoComplete='off'
                        className="form-control"
                        placeholder="Enter your name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (<p className='text-danger'>{errors.name}</p>) : null}
                </div>

                <div className="mb-3">
                    <label className="form-label">Email *</label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        autoComplete='off'
                        className="form-control"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (<p className='text-danger'>{errors.email}</p>) : null}

                </div>

                <div className="mb-3">
                    <label className="form-label">Mobile *</label>
                    <div className="input-group">
                        <span className="input-group-text">+91</span>
                        <input
                            type="tel"
                            id='moblie'
                            name='mobile'
                            autoComplete='off'
                            className="form-control"
                            placeholder="Enter your mobile number"
                            value={values.mobile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        
                    </div>
                    {errors.mobile && touched.mobile ? (<p className='text-danger'>{errors.mobile}</p>) : null}
                </div>

                <div className="mb-3">
                    <label className="form-label">Description *</label>
                    <textarea
                        className="form-control"
                        id='description'
                        name='description'
                        autoComplete='off'
                        rows="4"
                        placeholder="Enter description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></textarea>
                    {errors.description && touched.description ? (<p className='text-danger'>{errors.description}</p>) : null}
                </div>

                <div className='text-center'>
                    <button type="submit" className="btn btn-primary px-4">
                        Request Callback
                    </button>
                </div>
            </form>
        </>
    )
}

export default Contact
