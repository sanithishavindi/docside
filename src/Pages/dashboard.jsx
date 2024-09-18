import { Grid } from '@mui/material';
import React from 'react';
import SummaryGrid from '../components/common/SummaryGrid';
import ToursData from '../components/common/ToursData';
import Animate from '../components/common/Antimate';
import UserBooking from '../components/common/UserBooking';
import Totallncome from '../components/common/Totallncome';
import BookedData from '../components/common/BookedData';
import StatisticalData from '../components/common/StatisticalData';

const dashboard = () => {
  return (
    <Grid container spacing={3}>
    <Grid item xs={12}>
      <SummaryGrid />
    </Grid>
    <Grid item xs={12} lg={4}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Animate delay={1.5}>
            <ToursData />
          </Animate>
        </Grid>

        <Grid item xs={12}>
          <Animate delay={1}>
            <UserBooking />
          </Animate>
        </Grid>

        </Grid>
        </Grid>

        <Grid item xs={12} lg={8}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Animate type="fade" delay={1.5} sx={{ height: "100%" }}>
              <Totallncome />
            </Animate>
          </Grid>
          <Grid item xs={12} md={6}>
            <Animate type="fade" delay={2} sx={{ height: "100%" }}>
              <BookedData />
            </Animate>
          </Grid>
          <Grid item xs={12}>
            <Animate delay={2.5}>
              <StatisticalData />
            </Animate>
          </Grid>
          </Grid>
          </Grid>
        </Grid>
  )
}

export default dashboard
