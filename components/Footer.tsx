import { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Pin(props: JSX.IntrinsicAttributes & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      target="_blank"
      className="mr-0.5 ml-0.5 inline-flex items-center border px-2 py-1 text-sm leading-4 no-underline text-zinc-300 border-1 border-white/20 backdrop-blur-xl bg-white/20 rounded-lg"
    />
  );
}

export function Footer() {
  return (
    <footer className="">
      <div className="max-w-3xl mx-auto flex flex-col items-center border-t border-zinc-400/20 py-10 sm:flex-row-reverse sm:justify-between">
        <p className="text-sm text-zinc-400 sm:mt-0">
          Developed by <Link href="https://www.jorge-perez.dev/" className=" hover:text-zinc-300 hover:underline">Jorge Perez</Link>
        </p>
        <p className="mt-6 text-sm text-zinc-400 sm:mt-0">
            Powered by{' '}
        <Pin href="https://vercel.com/home">
        <svg
          width="13"
          height="11"
          role="img"
          aria-label="Vercel logo"
          className="mr-1 inline-flex"
        >
          <use href="/sprite.svg#vercel" />
        </svg>
          Vercel
        </Pin>
          {' '}& The{' '}
          <Pin href="https://kit.com/">
            <Image
              alt="Kit logomark"
              src="/kit-logo.svg"
              className="!mr-1"
              width="28"
              height="28"
            />
            API
          </Pin>
        </p>
      </div>
    </footer>
  )
}
