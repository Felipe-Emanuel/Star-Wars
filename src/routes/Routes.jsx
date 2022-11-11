import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { useContext } from "react";

import { AuthProvider, AuthContext } from "../contexts/AuthContext";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { CreateAccount } from "../pages/CreateAccount";
import { Characters } from "../pages/Characters";
import { Starships } from "../pages/Starships";
import { Planets } from "../pages/Planets";

import { LukeSkywalker } from "../pages/Characters/LukeSkywalker";
import { C3po } from "../pages/Characters/C3po";
import { R2d2 } from "../pages/Characters/R2d2";
import { Darthvader } from "../pages/Characters/Darthvader";
import { Leiaorgana } from "../pages/Characters/Leiaorgana";
import { Owenlars } from "../pages/Characters/Owenlars";
import { BeruWhitesunLars } from "../pages/Characters/BeruWhitesunLars";
import { R5d4 } from "../pages/Characters/R5d4";
import { BiggsDarklighter } from "../pages/Characters/BiggsDarklighter";
import { ObiWankenobi } from "../pages/Characters/ObiWankenobi";

import { Cr90corvette } from "../pages/starships/Cr90corvette";
import { StarDestroyer } from "../pages/starships/StarDestroyer";
import { Sentinel } from "../pages/starships/Sentinel";
import { Deathstar } from "../pages/starships/Deathstar";
import { MillenniumFalcon } from "../pages/starships/MillenniumFalcon";
import { YWing } from "../pages/starships/YWing";
import { XWing } from "../pages/starships/XWing";
import { TieAdvancedX1 } from "../pages/starships/TieAdvancedX1";
import { Executor } from "../pages/starships/Executor";
import { RebelTransport } from "../pages/starships/RebelTransport";
import { Loading } from "../components/layout/Loader";
import { Error404 } from "../pages/Error404";
import { Tatooine } from "../pages/Planets/Tatooine";
import { Alderaan } from "../pages/Planets/Alderaan";
import { Yaviniv } from "../pages/Planets/Yaviniv";
import { Hoth } from "../pages/Planets/Hoth";
import { Dagobah } from "../pages/Planets/Dagobah";
import { Bespin } from "../pages/Planets/Bespin";
import { Endor } from "../pages/Planets/Endor";
import { Naboo } from "../pages/Planets/Naboo";
import { Coruscant } from "../pages/Planets/Coruscant";
import { Kamino } from "../pages/Planets/Kamino";

export const AllRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if(loading) {
        return <Loading />
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/planets" element={<Planets />} />+

            {/* Characters */}

          <Route
            path="/characters/LukeSkywalker"
            element={
              <Private>
                <LukeSkywalker />
              </Private>
            }
          />
          <Route
            path="/characters/c-3po"
            element={
              <Private>
                <C3po />
              </Private>
            }
          />
          <Route
            path="/characters/r2-d2"
            element={
              <Private>
                <R2d2 />
              </Private>
            }
          />
          <Route
            path="/characters/darthvader"
            element={
              <Private>
                <Darthvader />
              </Private>
            }
          />
          <Route
            path="/characters/leiaorgana"
            element={
              <Private>
                <Leiaorgana />
              </Private>
            }
          />
          <Route
            path="/characters/owenlars"
            element={
              <Private>
                <Owenlars />
              </Private>
            }
          />
          <Route
            path="/characters/beruwhitesunlars"
            element={
              <Private>
                <BeruWhitesunLars />
              </Private>
            }
          />
          <Route
            path="characters/r5-d4"
            element={
              <Private>
                <R5d4 />
              </Private>
            }
          />
          <Route
            path="/characters/biggsdarklighter"
            element={
              <Private>
                <BiggsDarklighter />
              </Private>
            }
          />
          <Route
            path="/characters/obi-wankenobi"
            element={
              <Private>
                <ObiWankenobi />
              </Private>
            }
          />

            {/* Starships */}

          <Route
            path="/starships/cr90corvette"
            element={
              <Private>
                <Cr90corvette />
              </Private>
            }
          />
          <Route
            path="/starships/stardestroyer"
            element={
              <Private>
                <StarDestroyer />
              </Private>
            }
          />
          <Route
            path="/starships/sentinel-classlandingcraft"
            element={
              <Private>
                <Sentinel />
              </Private>
            }
          />
          <Route
            path="/starships/deathstar"
            element={
              <Private>
                <Deathstar />
              </Private>
            }
          />
          <Route
            path="/starships/millenniumfalcon"
            element={
              <Private>
                <MillenniumFalcon />
              </Private>
            }
          />
          <Route
            path="/starships/y-wing"
            element={
              <Private>
                <YWing />
              </Private>
            }
          />
          <Route
            path="/starships/x-wing"
            element={
              <Private>
                <XWing />
              </Private>
            }
          />
          <Route
            path="/starships/tieadvancedx1"
            element={
              <Private>
                <TieAdvancedX1 />
              </Private>
            }
          />
          <Route
            path="/starships/executor"
            element={
              <Private>
                <Executor />
              </Private>
            }
          />
          <Route
            path="/starships/rebeltransport"
            element={
              <Private>
                <RebelTransport />
              </Private>
            }
          />
          
            {/* Planets */}
          <Route
            path="/planets/tatooine"
            element={
              <Private>
                <Tatooine />
              </Private>
            }
          />
          <Route
            path="/planets/alderaan"
            element={
              <Private>
                <Alderaan />
              </Private>
            }
          />
          <Route
            path="/planets/yaviniv"
            element={
              <Private>
                <Yaviniv />
              </Private>
            }
          />
          <Route
            path="/planets/hoth"
            element={
              <Private>
                <Hoth />
              </Private>
            }
          />
          <Route
            path="/planets/dagobah"
            element={
              <Private>
                <Dagobah />
              </Private>
            }
          />
          <Route
            path="/planets/bespin"
            element={
              <Private>
                <Bespin />
              </Private>
            }
          />
          <Route
            path="/planets/endor"
            element={
              <Private>
                <Endor />
              </Private>
            }
          />
          <Route
            path="/planets/naboo"
            element={
              <Private>
                <Naboo />
              </Private>
            }
          />
          <Route
            path="/planets/coruscant"
            element={
              <Private>
                <Coruscant />
              </Private>
            }
          />
          <Route
            path="/planets/kamino"
            element={
              <Private>
                <Kamino />
              </Private>
            }
          />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
