import { Alert, Snackbar, SnackbarProps } from "@mui/material";
import { CircleAlert } from "lucide-react";
import { useCallback } from "react";

export default function Error({
  error,
  setError,
  props,
}: {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  props?: SnackbarProps;
}) {
  const handleClose = useCallback(() => {
    setError(null);
  }, [setError]);

  return (
    <Snackbar open autoHideDuration={6000} onClose={handleClose} {...props}>
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
