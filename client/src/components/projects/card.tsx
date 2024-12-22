import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
export default function card({
  ID,
  Logo,
  Title,
  Technologies,
}: {
  ID: number;
  Logo: string;
  Title: string;
  Technologies: string[];
}) {
  return (
    <>
      <CardContainer className=" ">
        <Link to={`/Project/${ID}`}>
          <CardBody className="bg-white/10 relative group/card w-full h-full  hover:border-teal-300  duration-400 transform transition  shadow-inner   rounded-xl p-6 border  ">
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <img src={`/assets/${Logo}`} className=" h-2/4 w-full " />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                className="px-4 py-2 rounded-xl text-xl font-normal dark:text-white"
              >
                {Title}
              </CardItem>
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl  dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  {Technologies.map((tech, index) => (
                    <span
                      className="flex items-center rounded-full bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-400"
                      key={index}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardItem>
            </div>
          </CardBody>
        </Link>
      </CardContainer>
    </>
  );
}
