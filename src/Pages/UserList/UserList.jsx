import React, { useState } from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import {userRows} from "../../dummyData";
import {DeleteOutlineOutlined} from '@material-ui/icons'
import {Link} from 'react-router-dom'


const UserList = () => {

    const [data,setData] = useState(userRows);

    const handleDelete=(id)=>{
        setData(data.filter((item)=> item.id !== id));
    }

  const columns = [
    { field: "id", headerName: "𝐈𝐃", width: 90 },
    { field: "user", headerName: "𝐔𝐬𝐞𝐫", width: 200, 
        renderCell:(params)=>{
            return(
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar}
                      alt="" />
                      {params.row.user}
                </div>
            )
        }
    },
    { field: "email", headerName: "𝐄𝐦𝐚𝐢𝐥", width: 200 },
    {
      field: "status",
      headerName: "𝐒𝐭𝐚𝐭𝐮𝐬",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "𝐓𝐫𝐚𝐧𝐬𝐚𝐜𝐭𝐢𝐨𝐧𝐬",
     
      width: 160,
    },
    {
        feild:"action",
        headerName:"𝐀𝐜𝐭𝐢𝐨𝐧",
        width:150,
        renderCell:(params)=>{
            return(
                <>
                <Link to={"/user/"+params.row.id}>
                <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutlineOutlined onClick={()=>handleDelete(params.row.id)} className="Delete" />
                </>
            )
        }
    }
  ];


  return (
    <div className="UserList">
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid className="Grid"
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default UserList;
