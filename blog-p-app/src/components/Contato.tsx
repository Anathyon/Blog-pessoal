export default function contato () {
    return (
        <>
            <section id="contato" className="py-16 px-6 max-w-3xl mx-auto">
                  <h3 className="text-3xl font-semibold mb-8 text-center">Contato</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Nome"
                      className="w-full p-3 rounded bg-[#1f2937] text-white placeholder-gray-400"
                    />
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="w-full p-3 rounded bg-[#1f2937] text-white placeholder-gray-400"
                    />
                    <textarea
                      placeholder="Mensagem"
                      className="w-full p-3 rounded bg-[#1f2937] text-white placeholder-gray-400 h-32"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition"
                    >
                      Enviar
                    </button>
                  </form>
        </section>
        
        </>
    )
}