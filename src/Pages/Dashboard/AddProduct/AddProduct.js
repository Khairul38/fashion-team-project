import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth/useAuth';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const { allContext } = useAuth();
    const { ColorButton } = allContext;

    const onSubmit = data => {
        const proceed = window.confirm('Are You Sure, You Want To Add Product');
        if (proceed) {
            axios.post('https://arcane-shore-73399.herokuapp.com/products', data)
                .then(res => {
                    if (res.data.insertedId) {
                        alert('Product Successfully Added');
                        reset();
                    }
                })
        }
    };
    return (
        <div className="banner-addProduct add-products text-center">
            <div className="banner-as">
                <h1>Please Add New Product</h1>
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true })} placeholder="Name" />
                    <textarea className="massage" {...register("description", { required: true })} placeholder="Description" />
                    <input type="number" {...register("price", { required: true })} placeholder="Price" />
                    <input {...register("img", { required: true })} placeholder="Image URL" />
                    <ColorButton sx={{ width: '100%', mt: 3 }}
                        type="submit"
                        variant="contained">ADD PRODUCT</ColorButton>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;