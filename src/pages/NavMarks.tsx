import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Paper, Container, Typography, Box } from '@mui/material';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const NavMarks: React.FC = () => {
  const [rows, setRows] = useState<GridRowsProp>([]);
  const [loading, setLoading] = useState(true);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: User[] = await response.json();
        const formattedRows: GridRowsProp = data.map(user => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
        }));
        setRows(formattedRows);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
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
          />
        </Paper>
      </Box>
    </Container>
  );
};

export default NavMarks;