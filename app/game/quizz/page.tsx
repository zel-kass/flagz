'use client';

import { useState, useEffect } from 'react'
import Quizz from "./Quizz";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';


export default function QuizzView() {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [quizz, setQuizz] = useState<Quizz | null>(null);

  useEffect(() => {
    setQuizz(new Quizz());
  }, []);

  function handleSubmit(key: string) {
    if (!quizz)
      throw new Error("Quizz is not initialized");
    if (key === quizz.getActualFlag()) {
      quizz.upScore();
      setScore(quizz.getScore());
      quizz.newLevel();
    } else {
      setGameOver(true);
      quizz.setGameOver(true);
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
      {gameOver && 
        <div className='z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='w-1/2 h-1/3 bg-white/80 rounded-lg backdrop-blur-md'>
            <div className='flex flex-col gap-y-2 p-4 h-full justify-center items-center'>
              <h2 className='text-3xl text-center'>Game Over</h2>
              <h3 className='text-2xl text-center'>Score: {score}</h3>
              <div className='flex flex-row items-center gap-x-2'>
                <Button onClick={() => {
                  setGameOver(false);
                  setScore(0);
                  quizz.newGame();
                }}>Restart</Button>
                <Link href='/'>
                  <Button>Home</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}