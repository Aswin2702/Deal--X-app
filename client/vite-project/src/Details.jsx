import HomeTop from "./Hometobbar";
import s1 from "./assets/s2.jpeg";
import s2 from "./assets/star.png";
import { useNavigate } from "react-router-dom";


const Details = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HomeTop />
      <div className='flex'>
        <img
          src={s1}
          alt=''
          className='imges p-10 w-1/2 h-1/2 rounded-full mt-32 '
        />
        <div>
          <h1 className='text-2xl text-white px-5 py-20 text-center font-bold'>
            SHARZ New Design - 3656-u44
          </h1>
          <div>
            <div>
              <h1 className='text-xl  text-white'>
                {" "}
                <span className='font-bold sp'>DESCRIPTION: </span> <br />
                <span className='text-md '>
                  This is a the sharz series u44 product with a stylish and
                  elegant design . Free air flow and has tiny pores it also has
                  an integrated gps system to track yourself using sharzapp
                </span>
              </h1>
              <h1 className='text-xl  text-white py-6  '> <span className="font-bold sp"> REVIEW: </span> 4.5 Stars</h1>
              <img src={s2} alt='' className='w-5 h-5 px-5' />
            </div>
            <h1 className='text-xl text-white py-6'> <span className="font-bold sp"> INITIAL PRICE : </span> $64 </h1>
            <h1 className='text-xl text-white py-6 '><span className="font-bold sp">CURRENT PRICE :</span> $64 </h1>
          </div>
          <div className=' pb-10'>
            <label for='size' className='text-white text-xl font-bold sp'>
              CHOOSE A SIZE :
            </label>
            <select
              name='size'
              id='size'
              className='h-8 rounded-lg my-42 mx-8 px-8'
            >
              <option value='Select Size'>Select Size</option>
              <option value='5-kids'>5-kids</option>
              <option value='6-small'>6-small</option>
              <option value='7-medium'>7-medium</option>
              <option value='8-large'>8-large</option>
              <option value='9-xl'>9-xl</option>
            </select>
            <button className='text-center text-md text-white btn px-8 py-1 ml-5 mt-7 rounded-full'
            onClick={() => navigate("/request")}
            >
              Request
            </button>
            <button className='text-center text-md text-white btn px-8 py-1 ml-5  mt-7 rounded-full'>
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
