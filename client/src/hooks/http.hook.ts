import { useCallback, useState } from "react";

export default function useHttp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | string>(false);

  const request = useCallback(
    async (url: string, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        const res = await fetch(url, { method, body, headers });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Ошибка на сервере");
        }
        setLoading(false);
        return data;
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
        throw error;
      }
    },
    []
  );

  return { error, loading, request };
}
