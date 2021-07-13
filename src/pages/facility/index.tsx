import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/Layout/Sidebar";
import Table from "../../components/Table";
import * as Button from "../../components/Button";
import * as Form from "../../components/Form";
import { Modal } from "../../components/Modal";
import * as Notification from "../../components/Notification";
import * as facilityActions from "../../store/facility/actions";
import {
  createFacility,
  getAllFacilities,
  getFacilityById,
  updateFacility,
  deleteFacility,
} from "../api/facility";

interface Props extends RouteComponentProps {}

const Facility = ({ history }: Props) => {
  const [facilities, setFacilities] = useState<any[]>([]);
  const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
  const [pages, setPages] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const token: any = sessionStorage.getItem("token");
  const [refresh, setRefresh] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const dispatch: any = useDispatch();
  const facility = useSelector((state: any) => state.facility);

  useEffect(() => {
    onGetFacilities();
  }, [refresh]); // eslint-disable-line react-hooks/exhaustive-deps

  const onGetFacilities = () => {
    getAllFacilities({
      token: token,
      result: (res: any) => {
        setCurrentPage(res.currentPage);
        setTotalPage(res.totalPage);
        setFacilities(res.data);
        dispatch(facilityActions.getFacilities(res.data));
      },
      limit: limit,
      page: pages,
    });
  };

  const onDeleteFacility = (id: string) => {
    Notification.Confirmation({
      onDelete: () => {
        deleteFacility({
          id: id,
          token: token,
          result: () => {
            onGetFacilities();
            Notification.Success({
              icon: "success",
              title: "Facility has been deleted!",
            });
          },
        });
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

  const onChangeLimit = (e: any) => {
    setLimit(e.target.value);
    setRefresh(refresh + 1);
  };

  const onPageChange = (type: string) => {
    if (type === "prev" && pages > 1) {
      setPages(pages - 1);
      setRefresh(refresh + 1);
    } else if (pages < totalPage) {
      setPages(pages + 1);
      setRefresh(refresh + 1);
    }
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p-8 w-full">
          <h1 className="font-bold text-gray-400 mb-8">Dashboard / Facility</h1>
          <div className="flex justify-between items-center mb-8">
            <div className="text-gray-400">
              <span className="text-sm font-bold mr-4">Show</span>
              <select
                name="limit"
                id="limit"
                onChange={(e) => onChangeLimit(e)}
                className="border-2 px-2 py-1 border-gray-400 outline-none"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
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
                        {(currentPage - 1) * limit + idx + 1}
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
                            onClick={() => onDeleteFacility(data.id)}
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

          {/* Pagination */}
          <div className="flex mt-6 text-gray-500 text-sm w-full items-center justify-between">
            <div>
              Page {currentPage} of {totalPage}
            </div>
            <div className="flex">
              <div
                className="px-4 py-1 bg-red-500 text-white font-bold border border-white cursor-pointer hover:bg-red-600"
                onClick={() => onPageChange("prev")}
              >
                Prev
              </div>
              <div
                className="px-4 py-1 bg-red-500 text-white font-bold border border-white cursor-pointer hover:bg-red-600"
                onClick={() => onPageChange("next")}
              >
                Next
              </div>
            </div>
          </div>
        </main>
        {showModalAdd ? (
          <ActionFacility
            closeModal={showModalFacility}
            action="add"
            onRefresh={() => {
              onGetFacilities();
              setShowModalAdd(false);
            }}
          />
        ) : (
          ""
        )}
        {showModalEdit ? (
          <ActionFacility
            closeModal={showEditFacility}
            action="edit"
            onRefresh={() => {
              onGetFacilities();
              setShowModalEdit(false);
            }}
          />
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
    if (action === "edit") {
      getFacility(id);
    }
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (action === "edit") {
      updateFacility({
        id: id,
        token: token,
        body: {
          name: name,
          address: address,
          type: type,
        },
        result: () => {
          props.onRefresh();
          Notification.Success({
            icon: "success",
            title: "Facility has been updated!",
          });
        },
      });
    } else {
      createFacility({
        id: id,
        token: token,
        body: {
          name: name,
          address: address,
          type: type,
        },
        result: () => {
          props.onRefresh();
          Notification.Success({
            icon: "success",
            title: "Facility has been created!",
          });
        },
      });
    }
  };

  const getFacility = async (id: string) => {
    getFacilityById({
      id: id,
      token: token,
      result: (res: any) => {
        setName(res.facility.name);
        setAddress(res.facility.address);
      },
    });
  };

  return (
    <Modal closeModal={props.closeModal}>
      <form className="text-sm" onSubmit={(e) => onSubmit(e)}>
        <div className="mb-4">
          <Form.Input
            label="Facility Name"
            name="name"
            placeholder="Facility Name"
            defaultValue={name && name}
            onChange={(e: any) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Form.Input
            name="address"
            placeholder="Address"
            defaultValue={address && address}
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
