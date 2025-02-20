'use client';

import { useState, useEffect } from 'react'
import Quizz from "./Quizz";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function QuizzView() {
  const [score, setScore] = useState(0);
  const [quizz, setQuizz] = useState<Quizz | null>(null);

  useEffect(() => {
    setQuizz(new Quizz());
  }, []);

  function handleSubmit(key: string) {
    if (quizz && key === quizz.getActualFlag()) {
      quizz.upScore();
      setScore(quizz.getScore());
      quizz.newLevel();
    }
  }

  if (!quizz) return;

  return (
    <div className="flex items-center justify-center flex-col gap-y-2 text-white h-full">
      <h2>Score: {score}</h2>
      <Image
        src={`/assets/${quizz.getActualFlag()}.svg`}
        alt="current flag"
        width={100}
        height={50}
        style={{
          width: "30%",
          height: "auto",
        }}
        priority={true}
      />
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {Array.from(quizz.getSolutions()).map(([key, value]) => (
          <Button size="xl" onClick={() => handleSubmit(key)} key={key} className="w-full">
              {value}
            </Button>
          ))}
      </div>
    </div>
  );
}