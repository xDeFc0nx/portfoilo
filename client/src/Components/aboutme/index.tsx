import pfp from "../../assets/profile.jpeg";
function index() {
  return (
    <>
      <div className=" max-w-2xl m-auto md:max-w-4xl xl:max-w-[1280px] gap-16 xl:gap-1 min-h-screen xl:h-screen items-center px  ">
        <div className="flex flex-col xl:col-span-1 items-center pt-24 lx:pt-0   ">
          <span className="text-[30px] leading-[30px] xl:text-[40px] xl:leading-[60px] pb-5  text-center xl:text-left  text-white">
            About me
          </span>
          <img src={pfp} alt="" className="rounded-full h-32 w-32 " />
          <span className="text-[18px]  leading-[25px] xl:text-[22px] xl:leading-[38px] pt-6 text-gray-400 text-center ">
            You know that spark of inspiration, the "aha!" moment where
            everything clicks—but then you realize it needs a roadmap, a system,
            and a spark of innovation to bring it to life? That’s where I come
            in. I’m a software engineer who thrives in the space between
            imagination and execution. Whether it’s coding up a seamless user
            interface or designing the backend logic that powers it all, I bring
            structure to creativity and consistency to chaos. <br />
            <span className="font-bold">
              Let’s turn your idea into something real.
            </span>
          </span>
        </div>
        <div className="bg-[#5B5CB4] -z-1 xl:w-96  xl:h-96 md:w-52 md:h-52 w-32 h-32 rounded-full blur-[4rem] xl:blur-[12rem] absolute  -translate-x-3/4" />
      </div>
    </>
  );
}

export default index;
