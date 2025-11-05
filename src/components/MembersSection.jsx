const mentors = [
  { name: 'Alex Johnson', role: 'Lead Mentor – Mechanical' },
  { name: 'Priya Shah', role: 'Mentor – Software' },
  { name: 'Chris Lee', role: 'Mentor – Electrical' },
];

const students = [
  { name: 'Jordan M.', role: 'Captain • Strategy' },
  { name: 'Avery S.', role: 'Mechanical' },
  { name: 'Taylor R.', role: 'Software' },
  { name: 'Riley K.', role: 'Electrical' },
  { name: 'Casey L.', role: 'Drive Team' },
  { name: 'Morgan P.', role: 'Outreach' },
];

function PersonCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 text-white flex items-center justify-center font-semibold">
        {name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
      </div>
      <h4 className="mt-3 font-semibold">{name}</h4>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
}

export default function MembersSection() {
  return (
    <section id="members" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Members</h2>
        <p className="mt-3 text-gray-600">Mentors and students who power our team.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold">Mentors</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {mentors.map((m) => (
                <PersonCard key={m.name} name={m.name} role={m.role} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Team Members</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {students.map((s) => (
                <PersonCard key={s.name} name={s.name} role={s.role} />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-500">Want to join? Reach out to us to learn how you can get involved in the next season.</p>
      </div>
    </section>
  );
}
