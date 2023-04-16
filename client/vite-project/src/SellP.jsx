import HomeTop from "./Hometobbar";
import React, { useState } from "react";
import suk from "./assets/default.jpg";

const SellP = () => {
  const [file, setFile] = useState(suk);

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className=''>
      <HomeTop />
      <h1 className='text-white text-2xl font-bold text-center mt-20  '>
        Start listing your products
      </h1>
      <div className='m-10 mx-80 bg-black pl-56 items-center rounded-2xl pt-10 pb-10'>
        <form action='' className='items-center'>
          <label htmlFor='product_name' className='sp text-xl font-bold'>
            <br /> Product Name:
          </label>
          <input
            type='text'
            name='product_name'
            className='rounded-lg ml-16 mb-5 p-1'
            placeholder='Product name '
          />
          <label htmlFor='product_name' className='sp text-xl font-bold'>
            <br /> Initial Price:
          </label>
          <input
            type='text'
            name='product_name'
            className='rounded-lg ml-24 mb-5 p-1'
            placeholder='Initial price'
          />
          <label htmlFor='product_name' className='sp text-xl font-bold'>
            <br /> Product Description: <br />
          </label>
          <textarea
            name='product_name'
            id=''
            cols='30'
            rows='5'
            className='mt-2 ml-48 rounded-lg'
            placeholder='Enter the description'
          ></textarea>
        </form>
        <h2 className='sp text-xl mt-15 mb-15 font-bold'>Add Image:</h2>
        <div className='w-72 h-64 object-cover rounded-xl bg-white'>
          <img src={file} className='w-86 h-64 rounded-xl ' />
        </div>
        <input
          type='file'
          onChange={handleChange}
          className='bg-white outline-none sp m-5'
        />
      </div>
      <div className='ml-96'>
        <div>
          <button className='text-center text-xl text-white text-bold btn px-5 py-2 ml-72 mt-2 mb-4 rounded-full'>
            POST
          </button>
        </div>
      </div>
    </div>
  );
};
export default SellP;
