import React from 'react'
import { Form, Formik } from "formik";
import { useProduct } from "./../context/ProductProvider";

function ProductForm() {
  const { createProduct } = useProduct();
  return (
    <div>
      <div>Product Form</div>
      <Formik
        initialValues={{
          name: '',
          image: '',
          price: '',
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          createProduct(values);
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>
              Name <input type="text" name="name" placeholder='Enter a name' onChange={handleChange} value={values.name} />
            </label>
            <label>
              Image<input type="text" name="image" placeholder='Enter a image URL' onChange={handleChange} value={values.image} />
            </label>
            <label>
              Price<input type="text" name="price" placeholder='Enter a price' onChange={handleChange} value={values.price} />
            </label>
            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductForm