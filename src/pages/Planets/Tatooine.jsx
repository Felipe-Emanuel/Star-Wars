import { useEffect, useState } from "react";
import sw from "../../../sw.json";
import { Loading } from "../../components/layout/Loader";
import { Text } from "../../components/util/Text";
import { LoggedInNavBar } from "../../components/layout/LoggedInNavBar";

export function Tatooine() {
  const [planets, setPlanets] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    async function loadPlanets() {
      const response = await fetch("https://swapi.dev/api/planets/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      const results = data.results[0];
      setRemoveLoading(true);
      return setPlanets(results);
    }

    loadPlanets();
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
                {sw.planets[0].Tatooine.name}
              </h1>
              <p className=" py-2  text-gray-400">
                Clima: {planets.climate}
              </p>
              <p className=" py-2  text-gray-400">
                Gravidade:{" "}
                {planets.gravity === "unknown"
                  ? "Não calculado"
                  : planets.gravity}
              </p>
              <p className=" py-2  text-gray-400">
                Terreno:{" "}
                {planets.terrain === "n/a"
                  ? "Não informado"
                  : planets.terrain}
              </p>
              <p className=" py-2  text-gray-400">
                Residentes :{" "}
                {sw.planets[0].Tatooine.residents === "N/A"
                  ? "Sem residentes identificados"
                  : sw.planets[0].Tatooine.residents}
              </p>
            </Text>
          </div>
          <img
            className="rounded-lg h-[30vh] m-auto transition-all shadow-2xl shadow-amber-800 hover:shadow-amber-700"
            src={sw.planets[0].Tatooine.img_url}
            alt={sw.planets[0].Tatooine.name}
          />
        </div>
      )}
    </div>
  );
}
