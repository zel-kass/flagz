import {Button} from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center text-center h-full">
      <div className="flex flex-col items-center space-y-4 w-1/2">
        <h1 className="text-6xl xl:text-8xl font-bold">Guess the Flag</h1>
        <div className="flex flex-col gap-2 text-md xl:text-xl">
          <p>Test your knowledge of flags from around the world !</p>
          <p>How much can you score ?</p>
        </div>
        <Link href="/game/quizz">
          <Button size="lg">Play</Button>
        </Link>
      </div>
    </div>
  );
}
