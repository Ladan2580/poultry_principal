import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyDataGrid = () => {
  // Sample columns data
  const columns = [
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'id', headerName: 'user_id', width: 300 },
    { field: 'message', headerName: 'Message', width: 500 },
    { field: 'data_name', headerName: 'dataName', width:150 },
    { field: 'bundle', headerName: 'dataBundle', width:250 },
    { field: 'phone', headerName: 'phoneNumber', width:200 },
    { field: 'amount', headerName: 'Price', width:150 },
    { field: 'status', headerName: 'Status', width:150 },
    { field: 'date', headerName: 'Date', width:150 },
    // Add more columns as needed
  ];
  
  const [rows, setData]=useState([])

  const navigator = useNavigate();
  //check if there is session

  useEffect(() => {

    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/admin_session`, { withCredentials: true })
      .then(response => {
        const mydata = response.data
        if (!mydata.session) {
          navigator("/")
        }

      })

  }, [])

  
  useEffect(() => {

    // Fetch form data from MongoDB
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/getrequest/dataHistory`)
      .then(response => {
        setData(response.data)
        //console.log(response.data)
       // console.log(response.data);
      })
      .catch(error => console.error(error))
  },[])


  return (
    <div style={{ height: 400, width: '100%' }}>
      <div className='text-center mt-6 mb-4 text-2xl'>Data History</div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5,10,25]}
        pagination
        initialState={{
          pagination:{
            paginationModel:{
              pageSize:5,
            }
          }
        }}
      
      />
    </div>
  );
};

export default MyDataGrid;
