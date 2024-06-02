import ChartPieIcon from "@heroicons/react/24/solid/ChartPieIcon"
import CogIcon from "@heroicons/react/24/solid/CogIcon"
import { SvgIcon } from '@mui/material';

export const items = [
  {
    href: '/',
    icon: (
      <SvgIcon>
        <ChartPieIcon />
      </SvgIcon>
    ),
    label: 'Home'
  },
  {
    href: '/settings',
    icon: (
      <SvgIcon>
        <CogIcon />
      </SvgIcon>
    ),
    label: 'Settings'
  },
  
];
