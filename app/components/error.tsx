import { Alert, Snackbar, SnackbarProps } from "@mui/material";
import { CircleAlert } from "lucide-react";

export default function Error({
  error,
  setError,
  props,
}: {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  props?: SnackbarProps;
}) {
  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      onClose={() => {
        setError(null);
      }}
      {...props}
    >
      <Alert
        severity="error"
        iconMapping={{
          error: <CircleAlert />,
        }}
      >
        <strong> Error: </strong>
        <span>{error}</span>
      </Alert>
    </Snackbar>
  );
}
