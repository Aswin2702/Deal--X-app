import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='flex p-5 items-center'>
      <h1 className='text-3xl font-bold text-white'>
        D<span className='sp'>EAL</span> - X
      </h1>
      <div className='left-nav flex ml-auto'>
        <h1 className='text-white text-xl ml-8'>About</h1>
        <h1 className='text-white text-xl ml-8'>Pricing</h1>
        <button
          className='text-white text-xl sp ml-8'
          onClick={() => navigate("/signup")}
        >
          Sign-up
        </button>
        <button className='text-white text-xl sp ml-8' onClick={() => navigate("/login")}>Sign-in</button>
        <button className='text-center text-xl text-white btn px-5 py-0 ml-8 rounded-full'>
          Wallet
        </button>
      </div>
    </div>
  );
};

export default Navbar;
