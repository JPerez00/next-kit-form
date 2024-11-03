'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100/10 stroke-zinc-400"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400"
      />
    </svg>
  );
}

function Pin(props: JSX.IntrinsicAttributes & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      target="_blank"
      className="mr-0.5 ml-0.5 inline-flex items-center border px-2 py-1 text-sm leading-4 no-underline text-zinc-200 border-1 border-white/20 backdrop-blur-xl bg-white/20 rounded-lg"
    />
  );
}

function isValidEmail(email: string): boolean {
  // Basic email regex for validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Component() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [emailError, setEmailError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <div className="shadow-lg font-semibold mb-6 md:mb-8 inline-flex rounded-xl px-4 py-1 md:py-2 text-xs md:text-sm leading-6 text-zinc-400 ring-1 ring-white/20 hover:ring-white/30 backdrop-blur-xl bg-white/10 transition-all">
          {`Effortless waitlists & standout newsletters`}
        </div>
        <h1 className="text-balance text-6xl leading-[3.4rem] md:text-8xl md:leading-[5rem] font-bold tracking-tighter max-w-4xl mx-auto bg-gradient-to-r from-zinc-900 to-white to-45% bg-clip-text text-transparent">
          NextKit Form
        </h1>
        <p className="max-w-3xl mx-auto mt-6 text-base md:text-lg text-zinc-300">
          A simple {' '}
          <Pin href="https://nextjs.org">
            <Image
              alt="Next.js logomark"
              src="/next-logo.svg"
              className="!mr-1"
              width="14"
              height="14"
            />
            Next.js
          </Pin>
          {' '}
          template for waitlist or newsletter 
          sign-ups, integrated with the {' '}
          <Pin href="https://kit.com/">
            <Image
              alt="Kit logomark"
              src="/kit-logo.svg"
              className="!mr-1"
              width="24"
              height="24"
            />
            API
          </Pin>
          {' '}
          (formerly ConvertKit). 
          Features Headless UI for customization and Framer Motion for 
          smooth animations—ideal for capturing emails with style and ease.
        </p>
        <div className="mt-4 flex gap-4 flex-row items-center justify-center">
          <Link
            href="https://www.jorge-perez.dev/blog/nextkit-form-template"
            className="inline-flex shadow-lg font-semibold rounded-2xl text-sm md:text-base px-8 py-3 leading-6 text-zinc-100 ring-1 ring-white/30 hover:ring-white/40 backdrop-blur-xl bg-white/15 transition-all"
          >
            Read The Docs
          </Link>
          <Link
            href="https://github.com/JPerez00/next-kit-form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center shadow-lg font-semibold rounded-2xl text-sm md:text-base px-8 py-3 leading-6 text-zinc-100 ring-1 ring-white/30 hover:ring-white/40 backdrop-blur-xl bg-white/15 transition-all"
          >
            {/* GitHub Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="mr-2"
            >
               <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
            GitHub Repo
          </Link>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto relative mt-6 pb-12">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="ring-1 ring-white/30 backdrop-blur-xl bg-white/10 rounded-3xl px-6 py-8 md:p-12 shadow-xl"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex">
                  <MailIcon className="bg-white/5 rounded-lg p-1 h-9 w-9 flex-none items-center justify-center" />
                  <h2 className="ml-3 text-4xl font-bold tracking-tight">
                    Experience it first here...
                  </h2>
                </div>
                <p className="text-white/60">
                  Be among the first to try our revolutionary product when it
                  launches. Get notified when we publish something new, and
                  unsubscribe at any time 🚀
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) {
                      if (isValidEmail(e.target.value)) {
                        setEmailError('');
                      }
                    }
                  }}
                  required
                  className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${
                    emailError ? 'border-red-400' : 'border-white/20'
                  } text-white placeholder:text-white/40 focus:border-white/40 focus:ring-0`}
                />
                {emailError && (
                  <p className="text-sm text-red-400">{emailError}</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-200 text-black hover:bg-white transition-all font-medium"
                >
                  {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-lime-300/70"
                >
                  {`Thank you for joining. We'll be in touch soon.`}
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-red-400/60"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}

              <div className="text-center text-sm text-white/30">
                By joining the waitlist, you agree to receive updates about our
                product.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
