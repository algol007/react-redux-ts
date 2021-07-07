import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Sidebar from "../../components/Layout/Sidebar";
import * as Form from "../../components/Form";
import * as Button from "../../components/Button";

interface Props extends RouteComponentProps {}

const Profile = ({ history }: Props) => {
  const [user, setUser] = useState<any>("");

  useEffect(() => {
    getProfile(sessionStorage.getItem("token"));
  }, []);

  const getProfile = async (token: any) => {
    await fetch("http://localhost:5000/profile", {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "X-Heltek-Token": token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setUser(json.user);
      })
      .catch(() => alert("Failed to get facility!"));
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p-8 w-full">
          <h1 className="font-bold text-gray-400">Dashboard / Profile</h1>
          <div className="mt-12 w-1/2">
            <div className="mr-4 mb-4 w-full">
              <Form.Input
                name="Name"
                placeholder={user.name}
                className="capitalize"
              />
            </div>
            <div className="mr-4 mb-8 w-full">
              <Form.Input
                name="Email"
                defaultValue={user.email}
                disabled="disabled"
                className="text-gray-500"
              />
            </div>
            <Button.Primary className="text-sm">Save</Button.Primary>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;
