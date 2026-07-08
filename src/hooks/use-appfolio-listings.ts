import { useEffect, useState } from "react";

const APPFOLIO_HOST = "niceneassetmgmt.appfolio.com";
const THEME_COLOR = "#676767";

function buildListingUrl() {
  const params = new URLSearchParams({
    theme_color: THEME_COLOR,
    "filters[order_by]": "date_posted",
  });
  return `https://${APPFOLIO_HOST}/listings?${Date.now()}&${params.toString()}`;
}

export function useAppfolioListings() {
  const [hasUnits, setHasUnits] = useState(false);
  const [listingUrl] = useState(buildListingUrl);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://${APPFOLIO_HOST}/listings`, { cache: "no-store" })
      .then((res) => res.text())
      .then((html) => {
        if (cancelled) return;
        const doc = new DOMParser().parseFromString(html, "text/html");
        setHasUnits(doc.querySelectorAll(".js-listing-item").length > 0);
      })
      .catch(() => {
        if (!cancelled) setHasUnits(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { hasUnits, listingUrl };
}
