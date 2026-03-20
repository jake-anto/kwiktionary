"use client";

import ErrorComponent from "@/app/components/error";
import { TermsList } from "@/app/types/types";
import { getListOfTerms } from "@/app/utils/api";
import {
  Link,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState, useRef } from "react";

export function List({
  amountTerms,
  lang,
  initialRows,
}: {
  amountTerms: number;
  lang: string;
  initialRows: TermsList;
}) {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [rows, setRows] = useState<TermsList>(initialRows);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const isFirstRender = useRef(true);

  const handlePageChange = useCallback(
    (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    },
    []
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const fetchTerms = async () => {
      setLoading(true);
      try {
        setRows(await getListOfTerms(lang, rowsPerPage, rowsPerPage * page));
        setLoading(false);
      } catch (error) {
        setError(`Error: ${error}`);
        // Add noindex to the page
        if (!document.querySelector("meta[name='robots'][content='noindex']")) {
          const meta = document.createElement("meta");
          meta.name = "robots";
          meta.content = "noindex";
          document.head.appendChild(meta);
        }
        // Update title for the error
        document.title = "Error - Kwiktionary";
      }
    };
    fetchTerms();
  }, [lang, rowsPerPage, page]);

  return (
    <>
      <Paper sx={{ overflow: "hidden", borderRadius: 5 }}>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "20%" }}>#</TableCell>
                <TableCell>Term</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading
                ? Array.from({ length: rowsPerPage }).map((_, i) => (
                    <TableRow key={`loading-${i}`}>
                      <TableCell>{rowsPerPage * page + i + 1}</TableCell>
                      <TableCell>
                        <Typography variant="body2" color="text.secondary">
                          <Skeleton sx={{ width: "50%" }} />
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))
                : rows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{rowsPerPage * page + (index + 1)}</TableCell>
                      <TableCell>
                        <Link href={`/${lang}/${row}`}>{row}</Link>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={amountTerms}
                  rowsPerPageOptions={[10, 25, 50]}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  disabled={loading}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleRowsPerPageChange}
                  sx={{
                    "& .MuiTablePagination-toolbar": {
                      overflowX: "auto",
                    },
                  }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
      {error && <ErrorComponent error={error} setError={setError} />}
    </>
  );
}
