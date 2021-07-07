import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Sidebar from "../../components/Layout/Sidebar";
import Table from "../../components/Table";
import * as Button from "../../components/Button";
import * as Form from "../../components/Form";
import { Modal } from "../../components/Modal";
import * as Notification from "../../components/Notification";
// import { getFacilities } from "../../store/facility/actions";

interface Props extends RouteComponentProps {}

const Facility = ({ history }: Props) => {
  const [facilities, setFacilities] = useState<any[]>([]);
  const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
  const [token, setToken] = useState<any>("");
  const [refresh, setRefresh] = useState<number>(0);

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
    getFacilityData(sessionStorage.getItem("token"));
  }, [refresh]);

  const getFacilityData = async (token: any) => {
    await fetch("http://localhost:5000/facilities", {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "X-Heltek-Token": token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setFacilities(json.data);
      })
      .catch(() => alert("Failed to get facility!"));
  };

  const deleteFacility = (id: number) => {
    Notification.Confirmation({
      onDelete: () => {
        fetch(`http://localhost:5000/facilities/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json;charset=UTF-8",
            "X-Heltek-Token": token,
          },
        })
          .then(() => {
            Notification.Success({
              icon: "success",
              title: "Facility has been deleted",
            });
            setRefresh(refresh + 1);
          })
          .catch(() => alert("Failed to delete facility!"));
      },
    });
  };

  const showModalFacility = () => {
    setShowModalAdd(!showModalAdd);
  };

  const showEditFacility = (id: any) => {
    setShowModalEdit(!showModalEdit);
    localStorage.setItem("id", id);
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p-8 w-full">
          <h1 className="font-bold text-gray-400 mb-8">Dashboard / Facility</h1>
          <div className="flex mb-8">
            <Button.Primary onClick={showModalFacility} className="text-sm">
              Add Facility
            </Button.Primary>
          </div>
          <div className="flex">
            <Table>
              <thead className="bg-media">
                <tr className="bg-red-500 text-white">
                  <th
                    scope="col"
                    className="pr-4 py-3 text-center text-xs font-bold uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="pr-4 py-3 text-left text-xs font-bold uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="pr-4 py-3 text-left text-xs font-bold uppercase tracking-wider"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="pr-4 py-3 text-left text-xs font-bold uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th scope="col" className="relative pr-4 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {facilities &&
                  facilities.map((data, idx) => (
                    <tr key={data.id}>
                      <td className="pr-4 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        {idx + 1}
                      </td>
                      <td className="pr-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {data.name}
                      </td>
                      <td className="pr-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {data.address}
                      </td>
                      <td className="pr-4 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                        {data.type}
                      </td>
                      <td className="pr-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-4 cursor-pointer text-gray-500 hover:text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() => showEditFacility(data.id)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 cursor-pointer text-gray-500 hover:text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() => deleteFacility(data.id)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </main>
        {showModalAdd ? (
          <ActionFacility closeModal={showModalFacility} action="add" />
        ) : (
          ""
        )}
        {showModalEdit ? (
          <ActionFacility closeModal={showEditFacility} action="edit" />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export const ActionFacility = (props: any) => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [type, setType] = useState<string>("");

  const token: any = sessionStorage.getItem("token");
  const id: any = localStorage.getItem("id");
  const { action }: any = props;

  useEffect(() => {
    console.log(action);
    if (action === "edit") {
      getFacilityById(id);
    }
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    fetch(
      `http://localhost:5000/facilities${action === "edit" ? `/${id}` : ""}`,
      {
        method: action === "add" ? "POST" : "PUT",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
          "X-Heltek-Token": token,
        },
        body: JSON.stringify({
          name,
          address,
          type,
        }),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        Notification.Success({
          icon: "success",
          title: "New Facility has been added!",
        });
      })
      .catch(() => alert("Failed to add facility!"));
  };

  const getFacilityById = async (id: string) => {
    console.log("masuk sini");
    await fetch(`http://localhost:5000/facilities/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "X-Heltek-Token": token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
      })
      .catch(() => alert("Failed to get facility!"));
  };

  return (
    <Modal closeModal={props.closeModal}>
      <form className="text-sm" onSubmit={(e) => onSubmit(e)}>
        <div className="mb-4">
          <Form.Input
            label="Facility Name"
            name="name"
            placeholder="Facility Name"
            onChange={(e: any) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Form.Input
            name="address"
            placeholder="Address"
            onChange={(e: any) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="font-bold mb-2 text-gray-600">Facility Type</div>
          <div className="flex">
            <div className="mr-8">
              <Form.Radio
                name="type"
                defaultValue="hospital"
                label="Hospital"
                onChange={(e: any) => setType(e.target.value)}
              />
            </div>
            <Form.Radio
              name="type"
              defaultValue="clinic"
              label="Clinic"
              onChange={(e: any) => setType(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-10 mb-4 flex justify-end w-full">
          <Button.Primary>Submit</Button.Primary>
        </div>
      </form>
    </Modal>
  );
};

export default Facility;
