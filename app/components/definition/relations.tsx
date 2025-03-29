import { Relation, type Relations } from "@/app/types/types";
import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

function RelationsTable({ relations }: { relations: Relations }) {
  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Word</TableCell>
              <TableCell>Tags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {relations.map((relation: Relation, index: number) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell>
                    <Link href={`/en/${relation.word}`}>{relation.word}</Link>
                  </TableCell>
                  <TableCell>
                    {relation?.tags &&
                      relation.tags.map((tag: string, index: number) => (
                        <>
                          <Chip key={index} label={tag} />{" "}
                        </>
                      ))}
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default function Relations({
  relations,
  title,
}: {
  relations: Relations;
  title: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          my: 0.5,
        }}
      >
        <IconButton onClick={() => setOpen(true)} size="small">
          <ChevronRight />
        </IconButton>
        <Typography
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "100%",
            maskImage: "linear-gradient(to right, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 85%, transparent 100%)",
          }}
        >
          <strong>
            {title}
            {": "}
          </strong>
          {relations.slice(0, 10).map((relation: Relation, index: number) => (
            <Chip
              component="a"
              href={`/en/${relation.word}`}
              key={index}
              label={relation.word}
              clickable
              variant="outlined"
              sx={{ m: 0.5 }}
            />
          ))}
        </Typography>
      </Box>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm">
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <RelationsTable relations={relations} />
        </DialogContent>
      </Dialog>
    </>
  );
}
