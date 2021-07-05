import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = (e: any) => {
    e.preventDefault();
    const _data = { email, password };

    fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: JSON.stringify(_data),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        sessionStorage.setItem("token", json.token);
        history.push("/");
      })
      .catch((err) => alert("Wrong email or password!"));
  };

  return (
    <div
      className="w-full h-full flex items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container mx-auto flex flex-col items-center my-4">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-red-600 mb-4">
            LOGIN PAGE
          </h1>
        </div>
        <div className="w-full lg:w-1/3 md:w-1/2 border-2 shadow-xl m-2">
          <form className="p-6" onSubmit={onClickLogin}>
            <div className="mb-4 w-full">
              <input
                type="email"
                placeholder="Email"
                className="border-2 w-full p-2 outline-none focus:border-red-600"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="password"
                placeholder="Password"
                className="border-2 w-full p-2 outline-none focus:border-red-600"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 w-full">
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 border-2 border-red-800 hover:bg-red-700 font-bold"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
        <footer className="mt-12">
          <p className="text-xs text-gray-400 font-bold">Heltek App - 2020</p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
