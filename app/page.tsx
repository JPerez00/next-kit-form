// app/page.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

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
    <div className="pt-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <div className="shadow-lg font-semibold mb-4 inline-flex rounded-xl px-4 py-1 md:py-2 text-xs md:text-sm leading-6 text-zinc-400 ring-1 ring-white/20 hover:ring-white/30 backdrop-blur-xl bg-white/10 transition-all">
          Ideal for SaaS waitlists & content creator newsletters.
        </div>
        <h1 className="text-balance text-5xl leading-[3.4rem] md:text-7xl md:leading-[5rem] font-bold tracking-tighter max-w-4xl mx-auto bg-gradient-to-r from-zinc-900 to-white to-45% bg-clip-text text-transparent">
          Next.js Newsletter Landing Page
        </h1>
        <p className="mt-4 text-lg text-zinc-400">
          A simple Next.js newsletter landing page with several built-in API options.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto relative mt-10 pb-12">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="ring-1 ring-white/30 backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-14 shadow-xl"
          >
            <div className="space-y-4">
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
                  className="w-full px-4 py-2 rounded-lg bg-white text-black hover:bg-white/90 transition-colors font-medium"
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
