import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-blue-900 text-white">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold">
            {" "}
            Blog Pessoal
          </Link>

          <div className="flex gap-4">
            Postagens <Link to="/cadastro"> Cadastrar</Link> Tema Perfil
            <Link to="/login">Sair</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
