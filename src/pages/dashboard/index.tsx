import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Sidebar from "../../components/Layout/Sidebar";

interface Props extends RouteComponentProps {}

const Dashboard = ({ history }: Props) => {
  const [dummy, setDummy] = useState(["booking", "facility", "user"]);

  const CardInfo = (props: any) => (
    <div className="border-2 border-gray-500 rounded w-full p-4 h-40">
      <h4 className="font-bold text-xl mb-4 text-gray-500 capitalize">
        Total {props.title} :
      </h4>
      <span className="font-bold text-6xl text-red-500">{props.total}</span>
    </div>
  );

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p-8 w-full">
          <h1 className="font-bold text-gray-400">Dashboard</h1>
          <div className="flex mt-12">
            {dummy.map((data, idx) => (
              <div key={idx} className="w-1/3 p-2">
                <CardInfo title={data} total="100" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
