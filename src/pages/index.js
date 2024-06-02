import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import TimeLineForAlerts from 'src/Graphs/TimeLineForAlerts';
import PieCharts from 'src/Graphs/PieCharts';
import ProtocolStack from 'src/Graphs/protocolStack';
import Dest_IpAddresses from 'src/Graphs/Dest_IpAddresses';



const Page = () => (
  <>
    <Helmet>
      <title>
        Reports | DashBoard
      </title>
    </Helmet>
    <Box
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Typography variant='h4'>
            Reports
          </Typography>
          <div>
            <TimeLineForAlerts/>
            <Dest_IpAddresses/>
            <div>
              <PieCharts/>
            </div>
            <ProtocolStack/>
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);

export default Page;
