import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();
  return (
    <>
      <div className="flex justify-center bg-blue-900 text-white bottom-0 w-full">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">Blog Pessoal | Copyright: {data}</p>
          <p className="text-lg">Acesse minhas redes sociais</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/ustavoteles" target="_blank">
              <LinkedinLogo size={48} weight="bold" />
            </a>
            <a href="https://www.github.com/ustavoteles" target="_blank">
              <GithubLogo size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
