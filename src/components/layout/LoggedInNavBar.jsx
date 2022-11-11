import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@stitches/react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: "gray",
  "&[data-orientation=horizontal]": { height: 1, width: "100%" },
  "&[data-orientation=vertical]": { height: "100%", width: 1 },
});

export const Separator = StyledSeparator;
const Box = styled("div", {});
const Flex = styled("div", { display: "flex" });
const Text = styled("div", {
  fontFamily: "Cinzel",
  fontWeight: "500",
  lineHeight: "20px",
});

export const LoggedInNavBar = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Box className="text-yellow-500 w-full sm:max-w-[400px] ">
      <Text>Desafio - Front End</Text>
      <Separator />
      <Flex css={{ height: 20, alignItems: "center" }}>
        <Text
          className="
            m-2 z-50 transition-all text-gray-100 hover:text-yellow-500
            hover:border-b-2 hover:border-gray-400
            text-[10px] sm:text-[12px] md:text-[15px]
          "
        >
          <Link to="/characters"> Personagens </Link>
        </Text>
        <Separator decorative orientation="vertical" />
        <Text
          className="
            m-2 z-50 transition-all text-gray-100 hover:text-yellow-500
            hover:border-b-2 hover:border-gray-400
            text-[10px] sm:text-[12px] md:text-[15px]
          "
        >
          <Link to="/starships"> Naves </Link>
        </Text>
        <Separator decorative orientation="vertical" />
      <Text
        className="
          m-2 z-50 transition-all text-gray-100 hover:text-yellow-500
          hover:border-b-2 hover:border-gray-400
          text-[10px] sm:text-[12px] md:text-[15px]
          "
      >
        <Link to="/planets"> Planetas </Link>
      </Text>
        <Separator decorative orientation="vertical" />
        <Text
          className="
            m-2 z-50 transition-all text-gray-100 hover:text-yellow-500
            hover:border-b-2 hover:border-gray-400
            text-[10px] sm:text-[12px] md:text-[15px]
          "
        >
          <Link onClick={handleLogout} to="/login">
            Sair
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};
