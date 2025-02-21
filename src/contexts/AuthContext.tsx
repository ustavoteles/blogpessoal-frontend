import { createContext, ReactNode, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../components/utils/ToastAlerta";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode; //ReactNode é qualquer componente react que vai se
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  ////erProps){

  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  const [isLoading, SetIsLoading] = useState<boolean>(false);

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    SetIsLoading(true);
    try {
      await login("/usuarios/logar", usuarioLogin, setUsuario);
      ToastAlerta("Usuário foi autenticado com sucesso!", "sucesso");
    } catch (error) {
      ToastAlerta("Os dados do Usuário estão incorretos!", "erro")    }

    SetIsLoading(false);
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    });
  }
  return (
    <AuthContext.Provider
      value={{
        usuario,
        handleLogin,
        handleLogout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
