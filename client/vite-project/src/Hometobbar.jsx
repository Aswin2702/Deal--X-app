import { useNavigate } from "react-router-dom";
const HomeTop = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex p-5 items-center bg-black shadow-xl'>
        <h1 className='text-3xl font-bold text-white'>
          D<span className='sp'>EAL</span> - X
        </h1>
        <div className='left-nav flex ml-auto'>
          <h1 className='text-white text-xl ml-8'>Team</h1>
          <button
            className='text-white text-xl ml-8'
            type='submit'
            onClick={() => navigate("/sell")}
          >
            Sell
          </button>
          <h1 className='text-white text-xl sp ml-8'>Buy</h1>
          <h1 className='text-white text-xl sp ml-8'>Community</h1>
          <h1 className='text-white text-xl sp ml-8'>Help</h1>
        </div>
      </div>
    </div>
  );
};
export default HomeTop;
