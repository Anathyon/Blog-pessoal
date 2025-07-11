const Skills = [
  "React",
  "TypeScript",
  "TailwindCSS",
  "Node.js",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Git",
  "GitHub",
  "Vite",
];

export default function skills() {
  return (
    <section id="habilidades" className="py-20 px-6 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10 border-b border-blue-500 inline-block pb-2">
          Habilidades
        </h3>

        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center items-center">
          {Skills.map((Skill) => (
            <li
              key={Skill}
              className="bg-[#1f2937] py-4 px-6 rounded-lg shadow-md shadow-blue-500/10 hover:scale-105 transition"
            >
              {Skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
