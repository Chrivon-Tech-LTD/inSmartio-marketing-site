'use client';

import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  Wallet,
  PieChart,
  TrendingUp,
  Calculator,
  Receipt,
  LineChart,
  Landmark,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Loader2,
} from 'lucide-react';
import { useWaitlist, type WaitlistJoinPayload } from '@/context/WaitlistContext';



interface FloatingIcon {
  Icon: typeof Wallet;
  top: string;
  left: string;
  size: number;
  drift: 'drift-1' | 'drift-2' | 'drift-3';
  rotate: number;
  delay: number;
}

const FLOATING_ICONS: FloatingIcon[] = [
  { Icon: Wallet, top: '12%', left: '8%', size: 46, drift: 'drift-1', rotate: -8, delay: 0 },
  { Icon: PieChart, top: '68%', left: '6%', size: 38, drift: 'drift-2', rotate: 10, delay: 0.4 },
  { Icon: TrendingUp, top: '20%', left: '86%', size: 52, drift: 'drift-3', rotate: 6, delay: 0.2 },
  { Icon: Calculator, top: '78%', left: '88%', size: 34, drift: 'drift-1', rotate: -12, delay: 0.6 },
  { Icon: Receipt, top: '85%', left: '42%', size: 32, drift: 'drift-2', rotate: 4, delay: 0.3 },
  { Icon: LineChart, top: '6%', left: '46%', size: 40, drift: 'drift-3', rotate: -5, delay: 0.5 },
  { Icon: Landmark, top: '42%', left: '92%', size: 30, drift: 'drift-1', rotate: 14, delay: 0.7 },
  { Icon: CreditCard, top: '48%', left: '3%', size: 30, drift: 'drift-2', rotate: -14, delay: 0.1 },
];

function ToolBackground() {
  return (
    <div className="tool-bg">
      {FLOATING_ICONS.map(({ Icon, top, left, size, drift, rotate, delay }, i) => (
        <div
          key={i}
          className={`tool-icon ${drift}`}
          style={{
            top,
            left,
            // @ts-expect-error -- custom property consumed by the drift keyframes
            '--r': `${rotate}deg`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Motion variants                                                   */
/* ------------------------------------------------------------------ */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ------------------------------------------------------------------ */
/*  Form                                                              */
/* ------------------------------------------------------------------ */

function WaitlistForm() {
  const { status, error, entry, joinWaitlist } = useWaitlist();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<WaitlistJoinPayload>({ mode: 'onBlur' });

  // eslint-disable-next-line react-hooks/incompatible-library
  const firstName = watch('name', '')?.split(' ')[0];

  const onSubmit = async (values: WaitlistJoinPayload) => {
    try {
      await joinWaitlist(values);
    } catch {
      // error state is already captured in context; nothing else to do here
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        key="success"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-4 py-4 text-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 16 }}
        >
          <CheckCircle2 size={44} className="text-success" strokeWidth={1.5} />
        </motion.div>

        <div>
          <p className="font-display text-lg font-semibold text-text-main">
            You&rsquo;re on the list{firstName ? `, ${firstName}` : ''}.
          </p>
        
        </div>

        {typeof entry?.position === 'number' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-2 flex items-center gap-2 rounded-full px-4 py-2"
            style={{ backgroundColor: 'var(--surface)' }}
          >
            <span className="font-sans text-xs text-text-muted">Your spot</span>
            <span className="font-display text-sm font-bold text-primary">
              #{entry.position.toLocaleString()}
            </span>
          </motion.div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.form
      key="form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4"
    >
      <div className="text-left">
        <label
          htmlFor="name"
          className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wide text-text-muted"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Ada Okoye"
          autoComplete="name"
          aria-invalid={!!errors.name}
          className="w-full rounded-xl border bg-surface px-4 py-3 font-sans text-sm text-text-main outline-none transition-colors placeholder:text-text-muted/60 focus:border-primary"
          style={{ borderColor: errors.name ? '#ef4444' : 'var(--border)' }}
          {...register('name', {
            required: 'Please input your name',
            minLength: { value: 2, message: 'That name looks too short.' },
          })}
        />
        {errors.name && (
          <p className="mt-1.5 font-sans text-xs font-medium text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="text-left">
        <label
          htmlFor="email"
          className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wide text-text-muted"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="ada@email.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          className="w-full rounded-xl border bg-surface px-4 py-3 font-sans text-sm text-text-main outline-none transition-colors placeholder:text-text-muted/60 focus:border-primary"
          style={{ borderColor: errors.email ? '#ef4444' : 'var(--border)' }}
          {...register('email', {
            required: 'We need an email to notify you.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'This email doesn\u2019t look right, please check.',
            },
          })}
        />
        {errors.email && (
          <p className="mt-1.5 font-sans text-xs font-medium text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <AnimatePresence>
        {status === 'error' && error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-left font-sans text-xs font-medium text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: status === 'loading' ? 1 : 1.015 }}
        whileTap={{ scale: status === 'loading' ? 1 : 0.985 }}
        className="btn-primary mt-1 flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Joining&hellip;
          </>
        ) : (
          <>
            Join the waitlist
            <ArrowRight size={18} />
          </>
        )}
      </motion.button>
    </motion.form>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function WaitlistPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      <ToolBackground />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--tas) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 py-20 mt-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-full max-w-lg flex-col items-center text-center"
        >
          <motion.div
            variants={rise}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
          >
            <Sparkles size={14} className="text-secondary" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-text-muted ">
              inSmartio &middot; Early Access
            </span>
          </motion.div>

          <motion.h1
            variants={rise}
            className="font-display text-3xl  font-bold leading-[1.08] tracking-tight text-text-main sm:text-5xl"
          >
            Trusted help,
            <br />
            the moment you need it.
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-5 max-w-sm font-sans text-base leading-relaxed text-text-muted"
          >
            inSmartio connects you with verified plumbers, electricians, tutors and more —
            with bids, reviews, and secure payments built in. Join the waitlist for early
            access.
          </motion.p>

          <motion.div
            variants={rise}
            className="glass-panel mt-10 w-full rounded-2xl border p-7 shadow-lg sm:p-8"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface-raised)' }}
          >
            <AnimatePresence mode="wait">
              <WaitlistForm />
            </AnimatePresence>
          </motion.div>

          <motion.p variants={rise} className="mt-6 font-sans text-xs text-text-muted">
            <span className="font-semibold text-text-main">Insmartio - </span> Trusted services, Verified professionals.
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}