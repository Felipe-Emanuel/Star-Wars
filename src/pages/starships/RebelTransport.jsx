import { useEffect, useState } from "react";
import sw from "../../../sw.json";
import { Loading } from "../../components/layout/Loader";
import { Text } from "../../components/util/Text";
import { LoggedInNavBar } from "../../components/layout/LoggedInNavBar";

export function RebelTransport() {
  const [starships, setStarships] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    async function loadStarships() {
      const response = await fetch("https://swapi.dev/api/starships/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      const results = data.results[9];
      setRemoveLoading(true);
      return setStarships(results);
    }

    loadStarships();
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
                {sw.Starships[9]["Rebel transport"].name}
              </h1>
              <p className=" py-2  text-gray-400">
                Capacidade de carga: {starships.cargo_capacity}
              </p>
              <p className=" py-2  text-gray-400">
                Custo em créditos:{" "}
                {starships.cost_in_credits === "unknown"
                  ? "Não calculado"
                  : starships.cost_in_credits}
              </p>
              <p className=" py-2  text-gray-400">
                Passageiros:{" "}
                {starships.passengers === "n/a"
                  ? "Não informado"
                  : starships.passengers}
              </p>
              <p className=" py-2  text-gray-400">
                Pilotos:{" "}
                {sw.Starships[9]["Rebel transport"].pilots === "N/A"
                  ? "Sem pilotos identificados"
                  : sw.Starships[9]["Rebel transport"].pilots}
              </p>
            </Text>
          </div>
          <img
            className="rounded-lg w-[90vw] md:w-[70vh] lg:w-[30vw] m-auto transition-all shadow-2xl shadow-gray-400 hover:shadow-blue-400"
            src={sw.Starships[9]["Rebel transport"].img_url}
            alt={sw.Starships[9]["Rebel transport"].name}
          />
        </div>
      )}
    </div>
  );
}
