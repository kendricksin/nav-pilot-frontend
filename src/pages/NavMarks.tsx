import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import { GridRowsProp, GridColDef, GridRowModel } from '@mui/x-data-grid';
import { Paper, Container, Typography, Box } from '@mui/material';
import axios from 'axios';

interface NavMark {
  id: number;
  Name: string;
  LatDeg: number;
  LatMn: number;
  LonDeg: number;
  LonMn: number;
}

const NavMarks: React.FC = () => {
  const [rows, setRows] = useState<GridRowsProp>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Name', headerName: 'Name', flex: 5, editable: true },
    { field: 'LatDeg', headerName: 'Lat Deg', type: 'number', flex: 1, editable: true },
    { field: 'LatMn', headerName: 'Lat Min', type: 'number', flex: 1, editable: true },
    { field: 'LonDeg', headerName: 'Lon Deg', type: 'number', flex: 1, editable: true },
    { field: 'LonMn', headerName: 'Lon Min', type: 'number', flex: 1, editable: true },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<NavMark[]>('http://localhost:5000/api/nav-marks');
      console.log('API Response:', response.data);
      
      if (!Array.isArray(response.data)) {
        throw new Error('API did not return an array');
      }

      // Ensure each row has a unique string id
      const rowsWithStringId = response.data.map(row => ({
        ...row,
        id: row.id.toString() // Convert id to string
      }));
      
      setRows(rowsWithStringId);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      setError('Failed to fetch data. Please try again later.');
    }
  };

  // const handleRowUpdate = async (newRow: GridRowModel) => {
  //   try {
  //     await axios.patch(`YOUR_API_ENDPOINT/navmarks/${newRow.id}`, newRow);
  //     setRows(rows.map((row) => (row.id === newRow.id ? newRow : row)));
  //     return newRow;
  //   } catch (error) {
  //     console.error('Error updating row:', error);
  //     throw error;
  //   }
  // };

  // const handleRowDelete = async (id: GridRowModel['id']) => {
  //   try {
  //     await axios.delete(`YOUR_API_ENDPOINT/navmarks/${id}`);
  //     setRows(rows.filter((row) => row.id !== id));
  //   } catch (error) {
  //     console.error('Error deleting row:', error);
  //     throw error;
  //   }
  // };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Navigation Marks
        </Typography>
        <Paper elevation={3} sx={{ p: 3 }}>
          <DataTable
            initialRows={rows}
            columns={columns}
            // onRowUpdate={handleRowUpdate}
            // onRowDelete={handleRowDelete}
          />
        </Paper>
      </Box>
    </Container>
  );
};

export default NavMarks;