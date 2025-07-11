export default function Inicio() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center items-center bg-[#0f172a] px-6">
      <div className="w-full max-w-xl flex flex-col items-center">
        <div className="w-32 h-32 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
          <img
            src="/assets/profile.jpg"
            alt="Foto de Anathyon"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          Olá, sou <span className="text-blue-500">Anathyon Erysson</span>
        </h2>
        <span className="block text-gray-400 text-base mb-6 text-center">Desenvolvedor Web</span>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Desenvolvedor web com experiência em criar aplicações modernas, responsivas e com alta performance usando tecnologias atuais.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
          <a
            href="#contato"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition w-full sm:w-auto text-center"
          >
            Entrar em Contato
          </a>
          <a
            href="/cv-anathyon.pdf"
            download
            className="border border-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition w-full sm:w-auto text-center"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}