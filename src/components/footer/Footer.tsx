import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();
  return (
    <>
      <div className="flex justify-center bg-blue-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">Blog Pessoal | Copyright: {data}</p>
          <p className="text-lg">Acesse minhas redes sociais</p>
          <div className="flex gap-2">
            <LinkedinLogo size={48} weight="bold" />
            <GithubLogo size={48} weight="bold" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
