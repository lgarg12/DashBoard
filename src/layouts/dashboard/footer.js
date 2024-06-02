import { Box, Container, Link, Typography } from '@mui/material';

const items = [
  {
    label: 'About Us',
    href: '#'
  },
  {
    label: 'Terms',
    href: '#'
  }
];

export const Footer = () => (
  <div>
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        py: 3,
        '& a': {
          mt: {
            xs: 1,
            sm: 0
          },
          '&:not(:last-child)': {
            mr: {
              xs: 0,
              sm: 5
            }
          }
        }
      }}
    >
      <Typography
        color="text.secondary"
        variant="caption"
      >
        Made by Lakshay
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      {items.map((link) => (
        <Link
          color="text.secondary"
          href={link.href}
          key={link.label}
          target="_blank"
          underline="none"
          variant="body2"
        >
          {link.label}
        </Link>
      ))}
    </Container>
  </div>
);
