'use client';
import { useEffect } from "react";
import Quizz from "./Quizz";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function QuizzView() {

  const quizz: Quizz = new Quizz();
  console.log(quizz);

  return (
    <div className="flex items-center justify-center flex-col">
      <h2>Score: {quizz.getScore()}</h2>
      <Image
        src={`/assets/${quizz.getActualFlag()}.svg`}
        alt="current flag"
        width={100}
        height={100}
      />
      <div className="grid grid-cols-2 grid-rows-2">
        {quizz.getSolutions().map((solution, index) =>
          <Button>
            {solution}
          </Button>
        )}
      </div>
    </div>
  );
}