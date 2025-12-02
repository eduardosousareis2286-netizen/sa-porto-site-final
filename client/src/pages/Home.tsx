import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Heart, Users, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import ContactForm from "@/components/ContactForm";

/**
 * Design Philosophy: Minimalismo Terapêutico
 * - Espaço generoso e respiro visual para reduzir ansiedade
 * - Tipografia clara (Poppins para títulos, Lora para corpo)
 * - Paleta neutra com acento verde-azulado (esperança, cura)
 * - Acessibilidade como prioridade
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#E8EDF3] shadow-sm">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#4A90A4] flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-[#2C3E50]">SA Porto</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#sobre" className="text-[#2C3E50] hover:text-[#4A90A4] transition-colors">
              Sobre
            </a>
            <a href="#reunioes" className="text-[#2C3E50] hover:text-[#4A90A4] transition-colors">
              Reuniões
            </a>
            <a href="/testemunhos" className="text-[#2C3E50] hover:text-[#4A90A4] transition-colors">
              Testemunhos
            </a>
            <a href="/faq" className="text-[#2C3E50] hover:text-[#4A90A4] transition-colors">
              FAQ
            </a>
            <a href="/recursos" className="text-[#2C3E50] hover:text-[#4A90A4] transition-colors">
              Recursos
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-[#F5F7FA]">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/hero-hope.jpg"
            alt="Esperança e recuperação"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold text-[#2C3E50] mb-6 leading-tight">
              Comece Sua Jornada de Recuperação
            </h2>
            <p className="text-xl text-[#7A8FA3] mb-8 leading-relaxed">
              Sexólicos Anônimos é uma comunidade de apoio onde homens e mulheres compartilham experiência, força e esperança para resolver seu problema comum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-[#4A90A4] hover:bg-[#3A7A94] text-white px-8 py-6 text-lg rounded-lg transition-all hover:shadow-lg"
                onClick={() => document.getElementById("reunioes")?.scrollIntoView({ behavior: "smooth" })}
              >
                Encontre uma Reunião
              </Button>
              <Button
                variant="outline"
                className="border-[#4A90A4] text-[#4A90A4] hover:bg-[#F5F7FA] px-8 py-6 text-lg rounded-lg"
                onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-[#2C3E50] mb-6">O que é Sexólicos Anônimos?</h3>
              <p className="text-lg text-[#7A8FA3] mb-6 leading-relaxed">
                Sexólicos Anônimos é uma irmandade de homens e mulheres que compartilham sua experiência, força e esperança uns com os outros para resolver seu problema comum e ajudar outros a se recuperarem.
              </p>
              <p className="text-lg text-[#7A8FA3] mb-6 leading-relaxed">
                Somos um programa de 12 passos baseado em princípios espirituais que levam a uma transformação pessoal profunda. Não há quotas, taxas de admissão ou requisitos além do desejo de parar com comportamentos sexuais compulsivos.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-[#4A90A4] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#2C3E50] mb-2">Comunidade de Apoio</h4>
                    <p className="text-[#7A8FA3]">Encontre pessoas que entendem seu problema e estão na mesma jornada.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Lightbulb className="w-6 h-6 text-[#4A90A4] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#2C3E50] mb-2">Programa Comprovado</h4>
                    <p className="text-[#7A8FA3]">Os 12 passos têm ajudado milhares de pessoas a alcançar sobriedade sexual.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-[#4A90A4] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#2C3E50] mb-2">Confidencialidade Total</h4>
                    <p className="text-[#7A8FA3]">Seu anonimato é protegido. Ninguém saberá que você está aqui.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/community-support.jpg"
                alt="Comunidade de apoio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meetings Section */}
      <section id="reunioes" className="py-24 bg-[#F5F7FA]">
        <div className="container max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-[#2C3E50] mb-4 text-center">Reuniões em Porto</h3>
          <p className="text-lg text-[#7A8FA3] text-center mb-16 max-w-2xl mx-auto">
            Temos reuniões regulares onde você pode se conectar com outras pessoas e começar sua recuperação. Todas as reuniões são confidenciais e acolhedoras.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Meeting 1 */}
            <div className="bg-white rounded-lg p-8 border border-[#E8EDF3] hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-bold text-[#2C3E50] mb-4">Reunião SA Porto - Segunda-feira</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Reunião Online</p>
                    <p className="text-[#7A8FA3]">Via Zoom</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Segundas-feiras</p>
                    <p className="text-[#7A8FA3]">20:00</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#E8EDF3] pt-6">
                <p className="text-sm text-[#7A8FA3] mb-4">
                  <strong>Link do Zoom:</strong> Em breve
                </p>
                <p className="text-sm text-[#7A8FA3]">
                  Para obter o link da reunião, entre em contato conosco.
                </p>
              </div>
            </div>

            {/* Meeting 2 */}
            <div className="bg-white rounded-lg p-8 border border-[#E8EDF3] hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-bold text-[#2C3E50] mb-4">Reunião SA Porto - Quarta-feira</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Reunião Online</p>
                    <p className="text-[#7A8FA3]">Via Zoom</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Quartas-feiras</p>
                    <p className="text-[#7A8FA3]">20:30</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#E8EDF3] pt-6">
                <p className="text-sm text-[#7A8FA3] mb-4">
                  <strong>Link do Zoom:</strong> Em breve
                </p>
                <p className="text-sm text-[#7A8FA3]">
                  Para obter o link da reunião, entre em contato conosco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src="/growth-journey.jpg"
                alt="Jornada de crescimento"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-bold text-[#2C3E50] mb-6">Sua Jornada de Recuperação</h3>
              <p className="text-lg text-[#7A8FA3] mb-6 leading-relaxed">
                A recuperação é uma jornada pessoal. Cada pessoa avança no seu próprio ritmo, com o apoio de uma comunidade que entende verdadeiramente o que você está vivenciando.
              </p>
              <p className="text-lg text-[#7A8FA3] mb-8 leading-relaxed">
                Os 12 Passos nos levam a uma transformação espiritual profunda. Você aprenderá a:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <span className="text-[#4A90A4] font-bold">✓</span>
                  <span className="text-[#7A8FA3]">Reconhecer e compreender seu problema</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A90A4] font-bold">✓</span>
                  <span className="text-[#7A8FA3]">Desenvolver uma conexão espiritual</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A90A4] font-bold">✓</span>
                  <span className="text-[#7A8FA3]">Reparar relacionamentos danificados</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A90A4] font-bold">✓</span>
                  <span className="text-[#7A8FA3]">Viver uma vida livre e autêntica</span>
                </li>
              </ul>
              <Button className="bg-[#4A90A4] hover:bg-[#3A7A94] text-white px-8 py-6 text-lg rounded-lg transition-all hover:shadow-lg">
                Comece Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato-form" className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="jornada" className="py-20 bg-[#F5F7FA]">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 text-center">Sua Jornada de Recuperação</h2>
          <p className="text-lg text-[#7A8FA3] text-center mb-12">
            Tem dúvidas? Quer saber mais? Estamos aqui para ajudar. Não hesite em nos contactar.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 border border-[#E8EDF3] text-center hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 text-[#4A90A4] mx-auto mb-4" />
              <h4 className="font-semibold text-[#2C3E50] mb-2">Email</h4>
              <a
                href="mailto:eduardoreissousa238@gmail.com"
                className="text-[#4A90A4] hover:text-[#3A7A94] transition-colors"
              >
                eduardoreissousa238@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#E8EDF3] text-center hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 text-[#4A90A4] mx-auto mb-4" />
              <h4 className="font-semibold text-[#2C3E50] mb-2">Telefone</h4>
              <a
                href="tel:+5599984687433"
                className="text-[#4A90A4] hover:text-[#3A7A94] transition-colors"
              >
                +55 99984687433
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#E8EDF3] text-center hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[#4A90A4] mx-auto mb-4" />
              <h4 className="font-semibold text-[#2C3E50] mb-2">Confidencialidade</h4>
              <p className="text-[#7A8FA3]">Seu anonimato é garantido</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-12 border border-[#E8EDF3]">
            <h4 className="text-2xl font-bold text-[#2C3E50] mb-6">Mensagem de Esperança</h4>
            <p className="text-lg text-[#7A8FA3] leading-relaxed mb-6">
              Se você está lutando com comportamentos sexuais compulsivos, saiba que não está sozinho. Milhares de pessoas encontraram esperança e recuperação através de Sexólicos Anônimos.
            </p>
            <p className="text-lg text-[#7A8FA3] leading-relaxed">
              O único requisito para ser membro é o desejo de parar. Não há julgamento, apenas compreensão mútua e apoio genuíno. Sua jornada de recuperação pode começar hoje.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-[#4A90A4] flex items-center justify-center">
                  <Heart className="w-4 h-4" />
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
                <li><a href="/testemunhos" className="hover:text-white transition-colors">Testemunhos</a></li>
                <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/recursos" className="hover:text-white transition-colors">Recursos</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Recursos</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="https://www.sa.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SA Internacional</a></li>
                <li><a href="https://www.sabrasil.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SA Brasil</a></li>
                <li><a href="https://saaportugal.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SAA Portugal</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Contato</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Email: eduardoreissousa238@gmail.com</li>
                <li>Telefone: +55 99984687433</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Sexólicos Anônimos Porto. Todos os direitos reservados.</p>
            <p className="mt-2">O anonimato é a base espiritual de todos os nossos tradições.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
