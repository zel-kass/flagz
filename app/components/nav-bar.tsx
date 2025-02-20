import Link from 'next/link';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b">
      <nav className="flex items-center justify-between p-4">
        <div className='flex flex-row items-center space-x-2'>
          <Link href="/" >
            <Image
              src='/assets/fr.svg'
              alt='fr flag'
              width={10}
              height={10}
              style={{
                width: "5vw",
                height: "auto",
              }}
              priority={true}
            />
          </Link>
          <h1 className='text-white'>Flagz</h1>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Rules</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Rules</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Test your knowledge of flags from around the world ! You will be shown a flag and you have to guess the country it belongs to. Be careful, you only have 5 seconds for each flag ! How much can you score ? Good luck !
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
}