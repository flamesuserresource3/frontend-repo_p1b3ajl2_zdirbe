import { Users, Target, Wrench } from 'lucide-react';

const mentors = [
  { name: 'Alex Johnson', role: 'Lead Mentor • Mechanical' },
  { name: 'Priya Shah', role: 'Software Mentor • Controls' },
  { name: 'Chris Lee', role: 'Electrical Mentor' },
];

const members = [
  { name: 'Ava M.', role: 'Captain • Drive Team' },
  { name: 'Ethan R.', role: 'Programming Lead' },
  { name: 'Liam T.', role: 'Build Lead' },
  { name: 'Sophia K.', role: 'Design & CAD' },
  { name: 'Noah P.', role: 'Strategy' },
  { name: 'Mia L.', role: 'Scouting' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_right,rgba(168,85,247,0.15),transparent),radial-gradient(600px_300px_at_left,rgba(34,211,238,0.15),transparent)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
              About Amped
            </h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              We are FRC Team 10922 — Amped. Our mission is to inspire students through hands-on engineering, programming, and teamwork while competing at the highest levels of FIRST Robotics Competition. We focus on safety, inclusion, and continuous improvement.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl p-5 ring-1 ring-neutral-200/60 dark:ring-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
                <Users className="text-cyan-500" />
                <h3 className="mt-2 font-semibold text-neutral-900 dark:text-white">Community</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Mentoring younger teams, running STEM workshops, and giving back.</p>
              </div>
              <div className="rounded-xl p-5 ring-1 ring-neutral-200/60 dark:ring-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
                <Target className="text-violet-500" />
                <h3 className="mt-2 font-semibold text-neutral-900 dark:text-white">Competition</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Designing strategic robots and practicing data-driven iteration.</p>
              </div>
              <div className="rounded-xl p-5 ring-1 ring-neutral-200/60 dark:ring-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
                <Wrench className="text-cyan-500" />
                <h3 className="mt-2 font-semibold text-neutral-900 dark:text-white">Craft</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">From CAD and machining to control systems and autonomous code.</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden ring-1 ring-neutral-200/60 dark:ring-neutral-800/60 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Quick Facts</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>Founded: 20XX</li>
              <li>Location: Your City, State</li>
              <li>Program Areas: Mechanical, Electrical, Software, Strategy</li>
              <li>Affiliations: FIRST Robotics Competition</li>
            </ul>
          </div>
        </div>

        <div id="members" className="mt-16 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Mentors</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {mentors.map((m) => (
                <div key={m.name} className="rounded-xl p-4 ring-1 ring-neutral-200/60 dark:ring-neutral-800/60 bg-white/70 dark:bg-neutral-900/70">
                  <p className="font-medium text-neutral-900 dark:text-white">{m.name}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{m.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Team Members</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {members.map((m) => (
                <div key={m.name} className="rounded-xl p-4 ring-1 ring-neutral-200/60 dark:ring-neutral-800/60 bg-white/70 dark:bg-neutral-900/70">
                  <p className="font-medium text-neutral-900 dark:text-white">{m.name}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
