import Tema from "./Tema";
import Usuario from "./Usuario";

export default interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  data: string; // data vai ser string pois facilita pra exibir a informação
  tema: Tema | null;
  usuario: Usuario | null;
}
