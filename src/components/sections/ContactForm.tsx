import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SITE } from '@/data/site';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  material: string;
  message: string;
}

const emptyForm: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  material: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const onChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = 'Informe seu nome';
    if (!form.email.trim()) next.email = 'Informe seu e-mail';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'E-mail inválido';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        setForm(emptyForm);
      }, 3500);
    }, 700);
  };

  return (
    <section id="contato" className="py-24 lg:py-36">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal direction="left">
            <div className="label-eyebrow mb-5">Contato</div>
            <h2 className="heading-lg mb-8">
              Fale com nossa <span className="italic text-gold">equipe técnica</span>
            </h2>
            <div className="h-px w-14 bg-gold mb-8" />
            <p className="text-body mb-10">
              Nossa equipe está pronta para orientar na escolha do material ideal, enviar amostras e
              preparar um orçamento personalizado.
            </p>

            <ul className="space-y-6">
              {[
                {
                  Icon: Phone,
                  label: 'Telefone / WhatsApp',
                  value: SITE.phoneDisplay,
                  href: `tel:${SITE.phoneRaw}`,
                },
                {
                  Icon: Mail,
                  label: 'E-mail',
                  value: SITE.email,
                  href: `mailto:${SITE.email}`,
                },
                {
                  Icon: MapPin,
                  label: 'Endereço',
                  value: `${SITE.address.street}\n${SITE.address.city} — ${SITE.address.region}`,
                },
                {
                  Icon: Clock,
                  label: 'Horário',
                  value: SITE.openingHours.map((h) => `${h.days}: ${h.hours}`).join('\n'),
                },
              ].map(({ Icon, label, value, href }) => (
                <li key={label} className="flex gap-5 items-start">
                  <span className="flex h-11 w-11 items-center justify-center border border-line-hover text-gold shrink-0">
                    <Icon size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="text-[0.6875rem] uppercase tracking-[0.2em] text-muted mb-1">
                      {label}
                    </div>
                    {href ? (
                      <a href={href} className="text-white hover:text-gold transition-colors whitespace-pre-line">
                        {value}
                      </a>
                    ) : (
                      <div className="text-white whitespace-pre-line">{value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right">
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fname" className="block text-[0.6875rem] uppercase tracking-[0.15em] text-muted mb-2">
                    Nome completo
                  </label>
                  <input
                    id="fname"
                    type="text"
                    placeholder="Seu nome"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={(e) => onChange('name', e.target.value)}
                    aria-invalid={!!errors.name}
                    className="field"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="fcompany" className="block text-[0.6875rem] uppercase tracking-[0.15em] text-muted mb-2">
                    Empresa
                  </label>
                  <input
                    id="fcompany"
                    type="text"
                    placeholder="Sua empresa"
                    autoComplete="organization"
                    value={form.company}
                    onChange={(e) => onChange('company', e.target.value)}
                    className="field"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="femail" className="block text-[0.6875rem] uppercase tracking-[0.15em] text-muted mb-2">
                    E-mail
                  </label>
                  <input
                    id="femail"
                    type="email"
                    placeholder="seu@email.com"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(e) => onChange('email', e.target.value)}
                    aria-invalid={!!errors.email}
                    className="field"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="fphone" className="block text-[0.6875rem] uppercase tracking-[0.15em] text-muted mb-2">
                    WhatsApp
                  </label>
                  <input
                    id="fphone"
                    type="tel"
                    placeholder="(11) 9 9999-9999"
                    value={form.phone}
                    onChange={(e) => onChange('phone', e.target.value)}
                    className="field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="fmaterial" className="block text-[0.6875rem] uppercase tracking-[0.15em] text-muted mb-2">
                  Material de interesse
                </label>
                <select
                  id="fmaterial"
                  value={form.material}
                  onChange={(e) => onChange('material', e.target.value)}
                  className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23c8a97e%22 stroke-width=%221.5%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-12"
                >
                  <option value="">Selecione um material</option>
                  <option>Mármore</option>
                  <option>Granito</option>
                  <option>Quartzo / Linha Prime</option>
                  <option>Quartzito</option>
                  <option>Travertino</option>
                  <option>Linha TECH / Lâminas</option>
                  <option>Preciso de consultoria</option>
                </select>
              </div>

              <div>
                <label htmlFor="fmessage" className="block text-[0.6875rem] uppercase tracking-[0.15em] text-muted mb-2">
                  Mensagem
                </label>
                <textarea
                  id="fmessage"
                  rows={5}
                  placeholder="Descreva seu projeto, quantidade estimada e prazo…"
                  value={form.message}
                  onChange={(e) => onChange('message', e.target.value)}
                  className="field resize-y min-h-[140px]"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                whileTap={{ scale: 0.98 }}
                className={`btn w-full sm:w-auto justify-center ${
                  status === 'sent' ? 'bg-green-500 text-white' : 'btn-primary'
                }`}
              >
                {status === 'sent' ? (
                  <>
                    <Check size={14} /> Mensagem enviada
                  </>
                ) : status === 'sending' ? (
                  'Enviando…'
                ) : (
                  'Enviar mensagem'
                )}
              </motion.button>

              <p className="text-xs text-muted-faint mt-2">
                Ao enviar, você concorda com nossa{' '}
                <a href="/privacidade" className="underline hover:text-gold">
                  Política de Privacidade
                </a>
                . Nenhum dado é compartilhado com terceiros.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
