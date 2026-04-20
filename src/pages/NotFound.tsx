import { Link } from 'react-router-dom';
import { Seo } from '@/seo/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Página não encontrada" noindex />
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <div className="font-serif text-[clamp(6rem,18vw,12rem)] text-gold leading-none mb-4">404</div>
          <h1 className="heading-lg mb-6">
            A página que você busca <span className="italic text-gold">não existe</span>
          </h1>
          <p className="text-body mb-10">
            Mas podemos te levar para o lugar certo. Todas as nossas pedras, histórias e projetos estão a
            um clique.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn btn-primary">
              Voltar ao início
            </Link>
            <Link to="/produtos" className="btn btn-outline">
              Ver catálogo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
