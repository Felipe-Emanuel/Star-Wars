import { useEffect, useState } from "react";
import sw from "../../../sw.json";
import { Loading } from "../../components/layout/Loader";
import { Text } from "../../components/util/Text";
import { LoggedInNavBar } from "../../components/layout/LoggedInNavBar";

export function R2d2() {
  const [characters, setCharacter] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    async function loadCharacter() {
      const response = await fetch("https://swapi.dev/api/people/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      const results = data.results[2];
      setRemoveLoading(true);
      return setCharacter(results);
    }

    loadCharacter();
  }, []);

  return (
    <div className="bg-star bg-cover bg-center w-screen h-screen">
      <LoggedInNavBar />
      {!removeLoading ? (
        <Loading />
      ) : (
        <div className="text-center pt-6 px-2">
          <div className="text-white pb-8 ">
            <Text className="flex flex-col w-64 m-auto">
              <h1 className=" py-2  text-gray-400">
                {sw.Characters[0].R2d2.name}
              </h1>
              <p className=" py-2  text-gray-400">
                Ano de nascimento: {characters.birth_year}
              </p>
              <p className=" py-2  text-gray-400">
                Cor do cabelo:{" "}
                {characters.hair_color === "n/a"
                  ? "Não identificado"
                  : characters.hair_color}
              </p>
              <p className=" py-2 text-gray-400">Altura: {characters.height}</p>
              <p className=" py-2 text-gray-400">
                Nave:{" "}
                {sw.Characters[0].R2d2.starship === "N/A"
                  ? "Sem nave identificada"
                  : sw.Characters[0].R2d2.starship}
              </p>
            </Text>
          </div>
          <img
            className="rounded-lg h-[50vh] m-auto transition-all shadow-2xl shadow-blue-900 hover:shadow-white"
            src={sw.Characters[0].R2d2.img_url}
            alt={sw.Characters[0].R2d2.name}
          />
        </div>
      )}
    </div>
  );
}