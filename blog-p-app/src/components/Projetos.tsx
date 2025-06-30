export default function projetos () {
    return (
    <section id="projetos" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-10 text-center">Projetos</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1f2937] p-6 rounded shadow-lg shadow-blue-500/10">
            <h4 className="text-xl font-bold mb-2">Projeto 1</h4>
            <p className="text-gray-400 mb-4">Uma breve descrição do projeto vai aqui.</p>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">Código</a>
              <a href="#" className="border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 transition">Demo</a>
            </div>
          </div>
          <div className="bg-[#1f2937] p-6 rounded shadow-lg shadow-blue-500/10">
            <h4 className="text-xl font-bold mb-2">Projeto 2</h4>
            <p className="text-gray-400 mb-4">Uma breve descrição do projeto vai aqui.</p>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">Código</a>
              <a href="#" className="border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 transition">Demo</a>
            </div>
          </div>
        </div>
    </section>
)}
