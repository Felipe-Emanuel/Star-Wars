import { ArrowLeft } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../components/layout/Button";
import { InputConfirmPassword } from "../components/Form/Inputs/InputConfirmPassword";
import { InputPassword } from "../components/Form/Inputs/InputPassword";
import { Text } from "../components/util/Text";
import { InputEmail } from "../components/Form/Inputs/InputEmail";
import { InputPhone } from "../components/Form/Inputs/InputPhone";
import { InputName } from "../components/Form/Inputs/InputName";
import { LoggedOutNavBar } from "../components/layout/LoggedOutNavBar";
import { baseURL } from "../components/api/api";
import { useState } from "react";

export const CreateAccount = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    password: "",
    phone: "",
    confirmPassword: "",
    email: "",
  });

  const changeForm = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const dataUrl = async (data) => {
    const res = await fetch(`${baseURL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => (data.msg === "Bem vindo!" ? navigate("/") : false));
    return res;
  };

  const submiteForm = (e) => {
    e.preventDefault();

    dataUrl(form);
  };

  return (
    <div className="bg-star bg-cover bg-center w-screen h-screen">
      <LoggedOutNavBar />
      <div className="flex flex-col gap-2 px-4 m-auto w-[250px] sm:w-[260px]">
        <div id="create-account" className="flex flex-col">
          <button className="pt-8 pb-4 w-6">
            <Link to="/login">
              <ArrowLeft className="text-gray-100 hover:text-yellow-500 text-[20px]" />
            </Link>
          </button>
          <Text className="text-yellow-500  text-center font-bold text-[23px]">
            Criar Conta
          </Text>
          <Text className="text-purple-50 text-[12px] text-center font-light pb-4">
            Por favor, preencha os campos abaixo
          </Text>
        </div>
        <form
          onSubmit={submiteForm}
          className="z-50 flex-col items-stretch m-auto"
        >
          <label onChange={changeForm}>
            <div className="mt-4">
              <InputName value={form.name} name="name" id="name" type="text" />
            </div>
            <div className="mt-4">
              <InputPhone value={form.phone} name="phone" id="phone" />
            </div>
            <div className="mt-4">
              <InputEmail
                value={form.email}
                name="email"
                id="email"
                type="text"
              />
            </div>
            <div className="mt-4">
              <InputPassword
                value={form.password}
                name="password"
                type="password"
                id="password"
              />
            </div>
            <div className="mt-4">
              <InputConfirmPassword
                value={form.confirmPassword}
                name="confirmPassword"
                type="confirmPassword"
                id="password"
              />
            </div>
          </label>
          <div className="mt-4 text-center">
            <Button type="submit" text="Criar conta" />
          </div>
        </form>
        <Text className=" flex flex-col text-purple-50 text-[10px] md:text-[12px] text-center py-4">
          Já tem uma conta? 
          <Text>
            <Link
              to="/login"
              className="
                transition-all text-center text-[10px] md:text-[12px] hover:text-gray-100
                hover:border-b-2 hover:border-yellow-500 text-yellow-500
              "
            >
               Entrar
            </Link>
          </Text>
        </Text>
      </div>
    </div>
  );
};
