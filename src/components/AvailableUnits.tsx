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

export function AvailableUnits() {
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

  if (!hasUnits) return null;

  return (
    <section id="available-units" className="py-24 md:py-32 bg-secondary">
      <div className="container-narrow">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Availability</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">Available units.</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Current openings at Heritage Apartments, listed directly by our leasing office.
          </p>
        </div>
        <div className="bg-background shadow-soft border border-border overflow-hidden">
          <iframe
            title="Available Properties"
            src={listingUrl}
            style={{ height: "500px", width: "100%", border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
