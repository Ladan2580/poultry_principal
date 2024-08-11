import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyDataGrid = () => {
  // Sample columns data
  const columns = [
    { field: 'id', headerName: 'user_id', width: 300 },
    { field: 'message', headerName: 'Message', width: 600 },
    { field: 'disco_name', headerName: 'billerName', width: 150 },
    { field: 'meter_type', headerName: 'meterType', width: 200 },
    { field: 'meter_number', headerName: 'meterNumber', width: 200 },
    { field: 'customer_name', headerName: 'customerName', width: 150 },
    { field: 'amount', headerName: 'Price', width:150 },
    { field: 'purchase_code', headerName: 'PurchaseCode', width:150 },
    { field: 'status', headerName: 'Status', width:150 },
    { field: 'date', headerName: 'Date', width:150 },
    // Add more columns as needed
  ];

  const navigator = useNavigate();
  //check if there is session

  useEffect(() => {

    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/getrequestuser/user_session`, { withCredentials: true })
      .then(response => {
        const mydata = response.data
        if (!mydata.session) {
          navigator("/")
        }

      })

  }, [])

  

  const [rows, setData]=useState([])
  
  useEffect(() => {

    // Fetch form data from MongoDB
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/getrequestuser/billHistory`,{withCredentials:true})
      .then(response => {
        setData(response.data)
        //console.log(response.data)
       // console.log(response.data);
      })
      .catch(error => console.error(error))
  },[])

  // Sample rows data

  return (
    <div style={{ height: 400, width: '100%' }}>
      <div className='text-center mt-6 mb-4 text-2xl'>Electricity Bill History</div>
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
