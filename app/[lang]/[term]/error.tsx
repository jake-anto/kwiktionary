"use client";

import ErrorComponent from "@/app/components/error";
import { useEffect, useState } from "react";

export default function ErrorBoundary({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const [errorMsg, setErrorMsg] = useState<string | null>(error.message);

  useEffect(() => {
    console.error(error);
  }, [error]);

  if (!errorMsg) return null;

  return <ErrorComponent error={errorMsg} setError={setErrorMsg} />;
}
