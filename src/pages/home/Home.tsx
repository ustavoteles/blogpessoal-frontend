function Home() {
  return (
    <div className="bg-blue-900 flex justify-center">
      <div className="container grid grid-cols-2 text-white">
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h2 className="text-5xl font-bold">Seja Bem-Vindo(a)!</h2>
          <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>
          <div className="flex justify-around gap-4">
            <button className="rounded text-white border-white border-2 py-2 px-4 shadow-xl shadow-blue-600/50 ">
              Nova Postagem
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://i.imgur.com/VpwApCU.png"
            alt="Imagem da Página Home"
            className="w-2/3"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
