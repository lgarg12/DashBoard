import { Helmet } from 'react-helmet-async';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  FormHelperText,
  Stack,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';

const companySizeOptions = ['1-10', '11-30', '31-50', '50+'];

const initialValues = {
  email: 'garg.target@gmail.com',
  name: 'Lakshay Garg',
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: '',
  submit: null
};

const validationSchema = Yup.object({
  companyName: Yup
    .string()
    .max(255)
    .required('Company name is required'),
  companySize: Yup
    .string()
    .max(255)
    .oneOf(companySizeOptions)
    .required('Company size is required'),
  email: Yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  name: Yup
    .string()
    .max(255)
    .required('Name is required'),
  jobTitle: Yup
    .string()
    .max(255)
    .required('Job title is required')
});

const Page = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers) => {
      helpers.setStatus({ success: true });
      helpers.setSubmitting(false);
    }
  });

  return (
    <>
      <Helmet>
        <title>
          Settings | DashBoard
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
            <div>
              <Typography variant="h4">
                Settings
              </Typography>
            </div>
            <div>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  xs={12}
                  md={4}
                >
                  <Typography variant="h6">
                    Account
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={8}
                >
                  <Card sx={{ p: 3 }}>
                    <form onSubmit={formik.handleSubmit}>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                        sx={{ mb: 3 }}
                      >
                        <Avatar
                          src="/assets/avatars/LakshayProfilePic.png"
                          sx={{
                            height: 64,
                            width: 64
                          }}
                        />
                        <div>
                          <Button
                            color="primary"
                            size="small"
                            type="button"
                            variant="outlined"
                          >
                            Change
                          </Button>
                          <div>
                            <Typography
                              color="text.secondary"
                              variant="caption"
                            >
                              Recommended dimensions: 200x200, maximum file size: 5MB
                            </Typography>
                          </div>
                        </div>
                      </Stack>
                      <Box sx={{ maxWidth: 420 }}>
                        <Stack spacing={3}>
                          <TextField
                            error={Boolean(formik.touched.name && formik.errors.name)}
                            fullWidth
                            helperText={formik.touched.name && formik.errors.name}
                            label="Full Name"
                            name="name"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                          />
                          <TextField
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            fullWidth
                            helperText={formik.touched.email && formik.errors.email}
                            label="Email address"
                            name="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="email"
                            value={formik.values.email}
                          />
                          <TextField
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            fullWidth
                            helperText={formik.touched.email && formik.errors.email}
                            label="Old Password"
                            name="OldPassword"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="password"
                            value={formik.values.oldPassword}
                          />
                          <TextField
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            fullWidth
                            helperText={formik.touched.email && formik.errors.email}
                            label="New Password"
                            name="NewPassword"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="password"
                            value={formik.values.newPassword}
                          />
                          <TextField
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            fullWidth
                            helperText={formik.touched.email && formik.errors.email}
                            label="Confirm New Password"
                            name="confirmNewPassword"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="password"
                            value={formik.values.confirmNewPassword}
                          />

                        </Stack>
                        {formik.errors.submit && (
                          <FormHelperText
                            error
                            sx={{ mt: 3 }}
                          >
                            {formik.errors.submit}
                          </FormHelperText>
                        )}
                        <Box sx={{ mt: 3 }}>
                          <Button
                            color="primary"
                            size="large"
                            type="submit"
                            variant="contained"
                          >
                            Save settings
                          </Button>
                        </Box>
                      </Box>
                    </form>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Page;
