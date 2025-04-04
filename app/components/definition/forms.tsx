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
  Typography,
} from "@mui/material";
import { ChevronRight } from "lucide-react";
import React from "react";

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
            <React.Fragment key={index}>
              <TableRow>
                <TableCell>
                  <strong>{form.form}</strong>
                </TableCell>
                <TableCell>
                  {form.tags.map((tag: string, index: number) => (
                    <React.Fragment key={index}>
                      <Box component="span" sx={{ whiteSpace: "nowrap" }}>
                        {tag}
                      </Box>
                      {form.tags.length - 1 ? ", " : ""}
                    </React.Fragment>
                  ))}
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function Forms({ forms }: { forms: Forms }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Box sx={{ display: "flex", whiteSpace: "nowrap", alignItems: "center" }}>
        <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
          {forms.map((form: Form, index: number) => (
            <React.Fragment key={index}>
              <strong>
                {form.tags[0]}
                {": "}
              </strong>
              {form.form}
              {index < forms.length - 1 ? ", " : ""}
            </React.Fragment>
          ))}
        </Typography>
        <IconButton
          size="small"
          sx={{ ml: 1 }}
          onClick={() => setOpen(true)}
          aria-label="See all forms"
        >
          <ChevronRight />
        </IconButton>
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Forms</DialogTitle>
        <DialogContent>
          <FormsTable forms={forms} />
        </DialogContent>
      </Dialog>
    </>
  );
}
