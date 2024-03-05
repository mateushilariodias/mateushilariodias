function HeroSection() {

    return (
        <section className="lg:flex p-4 lg:py-20 lg:px-72">
            <div>
                <h1 className="font-bold text-2xl lg:text-4xl pb-3 lg:pb-10">Mateus Hilário Dias: <br />
                    Vida pessoal e profissional</h1>
                <p className=" text-base lg:text-2xl pb-10 lg:pr-72">Mateus nasceu em 15 de setembro de 2004, em Pedregulho, SP. Um bebê albino com uma paixão precoce por arte e igreja. Inicialmente seguindo uma vocação religiosa, ele mais tarde descobriu não ser heterossexual. Optou por deixar a vida eclesiástica para trás e explorar sua liberdade, iniciando uma carreira artística e na área de tecnologia da informação. Uma jornada marcada por autenticidade e coragem.</p>
                <button className="bg-black hover:bg-gray-950 py-4 px-16 font-bold text-xl text-white rounded-lg">
                    <strong>Realizar Cadastro</strong>
                </button>
            </div>
            <div className="w-full flex justify-center items-center">
                <img className="w-full" src="images/mateushilariodias.png" alt="Foto de Mateus Hilário Dias" />
            </div>
        </section>
    )
}
export default HeroSection;