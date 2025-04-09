"use client";

import Error from "@/app/components/error";
import { TermsList } from "@/app/types/types";
import { getListOfTerms, getStats } from "@/app/utils/api";
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
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

function List({
  amountTerms,
  lang,
  setError,
}: {
  amountTerms: number;
  lang: string;
  setError: Dispatch<SetStateAction<string | null>>;
}) {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [rows, setRows] = useState<TermsList>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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
        document.title = `Error - Kwiktionary`;
      }
    };
    fetchTerms();
  }, [setError, lang, rowsPerPage, page]);

  return (
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
                onPageChange={(event, newPage) => {
                  setPage(newPage);
                }}
                onRowsPerPageChange={(event) => {
                  setRowsPerPage(parseInt(event.target.value, 10));
                  setPage(0);
                }}
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
  );
}

export default function ListPage() {
  const lang = useParams().lang as string;
  const [amountTerms, setAmountTerms] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      if (typeof lang !== "string") {
        setError("Invalid language parameter.");
        return;
      }
      try {
        const stats = await getStats();
        if (lang in stats) {
          setAmountTerms(stats[lang]);
          setError(null);
        } else {
          setError(`Language ${lang} is not supported`);
        }
      } catch (error) {
        setError(error as string);
      }
    };

    fetchStats();
  }, [lang]);

  if (error) {
    return (
      <>
        <Typography color="error">{error}</Typography>
        <Error
          error={error}
          setError={setError}
          props={{
            autoHideDuration: undefined,
          }}
        />
      </>
    );
  }

  return (
    <>
      <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
        List of all entries
      </Typography>
      <List amountTerms={amountTerms} lang={lang} setError={setError} />
      {error && <Error error={error} setError={setError} />}
    </>
  );
}
