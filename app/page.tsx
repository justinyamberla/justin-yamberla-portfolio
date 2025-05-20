import Image from "next/image";
import {ModeToggle} from "@/components/ui/mode-toggle";

export default function Home() {
  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ModeToggle />
      </main>
  );
}
