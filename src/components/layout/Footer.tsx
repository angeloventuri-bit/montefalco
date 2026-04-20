import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { SITE, NAV_LINKS } from '@/data/site';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg">
      <div className="container-site pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr]">
          <div>
            <Link to="/" className="inline-block mb-6">
              <Logo className="text-2xl" />
            </Link>
            <p className="text-body max-w-sm">
              Distribuidora premium de mármores, granitos, quartzos e pedras naturais nacionais e
              importadas. Qualidade para os projetos mais exigentes do Brasil.
            </p>
            <div className="flex items-center gap-3 mt-8">
              {[
                { href: SITE.social.instagram, label: 'Instagram', Icon: Instagram },
                { href: SITE.social.linkedin, label: 'LinkedIn', Icon: Linkedin },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="h-10 w-10 inline-flex items-center justify-center border border-line-hover text-muted hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-white mb-6">
              Navegação
            </div>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-muted hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-white mb-6">
              Materiais
            </div>
            <ul className="flex flex-col gap-3">
              {['Mármore', 'Granito', 'Quartzo', 'Quartzito', 'Travertino', 'Linha TECH'].map((m) => (
                <li key={m}>
                  <Link
                    to={`/produtos?cat=${encodeURIComponent(m.toLowerCase())}`}
                    className="text-sm text-muted hover:text-gold transition-colors"
                  >
                    {m}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-white mb-6">
              Contato
            </div>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-muted hover:text-gold transition-colors"
                >
                  <Phone size={14} /> {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-muted hover:text-gold transition-colors"
                >
                  <Mail size={14} /> {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-muted">
                <MapPin size={14} className="mt-1 shrink-0" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.city} — {SITE.address.region}
                </span>
              </li>
              <li className="inline-flex items-start gap-2 text-muted">
                <Clock size={14} className="mt-1 shrink-0" />
                <span>
                  {SITE.openingHours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.hours}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-faint">
          <div>
            © {year} {SITE.name}. Todos os direitos reservados. CNPJ {SITE.cnpj}.
          </div>
          <div className="flex gap-6">
            <Link to="/privacidade" className="hover:text-gold transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="hover:text-gold transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
