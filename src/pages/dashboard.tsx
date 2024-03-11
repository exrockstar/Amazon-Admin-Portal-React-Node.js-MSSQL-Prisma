// material-ui
import { Alert, Typography, Box, Stack, Grid, TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Paper, Checkbox } from '@mui/material';
import React from 'react';

// project import
import MainCard from 'components/MainCard';
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';
import { InfoCircleFilled } from '@ant-design/icons';

function createData(
  asin: string,
  title: string,
  cost: number,
  profit: number,
  roi: number,
) {
  return { asin, title, cost, profit, roi };
}

const columnChartOptions = {
  chart: {
    type: 'bar',
    height: 430,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 8,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['1 Feb', '2 Feb', '3 Feb', '4 Feb']
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `$ ${val}`;
      }
    }
  },
  legend: {
    show: true
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        yaxis: {
          show: false
        }
      }
    }
  ]
};

const initialSeries = [
  {
    name: 'Toys',
    data: [45, 28, 30, 29]
  },
  {
    name: 'Mobile',
    data: [38, 30, 56, 36]
  }
];

export default function SamplePage () {
  
  const [options] = React.useState<ChartProps>(columnChartOptions);
  const [series] = React.useState(initialSeries);
  
  return (
    <Grid direction={'column'} container gap={4} style={{marginBottom: 30}}>
      <MainCard content={false}>
        <Box id="chart" sx={{ bgcolor: 'transparent' }}>
          <ReactApexChart options={options} series={series} type="bar" height={600} />
        </Box>
      </MainCard>
    </Grid>
  )
};

