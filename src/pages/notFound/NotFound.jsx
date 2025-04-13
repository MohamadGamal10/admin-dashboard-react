import { Box, Typography, useTheme } from "@mui/material";

export default function NotFound() {
  const theme = useTheme();
  return (
    <Box>
      <Typography align="center" color={theme.palette.error.main} variant="h5">
        There is no design yet
        <br />
        <br />
        Please try again later..
      </Typography>
    </Box>
  );
}
