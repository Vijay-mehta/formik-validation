import React from 'react'
import { useFormik } from 'formik'
import { Button, Form, Container } from 'react-bootstrap';
import * as Yup from "yup";


const App = () => {




  const ProfileSchema = Yup.object({
    image: Yup.mixed().required("Please enter the  image")
      // .test("FILE_SIZE","to big",(value)=>value && value < 1024 * 1024) 
      .test("FILE_TYPE", "invalid", (value) => value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)),
    name: Yup.string().required("Please enter the  Name"),
    email: Yup.string().required("Please enter the  Email"),
    number: Yup.string().required("Please enter the  number"),

    password: Yup.string().required("Please enter the  password"),

    confirmPassword: Yup.string().required("Please enter the  confirmPassword"),

    city: Yup.string().required("Please enter the  city"),
    gender: Yup.string().required("Please enter the  gender"),

    remember: Yup.string().required("Please enter the  remember"),


  });



  const onSubmit = (values) => {
    console.log(values)
  }

  const formik = useFormik({
    initialValues: { image: "", name: "", email: "", number: "", password: "", confirmPassword: "", city: "", gender: "", remember: "" },
    onSubmit,
    validationSchema: ProfileSchema,
    
  })

  return (
    <>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>Iamge</Form.Label>
            <input type="file" name='image'
              onChange={(e) =>
                formik.setFieldValue("image", e.target.files[0])
              } />
            {formik.errors.image && (
              <p style={{ color: 'red' }}>{formik.errors.image}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name='name' value={formik.values.name} onChange={formik.handleChange}

            />
          </Form.Group>
          {formik.errors.name && (
            <p style={{ color: 'red' }}>{formik.errors.name}</p>
          )}

          <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name='email' value={formik.values.email} onChange={formik.handleChange} />
          </Form.Group>
          {formik.errors.email && (
            <p style={{ color: 'red' }}>{formik.errors.email}</p>
          )}
          <Form.Group className="mb-3" >
            <Form.Label>Number</Form.Label>
            <Form.Control type="number" placeholder="Number" name='number' value={formik.values.number} onChange={formik.handleChange} />
          </Form.Group>
          {formik.errors.number && (
            <p style={{ color: 'red' }}>{formik.errors.number}</p>
          )}
          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={formik.values.password} onChange={formik.handleChange} />
          </Form.Group>
          {formik.errors.password && (
            <p style={{ color: 'red' }}>{formik.errors.password}</p>
          )}
          <Form.Group className="mb-3" >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" name='confirmPassword' value={formik.values.confirmPassword} onChange={formik.handleChange} />
          </Form.Group>
          {formik.errors.confirmPassword && (
            <p style={{ color: 'red' }}>{formik.errors.confirmPassword}</p>
          )}

          <Form.Select aria-label="Default select example" name='city' value={formik.values.city} onChange={formik.handleChange}>
            <option>Select</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Jaipur">kota</option>
            <option value="Jaipur">udaipur</option>
          </Form.Select>
          {formik.errors.city && (
            <p style={{ color: 'red' }}>{formik.errors.city}</p>
          )}


          <label className="mt-3"   ><b>Select Gender</b></label>
          <div><input type="radio" name='gender' value="male" onChange={formik.handleChange} />
            Male</div>
          <div><input type="radio" name='gender' value="Female" onChange={formik.handleChange} /> Female</div>
          <div><input type="radio" name='gender' value="other" onChange={formik.handleChange} /> other</div>
          {formik.errors.gender && (
            <p style={{ color: 'red' }}>{formik.errors.gender}</p>
          )}

          <Form.Group className="mb-3 mt-4" >
            <Form.Label>remember</Form.Label>

            <Form.Check type="checkbox" label="Check me out" name='remember' value={formik.values.remember} onChange={formik.handleChange} />
          </Form.Group>
          {formik.errors.remember && (
            <p style={{ color: 'red' }}>{formik.errors.remember}</p>
          )}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default App
