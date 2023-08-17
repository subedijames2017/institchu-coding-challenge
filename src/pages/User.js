// export default UserDataForm;
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {  Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import postUserData from '../service';

// Validate user inputs.
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  address: Yup.object().shape({
    street: Yup.string().required('Street is required'),
    suite: Yup.string(),
    city: Yup.string().required('City is required'),
    zipcode: Yup.string().required('Zip code is required'),
  }),
  phone: Yup.string().required('Phone number is required'),
  website: Yup.string().url('Invalid URL').required('Website is required'),
  company: Yup.object().shape({
    name: Yup.string().required('Company name is required'),
    catchPhrase: Yup.string(),
    bs: Yup.string(),
  }),
});

const UserForm = () => {
  const handleSubmit = async (values, actions) => {
    actions.setSubmitting(true)
    try {
      const response = await postUserData(values);
      if(response?.status === 201){
        actions.resetForm();
        toast.success(`User ${response?.data?.name} Added Successfully`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 20000
        });
        actions.setSubmitting(false)
      }
   
    } catch (error) {
      actions.resetForm();
      toast.error("Something Went Wrong", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 20000
      });
      actions.setSubmitting(false)
    }
  };
  return (
    <div className="container mt-5">
      <h2>Add New User</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
          },
          phone: '',
          website: '',
          company: {
            name: '',
            catchPhrase: '',
            bs: '',
          },
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.name}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.email}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="phone-number" className="form-label">
                Phone Number
              </label>
              <Field
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.phone}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="website" className="form-label">
                Website
              </label>
              <Field
                type="text"
                id="website"
                name="website"
                placeholder="Website"
                className={`form-control ${touched.website && errors.website ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.website}</div>
            </div>
            <label htmlFor="suite" className="form-label fw-bold mt-4 mb-4">
                    Address
                  </label>
            <Row>
              <Col>
                <div className="mb-3">
                  <label htmlFor="street" className="form-label">
                    Street
                  </label>
                  <Field
                    type="text"
                    id="street"
                    name="address.street"
                    placeholder="Street"
                    className={`form-control ${touched.address?.street && errors.address?.street ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.address?.street}</div>
                </div>
              </Col>
              <Col>
              <div className="mb-3">
                  <label htmlFor="suite" className="form-label">
                    Suite
                  </label>
                  <Field
                    type="text"
                    id="suite"
                    name="address.suite"
                    placeholder="Suite"
                    className={`form-control ${touched.address?.suite && errors.address?.suite ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.address?.suite}</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <Field
                    type="text"
                    id="city"
                    name="address.city"
                    placeholder="City"
                    className={`form-control ${touched.address?.city && errors.address?.city ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.address?.city}</div>
                </div>
              </Col>
              <Col>
                <div className="mb-3">
                  <label htmlFor="zipcode" className="form-label">
                    Zipcode
                  </label>
                  <Field
                    type="text"
                    id="zipcode"
                    name="address.zipcode"
                    placeholder="Zipcode"
                    className={`form-control ${touched.address?.zipcode && errors.address?.zipcode ? 'is-invalid' : ''}`}
                  />
                </div>
                <div className="invalid-feedback">{errors.address?.zipcode}</div>
              </Col>
            </Row>
            
            <label htmlFor="suite" className="form-label fw-bold mt-4 mb-4">
                    Company
                  </label>
            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">
                Name
              </label>
              <Field
                type="text"
                id="companyName"
                name="company.name"
                placeholder="Company Name"
                className={`form-control ${touched.company?.name && errors.company?.name ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.company?.name}</div>
            </div>
            <Row>
              <Col>
                <div className="mb-3">
                  <label htmlFor="catch-phrase" className="form-label">
                    Catch Phrase
                  </label>
                  <Field
                    type="text"
                    id="catchPhrase"
                    name="company.catchPhrase"
                    placeholder="Catch Phrase"
                    className={`form-control ${touched.company?.catchPhrase && errors.company?.catchPhrase ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.company?.catchPhrase}</div>
                </div>
              </Col>
              <Col>
                <div className="mb-3">
                  <label htmlFor="business-service" className="form-label">
                    Business Service
                  </label>
                  <Field
                    type="text"
                    id="bs"
                    name="company.bs"
                    placeholder="Business Service"
                    className={`form-control ${touched.company?.bs && errors.company?.bs ? 'is-invalid' : ''}`}
                  />
                </div>
                <div className="invalid-feedback">{errors.company?.bs}</div>
              </Col>
            </Row>
            
            <button type="submit" className="btn btn-primary mb-4 mt-4" disabled={isSubmitting}>
              Submit
            </button>
            <ToastContainer />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
