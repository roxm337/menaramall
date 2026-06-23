import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui/Container";
import { EventsView } from "@/components/events/EventsView";
import { events, eventCategories, isUpcoming } from "@/lib/data/events";

export const metadata: Metadata = {
  title: "Events — What's On at Menara Mall",
  description:
    "Discover what's on at Menara Mall Marrakech — cultural showcases, family festivals, live music, fashion previews and seasonal celebrations. Browse upcoming and past events.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  // Split on the server so the live clock doesn't cause hydration mismatch.
  const now = new Date();
  const upcoming = events.filter((e) => isUpcoming(e, now));
  const past = events.filter((e) => !isUpcoming(e, now));

  return (
    <>
      <PageHero
        eyebrow="What's On"
        title="A calendar of moments worth gathering for"
        lede="From artisan showcases and family festivals to live music under the Marrakech sky — discover the events that make Menara Mall a destination."
        art="Festive evening event at the mall, lanterns and crowd, celebratory mood"
        tone="palm"
        crumbs={[{ label: "Events" }]}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <EventsView upcoming={upcoming} past={past} categories={eventCategories} />
        </Container>
      </section>
    </>
  );
}
