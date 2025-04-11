import { Translation, type Translations } from "@/app/types/types";
import {
  Box,
  Collapse,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import { ChevronDown, Languages } from "lucide-react";
import { useEffect, useState } from "react";

function TranslationsTableRowCollapsable({
  translation,
  open,
}: {
  translation: Translation;
  open: boolean;
}) {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <TableContainer>
            <Table size="small" aria-label="more information">
              <TableBody>
                {translation?.tags && (
                  <TableRow>
                    <TableCell>Tags</TableCell>
                    <TableCell>{translation.tags.join(", ")}</TableCell>
                  </TableRow>
                )}
                {translation?.note && (
                  <TableRow>
                    <TableCell>Note</TableCell>
                    <TableCell>{translation.note}</TableCell>
                  </TableRow>
                )}
                {translation?.alt && (
                  <TableRow>
                    <TableCell>Alternative</TableCell>
                    <TableCell>{translation.alt}</TableCell>
                  </TableRow>
                )}
                {translation?.sense && (
                  <TableRow>
                    <TableCell>Sense</TableCell>
                    <TableCell>{translation.sense}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}

function TranslationsTableRow({ translation }: { translation: Translation }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [translation]);

  return (
    <>
      <TableRow>
        {translation?.tags || translation?.note || translation?.alt ? (
          <TableCell>
            <IconButton
              onClick={() => setOpen(!open)}
              size="small"
              aria-label="Expand to see more"
              sx={{ py: 0 }}
            >
              <ChevronDown
                style={{
                  transform: open ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.2s ease",
                }}
              />
            </IconButton>
          </TableCell>
        ) : (
          <TableCell />
        )}

        <TableCell>{translation.lang}</TableCell>
        <TableCell>{translation.word}</TableCell>
        <TableCell>{translation.roman}</TableCell>
      </TableRow>
      <TranslationsTableRowCollapsable translation={translation} open={open} />
    </>
  );
}

function TranslationsTable({ translations }: { translations: Translations }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [query, setQuery] = useState("");

  const filteredTranslations = translations.filter((translation: Translation) =>
    translation.lang.toLowerCase().includes(query.toLowerCase()),
  );

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setQuery((event.target as HTMLInputElement).value);
    setPage(0);
  };

  return (
    <Box sx={{ overflowX: "hidden", width: "100%" }}>
      <TextField
        label="Filter by Language"
        variant="filled"
        onKeyUp={handleSearch}
        size="small"
        fullWidth
      />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Language</TableCell>
              <TableCell>Translation</TableCell>
              <TableCell>Romanization</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTranslations
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((translation: Translation, index: number) => (
                <TranslationsTableRow translation={translation} key={index} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredTranslations.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => setPage(newPage)}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
      />
    </Box>
  );
}

export default function TranslationsComponent({
  translations,
}: {
  translations: Translations;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title={`${translations.length} translations available`}
        placement="top"
        arrow
      >
        <IconButton onClick={() => setOpen(true)} sx={{ mx: 0.5 }}>
          <Languages />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Translations</DialogTitle>
        <DialogContent>
          <TranslationsTable translations={translations} />
        </DialogContent>
      </Dialog>
    </>
  );
}
