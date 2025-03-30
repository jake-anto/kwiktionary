import { Collapse, Paper, Typography } from "@mui/material";

export default function Settings({ open }: { open: boolean }) {
  return (
    <Collapse
      in={open}
      timeout="auto"
      unmountOnExit
      sx={{
        position: "absolute",
        width: "100%",
        top: "100%",
        maxWidth: 396,
        backdropFilter: "blur(10px)",
      }}
    >
      <Paper sx={{ borderRadius: 5 }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          Settings
        </Typography>
        <Typography variant="body2" sx={{ p: 2 }}>
          Under construction
        </Typography>
      </Paper>
    </Collapse>
  );
}
