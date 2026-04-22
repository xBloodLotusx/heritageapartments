import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

// ---------------------------------------------------------------------------
// Lease knowledge base — extracted from HeritageApartmentLease.txt
// ---------------------------------------------------------------------------
const leaseKnowledge = [
  {
    keywords: ["rent", "monthly rent", "how much", "cost", "price", "pay rent", "payment amount"],
    answer:
      "Rent is due on or before the 1st of each month. There is a 5-day grace period. The exact rent amount is specified in your individual lease agreement — contact the leasing office for current rates.",
  },
  {
    keywords: ["late fee", "late", "overdue", "delinquent", "grace period", "past due"],
    answer:
      "After the 5-day grace period:\n• $25.00 flat late fee\n• $5.00 additional per day\n• Late fees are capped at 10% of your monthly rent.",
  },
  {
    keywords: ["deposit", "security deposit", "refund", "refundable", "move-in deposit"],
    answer:
      "The security deposit is non-refundable. The amount is specified in your individual lease and is due on or before the date the lease is signed.",
  },
  {
    keywords: ["utilities", "water", "electricity", "electric", "gas", "internet", "bills", "included"],
    answer:
      "Water is paid by the owner/management. You are responsible for all other utilities — electricity, gas, internet, and any related deposits or service fees.",
  },
  {
    keywords: ["pet", "pets", "dog", "cat", "animal", "bird", "fish"],
    answer: "No pets are allowed at this property.",
  },
  {
    keywords: ["parking", "car", "vehicle", "truck", "motorcycle", "bicycle", "park", "tow", "towed"],
    answer:
      "Parking is at your own risk. Prohibited vehicles include inoperable vehicles, vehicles without current license plates, vehicles occupying more than one space, and vehicles parked on grass, sidewalks, or in fire lanes. Unauthorized vehicles may be towed.",
  },
  {
    keywords: ["move out", "vacate", "leave", "30 days", "notice", "forwarding address", "end lease", "moving out"],
    answer:
      "You must give 30 days written notice before your move-out date and include your forwarding address. Failure to provide proper notice may result in additional charges.",
  },
  {
    keywords: ["cleaning", "clean", "move-out cleaning", "checkout", "broom clean"],
    answer:
      "You must thoroughly clean the unit before move-out — including doors, windows, furniture, bathrooms, kitchen appliances, patios, garages, and storage rooms. Inadequate cleaning may result in reasonable cleaning charges.",
  },
  {
    keywords: ["entry", "enter", "inspection", "landlord enter", "right of entry", "management enter", "notice to enter"],
    answer:
      "Management has the right to enter at all reasonable hours with proper notice for inspections, repairs, preventative maintenance, pest control, showing the unit to prospective residents or buyers, and emergency situations.",
  },
  {
    keywords: ["insurance", "renter", "renters insurance", "coverage", "personal property", "loss"],
    answer:
      "Renter's insurance is not required by the lease, but management strongly encourages it. Management does not insure your personal belongings or cover personal injury — you assume all liability for your personal property.",
  },
  {
    keywords: ["repair", "maintenance", "broken", "fix", "report", "malfunction", "leak", "water leak", "electrical"],
    answer:
      "Report any damage or problem in writing immediately upon discovery — unreported issues may become your financial responsibility. Priority items to report include water leaks, electrical problems, broken locks, and malfunctioning lights.",
  },
  {
    keywords: ["default", "eviction", "violation", "breach", "terminate", "evict", "illegal", "drugs", "criminal"],
    answer:
      "If you are in default, management may file for lease termination after providing 14 days written notice. Violations include non-payment of rent, criminal activity on the premises, providing false application information, or other lease violations.",
  },
  {
    keywords: ["alteration", "paint", "modification", "modify", "alter", "install", "change", "drill", "hang"],
    answer:
      "You may not paint or make permanent alterations without written consent from management. You may not alter, damage, or remove any property including alarm systems, smoke detectors, locks, screens, or security devices.",
  },
  {
    keywords: ["smoke detector", "carbon monoxide", "fire", "safety", "detector", "alarm"],
    answer:
      "Smoke and carbon monoxide detectors are installed per state regulations. You must report malfunctions immediately, replace dead batteries, and never disable a detector. You'll be liable for damages caused by a disabled or damaged detector.",
  },
  {
    keywords: ["returned check", "bounced check", "rejected payment", "nsf", "bad check"],
    answer:
      "A $25 charge applies for every returned check or rejected electronic payment, plus any bank fees incurred by management, plus any applicable late fees.",
  },
  {
    keywords: ["lease term", "duration", "how long", "month to month", "renewal", "end date", "start date", "expire"],
    answer:
      "The lease runs from your specified start date to your end date, then automatically converts to a month-to-month tenancy on the same terms until properly terminated.",
  },
  {
    keywords: ["roommate", "sublet", "sublease", "guest", "occupant", "extra person", "additional person", "add someone"],
    answer:
      "The apartment may only be occupied by residents listed in the lease. Unauthorized occupants living in the unit for more than 7 consecutive days must be approved by management in writing in advance.",
  },
  {
    keywords: ["address", "location", "where", "property", "street", "16th"],
    answer: "Heritage Apartments is located at 1434 W. 16th St., Mount Pleasant, TX 75455.",
  },
  {
    keywords: ["contact", "phone", "call", "leasing office", "management", "reach", "email"],
    answer:
      "You can reach the leasing office at:\n📍 1434 W. 16th St., Mount Pleasant, TX 75455\n📧 leasing@heritage-apartments.example\nPhone available upon request.",
  },
  {
    keywords: ["jury", "lawsuit", "court", "dispute", "legal", "sue"],
    answer:
      "Per the lease, both parties agree to waive a jury trial. Any legal disputes will be decided by a judge, to the extent permitted by law.",
  },
  {
    keywords: ["force majeure", "act of god", "hurricane", "flood", "disaster", "epidemic", "pandemic"],
    answer:
      "Management is excused from lease obligations in the event of acts of God, strikes, epidemics, war, acts of terrorism, or other events beyond their reasonable control.",
  },
];

const suggestions = [
  "Are pets allowed?",
  "What utilities are included?",
  "What are the late fees?",
  "How do I move out?",
  "Can I make changes to my apartment?",
];

// ---------------------------------------------------------------------------
// Keyword matcher — returns the best-matching answer
// ---------------------------------------------------------------------------
function findAnswer(query: string): string {
  const q = query
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  let bestScore = 0;
  let bestAnswer = "";

  for (const item of leaseKnowledge) {
    let score = 0;
    for (const kw of item.keywords) {
      if (q.includes(kw)) score += kw.split(" ").length; // longer phrase = higher weight
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = item.answer;
    }
  }

  if (bestScore === 0) {
    return "I'm not sure about that specific question. For the most accurate information, please contact the leasing office directly:\n📧 leasing@heritage-apartments.example\n📍 1434 W. 16th St., Mount Pleasant, TX 75455";
  }
  return bestAnswer;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
type Message = { role: "user" | "bot"; text: string };

export function LeaseChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I can answer questions about your Heritage Apartments lease. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const answer = findAnswer(trimmed);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "bot", text: answer },
    ]);
    setInput("");
  }

  const showSuggestions = messages.length <= 1;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {open && (
        <div
          className="w-80 sm:w-96 shadow-2xl border border-border bg-background flex flex-col overflow-hidden rounded-none"
          style={{ maxHeight: "520px" }}
        >
          {/* Header */}
          <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div>
              <p className="font-semibold text-sm">Lease Assistant</p>
              <p className="text-xs text-primary-foreground/60">Heritage Apartments</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[82%] px-3 py-2 text-sm whitespace-pre-line leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Suggested questions */}
          {showSuggestions && (
            <div className="px-4 pb-3 flex flex-wrap gap-1.5 flex-shrink-0 border-t border-border pt-3">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs px-2 py-1 border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Reset */}
          <div className="border-t border-border px-3 pt-2 pb-1 flex-shrink-0">
            <button
              onClick={() =>
                setMessages([
                  {
                    role: "bot",
                    text: "Hi! I can answer questions about your Heritage Apartments lease. What would you like to know?",
                  },
                ])
              }
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              ↺ Reset chat
            </button>
          </div>

          {/* Input */}
          <div className="border-t border-border px-3 py-3 flex items-center gap-2 flex-shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Ask a lease question…"
              className="flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
            />
            <button
              onClick={() => send(input)}
              className="text-accent hover:text-accent/70 transition-colors"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="bg-primary text-primary-foreground h-12 w-12 flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors rounded-full"
        aria-label="Open lease assistant"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  );
}
