import {Button} from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <Link href="/game/quizz">
        <Button size="lg">play</Button>
      </Link>
    </div>
  );
}
