export default function card({
  ID,
  Img,
  Title,
  Technologis,
}: {
  ID: number;
  Img: string;
  Title: string;
  Technologis: string;
}) {
  return (
    <>
      <div className="w-[20rem] h-[13rem]  text-white px-4 py-4 rounded-md bg-white/10  backdrop-filter backdrop-blur-lg	 shadow-lg">
        <div className="w-full flex justify-start">
          <img src={Img} />
        </div>
        <p className="text-lg  text-white pl-1">{Title}</p>

        <p className="text-sm text-[#92929B]">{Technologis}</p>
        {ID}
      </div>
    </>
  );
}
