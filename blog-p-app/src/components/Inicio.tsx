export default function inicio (){
     return (
    <>
        <section id="inicio" className="flex flex-col md:flex-row items-center justify-between px-6 py-16 max-w-6xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight">Olá, sou Desenvolvedor Web</h2>
              <p className="text-gray-300 max-w-md">Sou um desenvolvedor web com experiência em construir aplicações web modernas e responsivas.</p>
              <div className="flex gap-4">
                <a href="#contato" className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded">Contato</a>
                <a href="#" className="border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 transition">Download CV</a>
              </div>
            </div>
            <img src="/me.png" alt="Minha foto" className="w-40 h-40 mt-8 md:mt-0 rounded-full border-4 border-blue-600" />
        </section>
    </>
     )
}