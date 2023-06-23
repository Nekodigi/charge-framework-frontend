import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography,
  linearProgressClasses,
  useTheme,
} from "@mui/material";

export const ProgressWithLabel = (
  props: LinearProgressProps & { maximum: number; current: number }
) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={(props.current / props.maximum) * 100}
          {...props}
          sx={{
            height: 12,
            borderRadius: 8,
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 5,
              backgroundColor: theme.palette.com.green500,
            },
            [`&.${linearProgressClasses.colorPrimary}`]: {
              border: 1,
              borderColor: theme.palette.com.gray400,
              backgroundColor: "transparent",
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          color="text.secondary"
        >{`${props.current.toFixed(1)}/${props.maximum.toFixed(
          0
        )}`}</Typography>
      </Box>
    </Box>
  );
};
