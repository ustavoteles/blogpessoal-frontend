import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O usuário foi desconectado com sucesso!");
    navigate("/");
  }
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
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
