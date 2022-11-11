import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Button } from "../components/layout/Button";
import { InputPassword } from "../components/Form/Inputs/InputPassword";
import { InputEmail } from "../components/Form/Inputs/InputEmail";
import { Text } from "../components/util/Text";
import { LoggedOutNavBar } from "../components/layout/LoggedOutNavBar";
import { AuthContext } from "../contexts/AuthContext";
import { Logo } from "../components/layout/Logo";

export const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const changeForm = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(form.email, form.password);
  };

  const { login } = useContext(AuthContext);

  return (
    <div className="bg-star bg-cover bg-center w-screen h-screen">
      <div className="w-full h-full z-50">
        <LoggedOutNavBar />
        <Logo />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 m-auto items-stretch w-full max-w-sm mt-8"
        >
          <label
            onChange={changeForm}
            htmlFor="email"
            className="flex flex-col px-4"
          >
            <div id="login" className="flex flex-col z-50">
              <Text className="text-yellow-500 font-bold text-[24px]">
                Entrar
              </Text>
              <Text className="text-gray-100 text-[12px] font-light mb-4">
                por favor, entre para continuar
              </Text>
            </div>
            <div className="z-50 flex-col items-stretch w-full">
              <InputEmail
                value={form.user}
                name="user"
                id="user"
                type="email"
                placeholder="Type your name"
              />
            </div>
          </label>
          <div
            onChange={changeForm}
            className="z-50 flex flex-col items-stretch w-full px-4"
          >
            <InputPassword
              value={form.password}
              name="password"
              type="password"
              id="password"
              placeholder="Type your password"
            />
          </div>
          <div className="mt-4 text-center z-50">
            <Button type="submit" text="LOGIN" />
            <Text className="hover:text-yellow-500 text-center text-[10px] md:text-[12px] text-gray-100">
              <a href="#">Esqueceu a senha?</a>
            </Text>
          </div>
          <div className="z-50 text-center py-1">
          <Text className="flex flex-col text-purple-50 text-[10px] md:text-[12px] text-center py-4">
            Ainda não tem uma conta?
          <Text>
            <Link
              to="/createaccount"
              className="
                transition-all text-center md:text-[12px] text-[10px] hover:text-gray-100
                hover:border-b-2 hover:border-yellow-500 text-yellow-500
              "
            >
              Criar conta
            </Link>
          </Text>
        </Text>
          </div>
        </form>
      </div>
    </div>
  );
};
