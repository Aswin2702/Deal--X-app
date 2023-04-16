import { useNavigate } from "react-router-dom";

import HomeTop from "./Hometobbar";
import "./Home.css";
import BgVideo from "./assets/bg-1.mp4";
import sell from "./assets/clothes.jpeg";
import shoe from "./assets/shoes.jpeg";
import elec from "./assets/elec.jpeg";
import jwels from "./assets/jwels.jpg";
import arts from "./assets/arts.jpeg";
import wood from "./assets/wood.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className=''>
      <HomeTop />
      <div className='mt-32 mb-36'>
        <div>
          <video src={BgVideo} autoPlay muted loop className='video-bg'></video>
        </div>
        <div className='flex  justify-center my-0 mx-auto items-center'>
          <div className=''>
            <h1 className='text-5xl font-bold text-white p-1 pb-4 leading-relaxed'>
              <span className='sp'>B</span>uy, <span className='sp'>S</span>ell
              and <span className='sp'>T</span>rade <br /> Unique Products{" "}
            </h1>
          </div>
          <div className='search ml-64'>
            {/* <div className='mb-5'>
              <img
                src={sell}
                alt=''
                className='h-44 w-66 object-cover rounded-3xl'
              />
            </div> */}
            <form action='' className='flex'>
              <input
                type='text'
                placeholder='Search Products'
                name='searchbar'
                className='rounded-full outline-none pl-4 w-96'
              />
              <button
                type='submit'
                className='text-center text-xl text-white btn px-6 py-1 ml-2.5 rounded-md'
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* -------------------Catogories------------------ */}

      <div className='cat text-center mt-20'>
        <hr />
        <h1 className='text-4xl font-bold text-white p-1 leading-relaxed'>
          Top Categroies
        </h1>
        <hr />
        <div className='categories flex'>
          <div className='cat-1 text-center h-48 w-36 m-10 bg-white rounded-xl scale-100 hover:scale-125'>
            <img src={sell} alt='' className='rounded-full h-30 w-50' />
            <h1 className='font-bold p-3'>Clothes</h1>
          </div>
          <div className='cat-1 text-center h-48 w-36 m-10 bg-white rounded-xl scale-100 hover:scale-125'>
            <img src={shoe} alt='' className='rounded-full h-50 w-60' />
            <h1 className='font-bold p-3'>Shoes</h1>
          </div>
          <div className='cat-1 text-center h-48 w-36 m-10 bg-white rounded-xl scale-100 hover:scale-125'>
            <img src={elec} alt='' className='rounded-full h-32 w-60' />
            <h1 className='font-bold p-3'>Electronics</h1>
          </div>
          <div className='cat-1 text-center h-48 w-36 m-10 bg-white rounded-xl scale-100 hover:scale-125'>
            <img src={jwels} alt='' className='rounded-full h-30 w-50' />
            <h1 className='font-bold p-3'>Ornaments</h1>
          </div>
          <div className='cat-1 text-center h-48 w-36 m-10 bg-white rounded-xl scale-100 hover:scale-125'>
            <img src={arts} alt='' className='rounded-full h-30 w-50' />
            <h1 className='font-bold p-3'>arts</h1>
          </div>
          <div className='cat-1 text-center h-48 w-36 m-10 bg-white rounded-xl scale-100 hover:scale-125'>
            <img src={wood} alt='' className='rounded-full h-30 w-50' />
            <h1 className='font-bold p-7'>Furnitures </h1>
          </div>
          <div className='cat-1 text-center h-48 w-36 m-10 bg-white rounded-xl scale-100 hover:scale-125'>
            <img src={sell} alt='' className='rounded-full h-30 w-50' />
            <h1 className='font-bold p-3'>Electronics</h1>
          </div>
        </div>
        <hr />

        <div className='listings'>
          <h1 className='text-4xl font-bold text-white p-1 pb-4 leading-relaxed'>
            Top Listings
          </h1>
          <hr />
          <div>
            <div className='cat-1 h-48 m-10 bg-white rounded-xl mx-36 flex justify-start items-center'>
              <img src={wood} alt='' className='rounded-full h-48 w-36' />
              <div className='cat-1 ml-10'>
                <h1 className='font-extrabold p-4 text- text-purple-600'>
                  MAXY DESIGNERS{" "}
                </h1>
                <h1 className='font-bold p-4'>Posted on : 23 / 4 / 2023</h1>
                <h1 className='font-bold p-4'>
                  Description : Unique wooden bed with peacock and tress design{" "}
                </h1>
              </div>
              <hr />
              <button
                type='submit'
                className='text-center text-md - text-white mr-10 btn px-6 h-8 py-1 ml-20 rounded-md'
                onClick={() => navigate("/details")}
              >
                Details
              </button>
              <button
                type='submit'
                className='text-center text-md text-white btn px-6 mr-15 py-1 h-8 ml-15 rounded-md'
              >
                Chat
              </button>
            </div>

            <div className='cat-1 h-48 m-10 bg-white rounded-xl mx-36 flex justify-start items-center'>
              <img src={wood} alt='' className='rounded-full h-48 w-36' />
              <div className='cat-1 ml-10'>
                <h1 className='font-extrabold p-4 text- text-purple-600'>
                  MAXY DESIGNERS{" "}
                </h1>
                <h1 className='font-bold p-4'>Posted on : 23 / 4 / 2023</h1>
                <h1 className='font-bold p-4'>
                  Description : Unique wooden bed with peacock and tress design{" "}
                </h1>
              </div>
              <hr />
              <button
                type='submit'
                className='text-center text-md - text-white mr-10 btn px-6 h-8 py-1 ml-20 rounded-md'
              >
                Details
              </button>
              <button
                type='submit'
                className='text-center text-md text-white btn px-6 mr-15 py-1 h-8 ml-15 rounded-md'
              >
                Chat
              </button>
            </div>

            <div className='cat-1 h-48 m-10 bg-white rounded-xl mx-36 flex justify-start items-center'>
              <img src={wood} alt='' className='rounded-full h-48 w-36' />
              <div className='cat-1 ml-10'>
                <h1 className='font-extrabold p-4 text- text-purple-600'>
                  MAXY DESIGNERS{" "}
                </h1>
                <h1 className='font-bold p-4'>Posted on : 23 / 4 / 2023</h1>
                <h1 className='font-bold p-4'>
                  Description : Unique wooden bed with peacock and tress design{" "}
                </h1>
              </div>
              <hr />
              <button
                type='submit'
                className='text-center text-md - text-white mr-10 btn px-6 h-8 py-1 ml-20 rounded-md'
              >
                Details
              </button>
              <button
                type='submit'
                className='text-center text-md text-white btn px-6 mr-15 py-1 h-8 ml-15 rounded-md'
              >
                Chat
              </button>
            </div>

            <div className='cat-1 h-48 m-10 bg-white rounded-xl mx-36 flex justify-start items-center'>
              <img src={wood} alt='' className='rounded-full h-48 w-36' />
              <div className='cat-1 ml-10'>
                <h1 className='font-extrabold p-4 text- text-purple-600'>
                  MAXY DESIGNERS{" "}
                </h1>
                <h1 className='font-bold p-4'>Posted on : 23 / 4 / 2023</h1>
                <h1 className='font-bold p-4'>
                  Description : Unique wooden bed with peacock and tress design{" "}
                </h1>
              </div>
              <hr />
              <button
                type='submit'
                className='text-center text-md - text-white mr-10 btn px-6 h-8 py-1 ml-20 rounded-md'
              >
                Details
              </button>
              <button
                type='submit'
                className='text-center text-md text-white btn px-6 mr-15 py-1 h-8 ml-15 rounded-md'
              >
                Chat
              </button>
            </div>

            <div className='cat-1 h-48 m-10 bg-white rounded-xl mx-36 flex justify-start items-center'>
              <img src={wood} alt='' className='rounded-full h-48 w-36' />
              <div className='cat-1 ml-10'>
                <h1 className='font-extrabold p-4 text- text-purple-600'>
                  MAXY DESIGNERS{" "}
                </h1>
                <h1 className='font-bold p-4'>Posted on : 23 / 4 / 2023</h1>
                <h1 className='font-bold p-4'>
                  Description : Unique wooden bed with peacock and tress design{" "}
                </h1>
              </div>
              <hr />
              <button
                type='submit'
                className='text-center text-md - text-white mr-10 btn px-6 h-8 py-1 ml-20 rounded-md'
              >
                Details
              </button>
              <button
                type='submit'
                className='text-center text-md text-white btn px-6 mr-15 py-1 h-8 ml-15 rounded-md'
              >
                Chat
              </button>
            </div>

            <div className='cat-1 h-48 m-10 bg-white rounded-xl mx-36 flex justify-start items-center'>
              <img src={wood} alt='' className='rounded-full h-48 w-36' />
              <div className='cat-1 ml-10'>
                <h1 className='font-extrabold p-4 text- text-purple-600'>
                  MAXY DESIGNERS{" "}
                </h1>
                <h1 className='font-bold p-4'>Posted on : 23 / 4 / 2023</h1>
                <h1 className='font-bold p-4'>
                  Description : Unique wooden bed with peacock and tress design{" "}
                </h1>
              </div>
              <hr />
              <button
                type='submit'
                className='text-center text-md - text-white mr-10 btn px-6 h-8 py-1 ml-20 rounded-md'
              >
                Details
              </button>
              <button
                type='submit'
                className='text-center text-md text-white btn px-6 mr-15 py-1 h-8 ml-15 rounded-md'
              >
                Chat
              </button>
            </div>

            <div className='cat-1 h-48 m-10 bg-white rounded-xl mx-36 flex justify-start items-center'>
              <img src={wood} alt='' className='rounded-full h-48 w-36' />
              <div className='cat-1 ml-10'>
                <h1 className='font-extrabold p-4 text- text-purple-600'>
                  MAXY DESIGNERS{" "}
                </h1>
                <h1 className='font-bold p-4'>Posted on : 23 / 4 / 2023</h1>
                <h1 className='font-bold p-4'>
                  Description : Unique wooden bed with peacock and tress design{" "}
                </h1>
              </div>
              <hr />
              <button
                type='submit'
                className='text-center text-md - text-white mr-10 btn px-6 h-8 py-1 ml-20 rounded-md'
              >
                Details
              </button>
              <button
                type='submit'
                className='text-center text-md text-white btn px-6 mr-15 py-1 h-8 ml-15 rounded-md'
              >
                Chat
              </button>
            </div>
          </div>
          <button
            type='submit'
            className='text-center text-md text-white btn mt-6 px-6 mr-15 mb-20 py-1 h-8 ml-15 rounded-md '
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
