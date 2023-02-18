import "./orderList.css";
import {DataGrid} from "@material-ui/data-grid";
import {Link} from "react-router-dom";
import {useState} from "react";
import React from "react";
import {useEffect} from "react";
import * as api from "../../api/index";

export default function OrederList() {
  const [data, setDataOrders] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const responseOrders = await api.fetchAllOrders();
        setDataOrders(responseOrders.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    makeRequest();
  }, []);

  const handleDelete = async id => {
    const res = await api.deleteOrderById(id);
    setDataOrders(data.filter(item => item.id !== res.data._id));
  };

  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800">Loading</h1>;

  const columns = [
    {field: "id", headerName: "ID", width: 90},
    {
      field: "Username",
      headerName: "Username Order",
      width: 200,
      renderCell: params => {
        return <div className="orderListItem">{params.row.Username}</div>;
      },
    },
    {
      field: "products",
      headerName: "Products",
      width: 200,
      renderCell: params => {
        return (
          <div className="orderListItem">{params.row.products.length}</div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: params => {
        //console.log(params.row);
        return (
          <div className="containerActionsBtns">
            <Link to={"/order/" + params.row._id}>
              <button className="orderListEdit">Accept</button>
            </Link>
            <button
              className="orderListDelete"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="orderList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  );
}
