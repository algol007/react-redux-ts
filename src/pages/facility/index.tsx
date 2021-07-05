import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Sidebar from "../../components/Layout/Sidebar";
import Table from "../../components/Table";

interface Props extends RouteComponentProps {}

const Facility = ({ history }: Props) => {
  const [facilities, setFacilities] = useState<any[]>([]);

  useEffect(() => {
    getBookingData("valid_example_token");
  }, []);

  const getBookingData = (token: string) => {
    fetch("http://localhost:5000/facilities", {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "X-Heltek-Token": token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setFacilities(json.data);
      })
      .catch((err) => alert("Failed to get data booking!"));
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p-8 w-full">
          <h1 className="font-bold text-gray-400">Dashboard / Facility</h1>
          <div className="flex mt-12">
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
                    <tr>
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
      </div>
    </>
  );
};

export default Facility;
