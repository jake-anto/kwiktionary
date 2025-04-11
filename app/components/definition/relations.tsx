import { Relation, type Relations } from "@/app/types/types";
import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
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
import { useCallback, useState, Fragment } from "react";

function RelationsTable({ relations }: { relations: Relations }) {
  return (
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
            <Fragment key={index}>
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
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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

  const tooltipText = `See all ${title.toLowerCase()}`;

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

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
        <Tooltip title={tooltipText} placement="top">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-label={tooltipText}
          >
            <ChevronRight />
          </IconButton>
        </Tooltip>
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
              component={Link}
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
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <RelationsTable relations={relations} />
        </DialogContent>
      </Dialog>
    </>
  );
}
