import { Heart, Shield, Trophy, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Supporter',
    amount: '$25+',
    icon: Heart,
    desc: 'Fuel snacks, spare parts, and small essentials during events.',
    perks: ['Thank-you shoutout', 'Sticker pack'],
  },
  {
    name: 'Bronze Sponsor',
    amount: '$100+',
    icon: Star,
    desc: 'Help us prototype mechanisms and iterate designs.',
    perks: ['Logo on website', 'Pit banner mention'],
  },
  {
    name: 'Silver Sponsor',
    amount: '$500+',
    icon: Shield,
    desc: 'Support competition registration and key components.',
    perks: ['Logo on robot', 'Website + social media feature'],
  },
  {
    name: 'Gold Sponsor',
    amount: '$2000+',
    icon: Trophy,
    desc: 'Enable travel, events, and outreach at scale.',
    perks: ['Large logo on robot', 'Custom demo + shop tour'],
  },
];

export default function DonateSection() {
  return (
    <section id="donate" className="relative py-20">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_center,rgba(34,211,238,0.12),transparent),radial-gradient(900px_400px_at_bottom_right,rgba(139,92,246,0.12),transparent)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Power Up Our Season
          </h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            Donations go directly toward robot parts, tools, registration, and outreach. Every contribution makes a real difference.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl p-5 ring-1 ring-neutral-200/60 dark:ring-neutral-800/60 bg-white/80 dark:bg-neutral-900/80 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 ring-1 ring-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                  <t.icon size={22} />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{t.amount}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{t.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-neutral-600 dark:text-neutral-400 list-disc list-inside">
                {t.perks.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="https://www.paypal.com/donate"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold shadow hover:opacity-90"
          >
            Donate via PayPal
          </a>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-xl text-center">
            Prefer a check or in-kind support? Reach out and we’ll coordinate pickup and recognition. Sponsorships are tax-deductible through our school/booster organization where applicable.
          </p>
        </div>
      </div>
    </section>
  );
}
