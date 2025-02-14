function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-blue-900 text-white">
        <div className="container flex justify-between text-lg">
          Blog Pessoal
        <div className="flex gap-4">
          Postagens 
          Cadastrar Tema
          Perfil
          Sair
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar
