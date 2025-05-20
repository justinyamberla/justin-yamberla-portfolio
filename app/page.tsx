import Image from "next/image";
import {ModeToggle} from "@/components/ui/mode-toggle";
import Intro from "@/components/intro";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <div className="top-0 left-0">
                <ModeToggle/>
            </div>
            <Intro/>
        </main>
    );
}
