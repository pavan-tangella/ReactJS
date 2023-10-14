import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Form() {
    const [id,setId] = useState('');
    const [title,setTitle] = useState('');
    const [brand,setBrand] = useState('');
    const [price,setPrice] = useState('');
    const [des,setDes] = useState('');
    const [imgurl,setImgurl] = useState('');
    const [products, setProducts] = useState([]);

    const productsData = {
        productId:id,
        title:title,
        brand:brand,
        price:price,
        des:des,
        imgurl:imgurl
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3002/products',productsData).then((res)=>{
            alert("success")
        })
    }
    useEffect(() => {
      axios.get('http://localhost:3002/products').then((res) => {
        setProducts(res.data);
      });
    }, []);
  return (
    <>
    <div className='row justify-content-center'>
      <div className='col-md-6 img-thumbline'>
        <h3 className='text-center text-primary'>Add Product</h3>
      <form action="" method='post' onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="id">product id</label>
    <input type="text" class="form-control" id="id" onChange={(e)=>{setId(e.target.value)}}/>
  </div>
  <div class="form-group md-3">
    <label for="title">title</label>
    <input type="text" class="form-control" id="title" onChange={(e)=>{setTitle(e.target.value)}}/>
  </div>
  <div class="form-group md-3">
    <label for="brand">brand:</label>
    <input type="text" class="form-control" id="brand" onChange={(e)=>{setBrand(e.target.value)}}/>
  </div>
  <div class="form-group md-3">
    <label for="price">price:</label>
    <input type="text" class="form-control" id="price" onChange={(e)=>{setPrice(e.target.value)}}/>
  </div>
  <div class="form-group md-3">
    <label for="des">description:</label>
    <input type="text" class="form-control" id="des" onChange={(e)=>{setDes(e.target.value)}}/>
  </div>
  <div class="form-group md-3">
    <label for="imgurl">Img url:</label>
    <input type="text" class="form-control" id="imgurl" onChange={(e)=>{setImgurl(e.target.value)}}/>
  </div>
  <button type="submit" class="btn btn-danger">Submit</button>
</form>
</div>
<div>
  <table className='table table-bordered' style={{color:"black "}}>
    <thead>
      <tr>
        <th>S.NO</th>
        <th>Product Id</th>
        <th>Product title</th>
        <th>Product Brand</th>
        <th>Product Price</th>
        <th>Product Description</th>
        <th>Product Image</th>
      </tr>
    </thead>
    <tbody>
    {products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.productId}</td>
                  <td>{product.title}</td>
                  <td>{product.brand}</td>
                  <td>{product.price}</td>
                  <td>{product.des}</td>
                  <td><img src={product.imgurl} style={{width:'116px'}}/></td>
                </tr>
              ))}
    </tbody>
  </table>
</div>

  </div>

    </>
  )
}