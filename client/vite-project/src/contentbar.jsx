import img1 from "./assets/trade.png";
import img2 from "./assets/power.png";
import img3 from "./assets/mat.png";

const Contentbar = () => {
  return (
    <div className='main'>
      <div className='con-bar mb-0 pb-0'>
        <div className='text-white mt-16 items-center flex mx-auto my-0 justify-center'>
          <div className='content items-start'>
            <h1 className='text-5xl font-bold text-white p-1 pb-4'>
              Trade - off your <br /> unique stuffs
            </h1>
            <p className='text-md p-2'>
              The most secure marketplace for buying and <br /> selling unique
              products.
            </p>
            <button className='text-center text-xl text-white btn px-5 py-2 ml-2 mt-7 rounded-full'>
              Sign-in
            </button>
            <button className='text-center text-xl text-white px-5 py-2 mt-7 rounded-full border-white border borrder-solid ml-5'>
              Sign up
            </button>
          </div>
          <div className='imges ml-56'>
            <img src={img1} alt='' />
          </div>
        </div>
      </div>

      {/* -------------------Second---------------- */}

      <div className='con-bar mb-0 pb-0'>
        <div className='text-white mt-16 items-center flex mx-auto my-0 justify-start'>
          <div className='imges ml-28'>
            <img src={img2} alt='' />
          </div>
          <div className='content ml-56'>
            <h1 className='text-5xl font-bold text-white p-1 pb-4'>
              Built-in analytics to <br /> track your teams work
            </h1>
            <p className='text-md p-2 text'>
              Use our built-in analytics dashboard to pull <br /> valuable
              insights and monitor the value of your <br />
              work portfolio over time.
            </p>
            <button className='text-center text-xl text-white btn px-5 py-2 ml-2 mt-7 rounded-full'>
              View our analytics
            </button>
          </div>
        </div>
      </div>

      {/* -----------------------Third------------------- */}

      <div className='con-bar mb-0 pb-0'>
        <div className='text-white mt-16 items-center flex mx-auto my-0 justify-center'>
          <div className='content items-start'>
            <h1 className='text-5xl font-bold text-white p-1 pb-4'>
              Work as a team in a <br /> common workspace
            </h1>
            <p className='text-md p-2'>
              Work as team in the common work <br /> space.Every member in the
              can access their <br />
              private workspace too.
            </p>
            <button className='text-center text-xl text-white btn px-5 py-2 ml-2 mt-7 rounded-full'>
              View Our workspace
            </button>
          </div>
          <div className='imges ml-56'>
            <img src={img3} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contentbar;
