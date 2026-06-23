import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { events, getEvent } from "@/lib/data/events";
import { site } from "@/lib/data/site";
import { formatDateRange } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArtImage } from "@/components/ui/ArtImage";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { EventCard } from "@/components/cards/EventCard";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = getEvent(slug);
  if (!e) return { title: "Event not found" };
  return {
    title: `${e.title} — ${e.category} Event`,
    description: e.description,
    alternates: { canonical: `/events/${e.slug}` },
    openGraph: { title: `${e.title} · ${site.name}`, description: e.description },
  };
}

/** Build a Google Calendar "add event" link (no client JS required). */
function calendarUrl(title: string, date: string, endDate: string | undefined, start: string, end: string, location: string) {
  const fmt = (d: string, t: string) => `${d.replace(/-/g, "")}T${t.replace(":", "")}00`;
  const dates = `${fmt(date, start)}/${fmt(endDate ?? date, end)}`;
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: `${title} — Menara Mall`,
    dates,
    location: `${location}, ${site.name}, ${site.city}`,
    details: "See you at Menara Mall, Marrakech.",
  });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  const related = events.filter((e) => e.slug !== event.slug && e.category === event.category).slice(0, 3);
  const fallbackRelated = events.filter((e) => e.slug !== event.slug).slice(0, 3);
  const more = related.length ? related : fallbackRelated;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: `${event.date}T${event.startTime}:00`,
    endDate: `${event.endDate ?? event.date}T${event.endTime}:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: event.description,
    location: {
      "@type": "Place",
      name: `${event.location}, ${site.name}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressCountry: "MA",
      },
    },
    organizer: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate overflow-hidden bg-charcoal pt-[var(--header-h,4.5rem)]">
        <ArtImage art={event.heroArt} ratio="hero" rounded={false} className="!absolute inset-0 h-full w-full !rounded-none" tone="palm" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/45 to-charcoal/30" />
        <Container className="relative z-10 flex min-h-[48vh] flex-col justify-end py-12">
          <div className="mb-6 [&_*]:!text-white/70 [&_a:hover]:!text-white">
            <Breadcrumbs items={[{ label: "Events", href: "/events" }, { label: event.title }]} />
          </div>
          <Reveal>
            <Badge tone="gold">{event.category}</Badge>
            <h1 className="mt-4 max-w-3xl text-balance text-white" style={{ fontSize: "var(--text-hero)", lineHeight: "1.04" }}>
              {event.title}
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal>
                <p className="text-xl leading-relaxed text-charcoal">{event.description}</p>
                {event.longDescription && (
                  <p className="mt-6 leading-relaxed text-stone">{event.longDescription}</p>
                )}
                <p className="mt-8 text-xs text-stone/70">
                  Event details are subject to change. Please confirm timings before your visit. [VERIFY]
                </p>
              </Reveal>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-[calc(var(--header-h,4.5rem)+1.5rem)] rounded-[var(--radius-xl2)] bg-white p-6 ring-1 ring-charcoal/8">
                <h2 className="text-xl text-charcoal">Event details</h2>
                <dl className="mt-4 space-y-4 text-sm">
                  <div className="flex gap-3">
                    <Icon name="calendar" size={18} className="mt-0.5 shrink-0 text-clay" />
                    <div><dt className="text-stone">Date</dt><dd className="font-medium text-charcoal">{formatDateRange(event.date, event.endDate)}</dd></div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-clay" />
                    <div><dt className="text-stone">Time</dt><dd className="font-medium text-charcoal">{event.startTime} – {event.endTime}</dd></div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="map-pin" size={18} className="mt-0.5 shrink-0 text-clay" />
                    <div><dt className="text-stone">Location</dt><dd className="font-medium text-charcoal">{event.location}</dd></div>
                  </div>
                </dl>
                <div className="mt-5 space-y-2 border-t border-charcoal/8 pt-5">
                  {event.registrationUrl && (
                    <Button href={event.registrationUrl} variant="primary" icon="ticket" className="w-full">Register interest</Button>
                  )}
                  <Button
                    href={calendarUrl(event.title, event.date, event.endDate, event.startTime, event.endTime, event.location)}
                    variant="outline"
                    icon="calendar"
                    className="w-full"
                  >
                    Add to calendar
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {more.length > 0 && (
        <section className="bg-cream py-20">
          <Container>
            <h2 className="text-3xl text-charcoal">More to discover</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
