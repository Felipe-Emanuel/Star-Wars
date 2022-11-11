import { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "../components/util/Text";

export function Error404() {
  const [time, setTime] = useState(5);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    time <= 0 ? navigate("/") : false;

    return () => {
      clearTimeout(timeout.current);
    };
  }, [time]);

  return (
    <div className="bg-star bg-cover bg-center w-screen h-screen">
      <div className="text-center pt-10 flex flex-col">
        <Text className="sm:text-[28px] lg:text-[48px] text-yellow-500 font-bold">
          Página não encontrada
        </Text>
        <div className="mt-40">
          <Text className="sm:text-[28px] lg:text-[48px] text-yellow-500 font-bold">
            hiperespaço em {time}
          </Text>
        </div>
      </div>
    </div>
  );
}
