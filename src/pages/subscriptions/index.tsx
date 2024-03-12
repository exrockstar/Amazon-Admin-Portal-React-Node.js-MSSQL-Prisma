// material-ui
import { IconButton, Tooltip, Box, Stack, Grid, TableBody, TableCell, TableContainer, Tab, Paper } from '@mui/material';
import { Button, Input, Space, Table, GetRef, TableColumnsType, TableColumnType, GetProp, TableProps, Tag, Typography } from 'antd';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FilterValue, SorterResult } from 'antd/lib/table/interface';

// project import
import MainCard from 'components/MainCard';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

type TablePaginationConfig = Exclude<GetProp<TableProps, 'pagination'>, boolean>;

interface SubscriptionType {
  SubscriptionId: number,
  UniqueID: string,
  EmailId: string,
  PlanId: number,
  BillingId: number,
  Note: string,
  CapitalInventory: number,
  InsertedDate: Date,
  InsertedBy: string,
  UpdatedDate: Date,
  UpdatedBy: string,
  Status: string
};

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Parameters<GetProp<TableProps, 'onChange'>>[1];
}

interface FilterType {
  page: number,
  pageSize: number,
  sortBy: string,
  sortOrder: string
}


export default function SamplePage () {
  const navigate = useNavigate();
  const [tab, setTab] = useState('1');
  const [subscriptionsData, setSubscriptionsData] = useState<SubscriptionType[]>([]);
  const [total, setTotal] = useState(0);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 25,
    },
  });
  const [loading, setLoading] = useState(false);
  const [filterOption, setFilterOption] = useState<FilterType>({
    page: 1,
    pageSize: 25,
    sortBy: 'SubscriptionId',
    sortOrder: 'asc'
  });

  const columns: TableColumnsType<SubscriptionType> = [
    {
      title: 'Subscription Id',
      dataIndex: 'SubscriptionId',
      key: 'SubscriptionId',
      align: 'center',
      width: '8%',
      sorter: (a, b) => {return String(a).localeCompare(String(b))},
      // ...getColumnSearchProps('UniqueID'),
    },
    {
      title: 'Unique Id',
      dataIndex: 'UniqueID',
      key: 'UniqueID',
      align: 'center',
      width: '15%',
      sorter: (a, b) => {return String(a).localeCompare(String(b))},
      // ...getColumnSearchProps('UniqueID'),
    },
    {
      title: 'EmailId',
      dataIndex: 'EmailId',
      key: 'EmailId',
      align: 'center',
      width: '15%',
      sorter: (a, b) => {return String(a).localeCompare(String(b))},
      // ...getColumnSearchProps('age'),
    },
    {
      title: 'Stores',
      dataIndex: 'Stores',
      key: 'Stores',
      align: 'center',
      width: '10%',
      render: () => 'xxxxxxxx'
    },
    {
      title: 'No of Store',
      dataIndex: 'Stores',
      key: 'Stores',
      align: 'center',
      width: '10%',
      render: () => 2
    },
    {
      title: 'Note',
      dataIndex: 'Note',
      key: 'Note',
      align: 'center',
      width: '15%',
      render: (note) => <Typography.Text ellipsis={true} style={{width: 150}}>{note}</Typography.Text>
    },
    {
      title: 'Capital for Inventory',
      dataIndex: 'CapitalInventory',
      key: 'CapitalInventory',
      align: 'center',
      width: '10%',
      sorter: (a, b) => {return Number(a) - Number(b)},
    },
    {
      title: 'Subscription Status',
      dataIndex: 'Status',
      key: 'Stauts',
      align: 'center',
      width: '10%',
      render: (val) => val == 1 ? <Tag color='blue'>Active</Tag> : <Tag color='red'>Pause</Tag>
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      align: 'center',
      render: () => <></>
      // ...getColumnSearchProps('address'),
      // sortDirections: ['descend', 'ascend'],
    },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5001/api/subscriptions', { params: {filterOption} })
      .then((res) => {
        setLoading(false);
        setTotal(res.data.total);
        setSubscriptionsData(res.data.data);
      });
  }, [filterOption]);

  const tabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const handleTableChange: TableProps['onChange'] = (pagination, filters, sorter) => {

    const isSorterArray = Array.isArray(sorter);
    const effectiveSorter: SorterResult<any> = isSorterArray ? sorter[0] : sorter;

    setTableParams({
      pagination,
      filters,
      ...effectiveSorter,
    });

    setFilterOption({
      page: Number(pagination.current),
      pageSize: Number(pagination.pageSize),
      sortBy: effectiveSorter.field ? String(effectiveSorter.field) : filterOption.sortBy,
      sortOrder: effectiveSorter.order ? ( effectiveSorter.order == "ascend" ? 'asc' : 'desc' ) : filterOption.sortOrder
    })

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setSubscriptionsData([]);
    }
  };

  return (
    <Grid direction={'column'} container gap={4} style={{marginBottom: 30}}>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography.Title style={{fontSize: 25}}><b>Subscriptions</b></Typography.Title>
        <Button type='primary' onClick={() => navigate('/subscriptions/add')}>Add Subscription</Button>
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
                  <Table 
                    rowKey={(record) => record.UniqueID} 
                    columns={columns} 
                    dataSource={subscriptionsData} 
                    onChange={handleTableChange}
                    loading={loading}
                    pagination={{
                      pageSizeOptions: [10, 25, 50, 100],
                      defaultPageSize: 25,
                      ...tableParams.pagination,
                      total: total,
                      showTotal:  (total) => { return `${(filterOption.page-1) * filterOption.pageSize + 1}-${filterOption.page * filterOption.pageSize} of ${total} items` }
                    }} 
                  />
                </Box>
                </TabPanel>
                <TabPanel value="2"></TabPanel>
            </TabContext>
        </Box>
    </MainCard>
      

    </Grid>
  )
};

