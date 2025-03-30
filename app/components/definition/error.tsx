import { Alert, Snackbar } from "@mui/material";
import { CircleAlert } from "lucide-react";

export default function Error({
  error,
  setError,
}: {
  error: string;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      onClose={() => {
        setError(null);
      }}
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
