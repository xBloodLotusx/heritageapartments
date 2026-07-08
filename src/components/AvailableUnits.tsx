interface AvailableUnitsProps {
  hasUnits: boolean;
  listingUrl: string;
}

export function AvailableUnits({ hasUnits, listingUrl }: AvailableUnitsProps) {
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
