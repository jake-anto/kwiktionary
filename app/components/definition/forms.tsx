import { Form, type Forms } from "@/app/types/types";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { ChevronRight } from "lucide-react";
import { useCallback, Fragment, useState } from "react";

function FormsTable({ forms }: { forms: Forms }) {
  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Form</TableCell>
            <TableCell>Tags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forms.map((form: Form, index: number) => (
            <Fragment key={index}>
              <TableRow>
                <TableCell>
                  <strong>{form.form}</strong>
                </TableCell>
                <TableCell>
                  {form.tags.map((tag: string, index: number) => (
                    <Fragment key={index}>
                      <Box component="span" sx={{ whiteSpace: "nowrap" }}>
                        {tag}
                      </Box>
                      {form.tags.length - 1 ? ", " : ""}
                    </Fragment>
                  ))}
                </TableCell>
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function Forms({ forms }: { forms: Forms }) {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", whiteSpace: "nowrap", alignItems: "center" }}>
        <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
          {forms.map((form: Form, index: number) => (
            <Fragment key={index}>
              <strong>
                {form.tags[0]}
                {": "}
              </strong>
              {form.form}
              {index < forms.length - 1 ? ", " : ""}
            </Fragment>
          ))}
        </Typography>
        <Tooltip title="See all forms">
          <IconButton
            size="small"
            sx={{ ml: 1 }}
            onClick={handleClick}
            aria-label="See all forms"
          >
            <ChevronRight />
          </IconButton>
        </Tooltip>
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Forms</DialogTitle>
        <DialogContent>
          <FormsTable forms={forms} />
        </DialogContent>
      </Dialog>
    </>
  );
}
