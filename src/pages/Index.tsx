import overheadImg from "@/assets/Overhead.jpeg";
import overhead2Img from "@/assets/Overhead2.jpeg";
import communityImg from "@/assets/CommunityRoom.jpeg";
import entranceImg from "@/assets/Entrance.jpg";
import kitchenWideImg from "@/assets/KitchenWide.jpg";
import kitchenImg from "@/assets/Kitchen.jpg";
import roomImg from "@/assets/Room.jpg";
import showerImg from "@/assets/Shower.jpg";
import laundry1Img from "@/assets/laundry1.jpeg";
import laundry2Img from "@/assets/laundry2.jpeg";
import { Button } from "@/components/ui/button";
import {
  Home,
  Wind,
  WashingMachine,
  Car,
  Trees,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const features = [
  { icon: Home, title: "2 Bed / 1 Bath", body: "Consistent, spacious ~800 sq ft floorplans across all 48 units." },
  { icon: Wind, title: "Individual HVAC", body: "Private climate control and electric water heater in every home." },
  { icon: WashingMachine, title: "On-site Laundromat", body: "Oversized facility with owned washers and dryers, available daily." },
  { icon: Car, title: "100 Parking Spaces", body: "Generous on-site parking for residents and guests across the community." },
  { icon: Trees, title: "5.38 Acre Lot", body: "Multiple buildings on a thoughtfully landscaped, tree-lined property." },
  { icon: ShieldCheck, title: "Built 2021–2023", body: "Recently constructed, fully remodeled exteriors and updated interiors." },
];

const reasons = [
  "Modern, recently built or remodeled units",
  "Spacious layouts for individuals, couples, or small families",
  "Quiet, community-focused environment",
  "Convenient location near schools, parks, and shopping",
  "Reliable city water, sewer, and electric service",
  "Professionally managed and well-maintained",
];

const gallery = [
  { src: overhead2Img, alt: "Aerial overhead view of Heritage Apartments community", span: "md:col-span-2 md:row-span-2" },
  { src: entranceImg, alt: "Heritage Apartments entrance" , span: "md:col-span-2 md:row-span-2"},
  { src: communityImg, alt: "Community room and shared amenity spaces" },
  { src: kitchenWideImg, alt: "Updated apartment kitchen with ample counter space" },
  { src: kitchenImg, alt: "Updated apartment kitchen with white cabinets" },
  { src: roomImg, alt: "Comfortable bedroom in a Heritage apartment" },
  { src: showerImg, alt: "Clean modern bathroom with shower" },
  { src: laundry1Img, alt: "On-site laundromat with washers and dryers", span: "md:col-span-2" },
  { src: laundry2Img, alt: "On-site laundromat facility" },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="container-narrow flex items-center justify-between py-6">
          <a href="#" className="font-serif text-xl text-primary-foreground tracking-tight">
            Heritage <span className="italic font-light">Apartments</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/90">
            <a href="#about" className="hover:text-primary-foreground transition-colors">About</a>
            <a href="#features" className="hover:text-primary-foreground transition-colors">Features</a>
            <a href="#gallery" className="hover:text-primary-foreground transition-colors">Gallery</a>
            <a href="#location" className="hover:text-primary-foreground transition-colors">Location</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact">
              <Button size="sm" variant="secondary" className="rounded-none transition-colors hover:bg-accent hover:text-accent-foreground">
                Apply Now
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" size="sm" className="rounded-none transition-colors hover:bg-accent hover:text-accent-foreground">
                Resident Portal
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={overheadImg}
          alt="Aerial overhead view of Heritage Apartments community in Mount Pleasant, Texas"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="relative z-10 container-narrow h-full flex flex-col justify-end pb-20 md:pb-28">
          <span className="text-primary-foreground/80 text-xs uppercase tracking-[0.3em] mb-6">
            Mount Pleasant · Texas
          </span>
          <h1 className="font-serif text-primary-foreground text-balance text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
            Modern, comfortable living in the heart of <em className="font-light">Mount Pleasant.</em>
          </h1>
          <p className="mt-8 max-w-xl text-primary-foreground/85 text-lg leading-relaxed">
            Forty-eight recently built and remodeled two-bedroom homes — quietly tucked into a five-acre community
            on West 16th Street.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact">
              <Button size="lg" className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground">
                Schedule a Tour
              </Button>
            </a>
            <a href="#about">
              <Button size="lg" variant="outline" className="rounded-none bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Apply Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32 bg-gradient-warm">
        <div className="container-narrow grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">About the Community</span>
            <h2 className="mt-4 text-4xl md:text-5xl text-balance">
              A turn-key residential community, fully occupied and thoughtfully kept.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Heritage Apartments is a 48-unit residential community offering spacious two-bedroom,
              one-bathroom homes that average 800 square feet. Built in three phases — sixteen units in 2021,
              sixteen in 2022, and sixteen in 2023 — every exterior has been remodeled and seven interiors
              have been freshly updated.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The property is currently <span className="text-foreground font-medium">100% occupied</span>,
              a quiet reflection of consistent demand and steady management. Each home includes its own HVAC
              system and electric water heater.
            </p>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "48", v: "Total Units" },
                { k: "800", v: "Avg Sq Ft" },
                { k: "100%", v: "Occupied" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-serif text-4xl md:text-5xl text-primary">{s.k}</dt>
                  <dd className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 md:py-32">
        <div className="container-narrow">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Property Features</span>
            <h2 className="mt-4 text-4xl md:text-5xl text-balance">
              Built recently. Maintained meticulously.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {features.map((f) => (
              <div key={f.title} className="bg-background p-8 md:p-10 group hover:bg-secondary/60 transition-colors">
                <f.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 text-2xl">{f.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why residents choose */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container-narrow grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Why Heritage</span>
            <h2 className="mt-4 text-4xl md:text-5xl text-balance text-primary-foreground">
              The reasons residents stay.
            </h2>
          </div>
          <ul className="md:col-span-7 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
            {reasons.map((r, i) => (
              <li key={r} className="flex items-baseline gap-6 py-5">
                <span className="font-serif text-primary-foreground/50 text-sm tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-primary-foreground/90">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 md:py-32">
        <div className="container-narrow">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-accent">Gallery</span>
              <h2 className="mt-4 text-4xl md:text-5xl text-balance">A look around the property.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Exteriors, interiors, and shared amenities — captured across the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-4">
            {gallery.map((g, i) => (
              <figure
                key={i}
                className={`relative overflow-hidden bg-muted shadow-soft ${g.span ?? ""}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-24 md:py-32 bg-secondary">
        <div className="container-narrow grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Location</span>
            <h2 className="mt-4 text-4xl md:text-5xl text-balance">
              Quiet streets, close to everything.
            </h2>
            <div className="mt-8 flex items-start gap-3 text-foreground">
              <MapPin className="h-5 w-5 mt-1 text-accent" strokeWidth={1.5} />
              <div>
                <p className="text-lg">1434 W 16th St</p>
                <p className="text-lg">Mount Pleasant, TX 75455</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Heritage Apartments sits just minutes from Heritage Park, with easy access to
              <span className="text-foreground"> US-271</span> and
              <span className="text-foreground"> Interstate 30</span>.
            </p>
            <p>
              Families are within the Mount Pleasant ISD boundary — close to Wallace Middle School,
              MP Junior High, and MP High School — with parks, shopping, and dining all a short drive away.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {["Heritage Park", "Mount Pleasant ISD", "US-271 Access", "I-30 Corridor"].map((p) => (
                <div key={p} className="border-l-2 border-accent pl-4 py-1">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Nearby</p>
                  <p className="text-foreground">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-primary text-primary-foreground">
        <div className="container-narrow py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-primary-foreground/15">
            <div className="md:col-span-6">
              <h2 className="font-serif text-4xl md:text-6xl text-balance text-primary-foreground">
                Interested in joining the <em className="font-light">waitlist?</em>
              </h2>
              <p className="mt-6 text-primary-foreground/75 max-w-md text-lg">
                Heritage Apartments is fully occupied. Reach out to leasing to be notified when a
                home becomes available.
              </p>
            </div>
            <div className="md:col-span-6 md:pl-8 space-y-5 text-primary-foreground/85">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" strokeWidth={1.5} />
                <span>1434 W 16th St, Mount Pleasant, TX 75455</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" strokeWidth={1.5} />
                <span>Leasing line — available upon request</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" strokeWidth={1.5} />
                <span>leasing@heritage-apartments.example</span>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p className="font-serif text-lg text-primary-foreground">Heritage Apartments</p>
            <p>© {new Date().getFullYear()} Heritage Apartments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
