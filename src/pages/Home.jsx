import { Link } from "react-router-dom";
import { Text } from "../components/util/Text";

export function Home() {
  return (
    <div className="bg-star bg-cover bg-center w-screen h-screen">
      <div className="text-center pt-10">
        <Text className="text-[20px] sm:text-[28px] lg:text-[48px] text-yellow-500 font-bold">
          Star Wars Personagens, Naves e mais...
        </Text>
      </div>
      <div className="text-center pt-10">
        <Text
          className="
            m-2 z-50 transition-all text-gray-100 hover:text-yellow-500
            font-bold text-[18px] hover:border-b-2 hover:border-gray-100
            hover:animate-pulse
            sm:text-[22px] lg:text-[42px]
          "
        >
          <Link to="/characters"> Personagens </Link>
        </Text>
        <Text
          className="
            m-2 z-50 transition-all text-gray-100 hover:text-yellow-500
            font-bold text-[18px] hover:border-b-2 hover:border-gray-100
            hover:animate-pulse
            sm:text-[22px] lg:text-[42px]
          "
        >
          <Link to="/starships"> Naves </Link>
        </Text>
        <Text
          className="
            m-2 z-50 transition-all text-gray-100 hover:text-yellow-500
            font-bold text-[18px] hover:border-b-2 hover:border-gray-100
            hover:animate-pulse
            sm:text-[22px] lg:text-[42px]
          "
        >
          <Link to="/planets"> Planets </Link>
        </Text>
        <Text
          className="
            m-2 z-50 transition-all text-gray-100 hover:text-yellow-500
            font-bold text-[18px] hover:border-b-2 hover:border-gray-100
            hover:animate-pulse
            sm:text-[22px] lg:text-[42px]
          "
        >
          <Link to="/login"> Entrar </Link>
        </Text>
      </div>
    </div>
  );
}
