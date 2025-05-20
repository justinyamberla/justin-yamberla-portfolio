import Image from "next/image";
import {ModeToggle} from "@/components/ui/mode-toggle";

export default function Home() {
  return (
      <main className="flex flex-col items-center px-4">
        <ModeToggle />
      </main>
  );
}
