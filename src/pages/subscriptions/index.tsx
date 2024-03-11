// material-ui
import { IconButton, Tooltip, Typography, Box, Stack, Grid, TableBody, TableCell, TableContainer, Tab, TableHead, TableRow, Table, 
  Paper, Button } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// project import
import MainCard from 'components/MainCard';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

interface Subscription {
  subscriptionId: string,
  subscriptionTitle: string
};

export default function SamplePage () {
  
  const [tab, setTab] = useState('1');
  const [subscriptionsData, setSubscriptionsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://100.25.25.75:7000/Subscription')
      .then((res) => {
        let data = res.data.splice(0, 50);
        setSubscriptionsData(data);
      });
  }, []);

  const tabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Grid direction={'column'} container gap={4} style={{marginBottom: 30}}>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={20}><b>Subscriptions</b></Typography>
        <Button variant="contained" color='primary' onClick={() => navigate('/subscriptions/add')}>Add Subscription</Button>
      </Stack>
      <MainCard content={false} style={{padding: 10}}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={tabChange} aria-label="lab API tabs example">
                    <Tab label="Active" value="1" />
                    <Tab label="Blocked" value="2" />
                </TabList>
                </Box>
                <TabPanel value="1">
                <Box>
                  <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="Product Table">
                          <TableHead>
                          <TableRow>
                              <TableCell align="center">Subscription Id</TableCell>
                              <TableCell align="center">Name</TableCell>
                              <TableCell align="center">Store</TableCell>
                              <TableCell align="center">Email Id</TableCell>
                              <TableCell align="center">Capital For Inventory</TableCell>
                              <TableCell align="center">Action</TableCell>
                          </TableRow>
                          </TableHead>
                          <TableBody>
                          {subscriptionsData.map((subscription : Subscription) => (
                              <TableRow
                              key={subscription.subscriptionId}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                              <TableCell scope="row" align="center">{subscription.subscriptionId}</TableCell>
                              <TableCell align="center"></TableCell>
                              <TableCell align="center"></TableCell>
                              <TableCell align="center">{subscription.subscriptionTitle}</TableCell>
                              <TableCell align="center"></TableCell>
                              <TableCell style={{justifyContent:'center', display: 'flex'}}>
                                  {
                                  <Stack direction="row">
                                      <IconButton color="success" aria-label="Edit">
                                      <Tooltip title="Edit">
                                          <EditFilled />
                                      </Tooltip>
                                      </IconButton>
                                      <IconButton color="error" aria-label="Delete">
                                      <Tooltip title="Delete">
                                          <DeleteFilled />
                                      </Tooltip>
                                      </IconButton>
                                  </Stack>
                                  }
                              </TableCell>
                              </TableRow>
                          ))}
                          </TableBody>
                      </Table>
                  </TableContainer>
                </Box>
                </TabPanel>
                <TabPanel value="2"></TabPanel>
            </TabContext>
        </Box>
    </MainCard>
      

    </Grid>
  )
};

