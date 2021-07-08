import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();
  const token: any = sessionStorage.getItem("token");

  const onClickLogout = (e: any) => {
    e.preventDefault();

    fetch("http://localhost:5000/auth/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "X-Heltek-Token": token,
      },
    })
      .then(() => {
        sessionStorage.clear();
        history.push("/auth/login");
      })
      .catch((err) => console.log(err));
  };

  const Submenu = (props: any) => (
    <Link
      to={props.route}
      className="py-3 px-4 hover:bg-white mb-2 font-bold text-white hover:text-black cursor-pointer"
    >
      {props.page}
    </Link>
  );

  return (
    <div
      className="sidebar min-h-100 bg-red-500 px-4 py-8"
      style={{ width: 300 }}
    >
      <div className="mb-8">
        <img
          src="/logo192.png"
          alt="app-logo"
          className="mx-auto w-20 h-20 bg-white rounded-full p-2"
        />
      </div>
      <div className="flex flex-col">
        <Submenu page="Dashboard" route="dashboard" />
        <Submenu page="Facility" route="facility" />
        <Submenu page="Booking" route="booking" />
        <Submenu page="User" route="user" />
        <Submenu page="Profile" route="profile" />
        <div
          className="py-3 px-4 hover:bg-white mb-2 font-bold text-white hover:text-black cursor-pointer"
          onClick={onClickLogout}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
