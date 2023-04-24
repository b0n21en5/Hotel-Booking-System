import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { useLocation } from "react-router-dom";

const List = ({ columns, url }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable columns={columns} url={path} />
      </div>
    </div>
  );
};

export default List;
