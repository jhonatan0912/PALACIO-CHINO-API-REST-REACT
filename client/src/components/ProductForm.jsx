import React from 'react'
import { Form, Formik } from "formik";
import { useProduct } from "./../context/ProductProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function ProductForm() {
  const { createProduct, getProduct, updateProduct } = useProduct();
  const [product, setproduct] = useState({
    name: "",
    image: "",
    price: "",
  })
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProduct = async () => {
      if (params.id) {
        const product = await getProduct(params.id)
        setproduct({
          name: product.name,
          image: product.image,
          price: product.price,
        })
      }
    }
    loadProduct()
  }, [])

  return (
    <div>
      <h1>{params.id ? "Edit product" : "Create product"}</h1>
      <Formik
        initialValues={product}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateProduct(params.id, values)
            navigate("/");
          } else {
            await createProduct(values);
          }
          setproduct({
            name: "",
            image: "",
            price: "",
          })
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
    </div >
  );
}

export default ProductForm