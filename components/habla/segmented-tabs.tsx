import Link from "next/link";
import { cn } from "@/lib/utils";

type TabItem = {
  id: string;
  label: string;
  href: string;
};

type SegmentedTabsProps = {
  items: TabItem[];
  activeId: string;
};

export default function SegmentedTabs({ items, activeId }: SegmentedTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn("btn", activeId === item.id && "btn-primary")}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
