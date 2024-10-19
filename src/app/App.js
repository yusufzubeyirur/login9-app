const App = () => {
  return (
    <div className="bg-[#00523F] h-screen z-[1]">
      <img
        src="/cocukadam.png"
        alt="cocukadam"
        className="absolute z-[2] right-0 h-screen"
      />
      <div className="flex justify-center items-center h-screen w-1/2">
        <div className="shadow-[0_0_10px_rgba(255,255,255,0.3)] px-8 py-16 flex flex-col gap-10 z-10 w-[600px]">
          <h1 className="uppercase text-8xl text-[#FFFFFFCC] font-bold">
            Login
          </h1>
          <input
            type="text"
            placeholder="Username"
            className="border-[3px] text-2xl py-3 px-4 rounded-lg border-[#FFFFFF80] text-white bg-transparent placeholder-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-[3px] text-2xl py-3 px-4 rounded-lg border-[#FFFFFF80] text-white bg-transparent placeholder-white"
          />
          <button className="uppercase bg-[#ffffffbe] text-2xl text-[#180707] rounded-lg py-4 px-3 font-semibold hover:bg-[#fffffff1] duration-300">
            Login
          </button>
        </div>
        <img
          src="/Ellipse 3.png"
          alt="sarııı"
          className="z-12 absolute right-2"
        />
      </div>
    </div>
  );
};
export default App;
