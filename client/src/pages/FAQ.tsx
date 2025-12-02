import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Design Philosophy: Minimalismo Terapêutico
 * Página de Perguntas Frequentes
 */

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Como é minha primeira reunião?",
    answer:
      "Sua primeira reunião é uma oportunidade para conhecer outras pessoas e entender melhor o programa. Você não precisa falar se não quiser - muitas pessoas apenas ouvem na primeira vez. A reunião começa com leitura de materiais sobre SA, seguida por compartilhamentos de membros e termina com informações sobre como manter contato. Tudo é confidencial e acolhedor.",
  },
  {
    question: "Meu anonimato é realmente protegido?",
    answer:
      "Sim, absolutamente. O anonimato é um princípio fundamental de SA. Ninguém saberá que você está aqui, e ninguém compartilhará informações sobre você. O que é dito na reunião fica na reunião. Você pode usar um nome fictício se preferir, e ninguém perguntará sobre sua vida pessoal.",
  },
  {
    question: "Preciso ter experiência anterior ou estar em crise?",
    answer:
      "Não. O único requisito é o desejo de parar com comportamentos sexuais compulsivos. Você pode estar em crise, recuperado há anos, ou em qualquer ponto do caminho. SA acolhe todos que desejam recuperação, independentemente do estágio em que se encontram.",
  },
  {
    question: "Como funciona o programa de 12 passos?",
    answer:
      "Os 12 passos são um programa de recuperação baseado em princípios espirituais. Eles guiam você através de um processo de auto-descoberta, aceitação, mudança e reparação. Você trabalha os passos no seu próprio ritmo, frequentemente com ajuda de um padrinho ou madrinha (mentor). Não há prazo - cada pessoa avança conforme necessário.",
  },
  {
    question: "Posso participar de reuniões em outros lugares?",
    answer:
      "Sim! SA existe em muitos países. Você pode participar de reuniões em outras cidades, estados ou até países. Visite nossa página de Recursos para encontrar grupos em sua região. Muitos grupos também oferecem reuniões online que você pode acessar de qualquer lugar.",
  },
  {
    question: "Quanto custa participar?",
    answer:
      "SA é completamente gratuito. Não há quotas, taxas de admissão ou contribuições obrigatórias. Alguns grupos aceitam doações voluntárias para cobrir custos de sala e materiais, mas isso é totalmente opcional.",
  },
  {
    question: "Preciso acreditar em Deus para participar?",
    answer:
      "SA é um programa espiritual, não religioso. Você não precisa seguir nenhuma religião específica. A 'Potência Superior' em SA pode ser qualquer coisa que funcione para você - pode ser Deus, a comunidade, a natureza, ou qualquer conceito que ajude você na recuperação.",
  },
  {
    question: "Como obtenho o link do Zoom para as reuniões?",
    answer:
      "Entre em contato conosco através do formulário de contato, email ou WhatsApp. Compartilharemos o link do Zoom com você para que possa participar das reuniões de segunda-feira (20:00) ou quarta-feira (20:30). Você será adicionado ao grupo e receberá todas as informações necessárias.",
  },
  {
    question: "Posso levar um amigo ou familiar?",
    answer:
      "As reuniões de SA são para pessoas que desejam recuperação de comportamentos sexuais compulsivos. Familiares e amigos podem procurar grupos de apoio específicos para eles, como S-Anon (para familiares de pessoas com vício sexual). Converse conosco para mais informações.",
  },
  {
    question: "O que acontece se eu recair?",
    answer:
      "Recaídas são parte do processo de recuperação para muitas pessoas. SA não é um programa de perfeição - é um programa de progresso. Se você recair, você é bem-vindo a voltar à reunião seguinte. Muitos membros têm histórias de recaídas e recuperação. O importante é continuar tentando.",
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#E8EDF3] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between gap-4 hover:bg-[#F5F7FA] transition-colors px-4 -mx-4"
      >
        <h3 className="text-lg font-semibold text-[#2C3E50] text-left">{item.question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[#4A90A4] flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 px-4 text-[#7A8FA3] leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#E8EDF3] shadow-sm">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#4A90A4] flex items-center justify-center">
              <span className="text-white font-bold text-sm">♥</span>
            </div>
            <h1 className="text-xl font-bold text-[#2C3E50]">SA Porto</h1>
          </a>
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-[#2C3E50] hover:text-[#4A90A4] transition-colors">
              Home
            </a>
            <a href="/faq" className="text-[#4A90A4] font-semibold">
              FAQ
            </a>
            <a href="/recursos" className="text-[#2C3E50] hover:text-[#4A90A4] transition-colors">
              Recursos
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-b from-[#F5F7FA] to-white py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-[#2C3E50] mb-4">Perguntas Frequentes</h1>
          <p className="text-xl text-[#7A8FA3]">
            Encontre respostas para as dúvidas mais comuns sobre Sexólicos Anônimos.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg border border-[#E8EDF3] p-8">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Ainda tem dúvidas?</h2>
          <p className="text-lg text-[#7A8FA3] mb-8">
            Entre em contato conosco. Estamos aqui para ajudar e responder qualquer pergunta que você tenha.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:eduardoreissousa238@gmail.com"
              className="inline-block bg-[#4A90A4] hover:bg-[#3A7A94] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Enviar Email
            </a>
            <a
              href="https://wa.me/5599984687433?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20SA%20Porto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#4A90A4] text-[#4A90A4] hover:bg-[#F5F7FA] px-8 py-4 rounded-lg font-semibold transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-[#4A90A4] flex items-center justify-center">
                  <span className="text-white font-bold text-xs">♥</span>
                </div>
                <h5 className="font-bold">SA Porto</h5>
              </div>
              <p className="text-gray-300 text-sm">
                Uma comunidade de apoio para recuperação de comportamentos sexuais compulsivos.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Navegação</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/recursos" className="hover:text-white transition-colors">Recursos</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Contato</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Email: eduardoreissousa238@gmail.com</li>
                <li>WhatsApp: +55 99984687433</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Sexólicos Anônimos Porto. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
