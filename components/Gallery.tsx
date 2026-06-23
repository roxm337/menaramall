import { ArtImage } from "@/components/ui/ArtImage";

/** Editorial gallery grid built from art-direction notes or official image URLs. */
export function Gallery({ items, tone }: { items: string[]; tone?: "sand" | "clay" | "palm" | "charcoal" | "gold" }) {
  if (!items.length) return null;
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map((item, i) => {
        const isImage = /^https?:\/\//.test(item);
        return (
          <ArtImage
            key={i}
            art={isImage ? "Official Menara Mall gallery image" : item}
            src={isImage ? item : undefined}
            tone={tone}
            ratio="square"
            className={i === 0 ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2" : ""}
          />
        );
      })}
    </div>
  );
}
