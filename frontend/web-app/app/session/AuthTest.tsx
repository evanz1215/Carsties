"use client";

import { useState } from "react";
import { updateAuctionTest } from "../actions/auctionActions";
import { Button, Spinner } from "flowbite-react";

export default function AuthTest() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  function doUpdate() {
    setResult(undefined);
    setLoading(true);
    updateAuctionTest()
      .then((res) => {
        setResult(res);
      })
      .catch((err) => {
        console.error(err);
        setResult(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="flex items-center gap-4">
      <Button outline onClick={doUpdate}>
        {loading && (
          <Spinner
            size="sm"
            aria-label="Info spinner example"
            className="me-3"
            light
          />
        )}
        Test auth
      </Button>
      <div>{JSON.stringify(result, null, 2)}</div>
    </div>
  );
}
