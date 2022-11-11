import { useEffect, useState } from "react";
import { LoggedOutNavBar } from "../components/layout/LoggedOutNavBar";
import { Loading } from "../components/layout/Loader"
import { Text } from "../components/util/Text";
import { Link } from "react-router-dom";



export const Starships = () => {
  const [characters, setCharacters] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);


  useEffect(() => {
    async function loadCharacters() {
      const response = await fetch("https://swapi.dev/api/starships/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      const results = data.results;
      setRemoveLoading(true)
      return setCharacters(results);
    }

    loadCharacters();
  }, []);

  return (
    <div className="bg-star bg-cover bg-center w-screen h-screen">
      <LoggedOutNavBar />
      <div className="mt-[10%] text-center">
        {characters.map((result) => {
           const normalization = result.name
           .normalize("NFD")
           .replace(/[\u0300-\u036f]/g, "")
           .toLowerCase()
           .replace(/\s/g, "");
         const normalized = normalization;
          return (
            <>
              <Text>
                <Link
                to={normalized}
                className="
                  w-[180px] m-auto transition-all py-2 flex flex-col
                  text-gray-100 hover:text-yellow-500 hover:border-b-2 hover:border-gray-400
                  sm:text-[15px]
                 "
                key={result.name}
              >
                {result.name}
                </Link>
              </Text>
            </>
          );
        })}

        {!removeLoading && <Loading />}
      </div>
    </div>
  );
};
