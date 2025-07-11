export default function contato () {
    return (
        <>
             <section
      id="contato"
      className="py-20 px-6 max-w-4xl mx-auto text-white bg-[#111827] rounded-xl shadow-lg"
    >
      <h3 className="text-4xl font-bold mb-10 text-center border-b border-blue-500 pb-4">
        Contato
      </h3>

      <form className="space-y-6 max-w-2xl mx-auto">
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full p-4 rounded-lg bg-[#1f2937] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">E-mail</label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="w-full p-4 rounded-lg bg-[#1f2937] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mensagem</label>
          <textarea
            placeholder="Escreva sua mensagem..."
            className="w-full p-4 rounded-lg bg-[#1f2937] text-white placeholder-gray-400 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 w-full md:w-auto"
        >
          Enviar
        </button>
      </form>
    </section>
        
        </>
    )
}