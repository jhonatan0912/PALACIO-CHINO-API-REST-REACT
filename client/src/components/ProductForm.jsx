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
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-bold lg:text-3xl p-5' > {params.id ? "Editar product" : "Crear producto"}</h1 >
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
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col border border-black p-10 rounded"
          >
            <label className='flex flex-col'>
              Name
              <input
                className='bg-zinc-300 py-1 rounded outline-none'
                type="text" name="name" onChange={handleChange} value={values.name} />
            </label>
            <label className='flex flex-col'>
              Image URL
              <input
                className='bg-zinc-300 py-1 rounded outline-none'
                type="text" name="image" onChange={handleChange} value={values.image} />
            </label>
            <label className='flex flex-col'>
              Price
              <input
                className='bg-zinc-300 py-1 rounded outline-none'
                type="text" name="price" onChange={handleChange} value={values.price} />
            </label>
            <button
              className='p-2 rounded hover:scale-105 bg-green-600 mt-5 text-white'
              type='submit' disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div >
  );
}

export default ProductForm