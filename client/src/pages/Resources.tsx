import { ExternalLink, MapPin, Globe, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Design Philosophy: Minimalismo Terapêutico
 * Página de recursos com informações sobre SA em diferentes regiões
 */

export default function Resources() {
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
            <a href="/recursos" className="text-[#4A90A4] font-semibold">
              Recursos
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-b from-[#F5F7FA] to-white py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-[#2C3E50] mb-4">Encontre SA em Sua Região</h1>
          <p className="text-xl text-[#7A8FA3] max-w-3xl">
            Sexólicos Anônimos existe em muitos países. Se você não está em Porto, encontre reuniões e recursos em sua região.
          </p>
        </div>
      </section>

      {/* Portugal Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-8 h-8 text-[#4A90A4]" />
            <h2 className="text-3xl font-bold text-[#2C3E50]">Portugal</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SA Porto */}
            <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-lg p-8 border border-[#E8EDF3] hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">SA Porto</h3>
              <p className="text-[#7A8FA3] mb-6">
                Reuniões por Zoom todas as segundas e quartas-feiras. Coordenação do Brasil.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Telefone</p>
                    <a href="tel:+5599984687433" className="text-[#4A90A4] hover:text-[#3A7A94]">
                      +55 99984687433
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Email</p>
                    <a href="mailto:eduardoreissousa238@gmail.com" className="text-[#4A90A4] hover:text-[#3A7A94]">
                      eduardoreissousa238@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <a href="/" className="inline-flex items-center gap-2 text-[#4A90A4] hover:text-[#3A7A94] font-semibold">
                Voltar para SA Porto <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* SAA Portugal */}
            <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-lg p-8 border border-[#E8EDF3] hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">SAA Portugal - Adictos ao Sexo Anônimos</h3>
              <p className="text-[#7A8FA3] mb-6">
                Reuniões em Lisboa e outras cidades de Portugal. Programa de 12 passos para recuperação de vício sexual.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Email</p>
                    <a href="mailto:saalisbon@gmail.com" className="text-[#4A90A4] hover:text-[#3A7A94]">
                      saalisbon@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="https://saaportugal.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#4A90A4] hover:text-[#3A7A94] font-semibold"
              >
                Visitar Site <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* SRA Portugal */}
            <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-lg p-8 border border-[#E8EDF3] hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">SRA Portugal - Recuperação Sexual Anônimos</h3>
              <p className="text-[#7A8FA3] mb-6">
                Programa de recuperação para comportamentos sexuais compulsivos. Reuniões em diferentes cidades de Portugal.
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-sm text-[#7A8FA3]">
                  Sem quotas ou taxas de admissão. O único requisito é o desejo de parar com comportamentos sexuais compulsivos.
                </p>
              </div>
              <a
                href="https://www.sra-portugal.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#4A90A4] hover:text-[#3A7A94] font-semibold"
              >
                Visitar Site <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brasil Section */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-[#4A90A4]" />
            <h2 className="text-3xl font-bold text-[#2C3E50]">Brasil</h2>
          </div>

          <div className="bg-white rounded-lg p-8 border border-[#E8EDF3] hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Sexólicos Anônimos Brasil</h3>
            <p className="text-[#7A8FA3] mb-6">
              SA Brasil é uma irmandade de homens e mulheres que compartilham sua experiência, força e esperança para resolver seu problema comum. Reuniões em várias cidades brasileiras.
            </p>
            <div className="space-y-3 mb-6">
              <p className="text-[#7A8FA3]">
                <strong>Propósito:</strong> Ajudar pessoas que lutam com comportamentos sexuais compulsivos através do programa de 12 passos.
              </p>
              <p className="text-[#7A8FA3]">
                <strong>Localidades:</strong> Reuniões em São Paulo, Rio de Janeiro, Minas Gerais, e outras cidades.
              </p>
            </div>
            <a
              href="https://www.sabrasil.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#4A90A4] hover:text-[#3A7A94] font-semibold"
            >
              Visitar Site SA Brasil <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* International Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-[#4A90A4]" />
            <h2 className="text-3xl font-bold text-[#2C3E50]">Internacional</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SA International */}
            <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-lg p-8 border border-[#E8EDF3] hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Sexaholics Anonymous - SA Internacional</h3>
              <p className="text-[#7A8FA3] mb-6">
                A organização internacional de Sexólicos Anônimos. Encontre reuniões em mais de 50 países ao redor do mundo.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Telefone (EUA)</p>
                    <p className="text-[#7A8FA3]">+1 615-370-6062</p>
                    <p className="text-[#7A8FA3]">Gratuito (EUA/Canadá): 866-424-8777</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#4A90A4] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#2C3E50]">Email</p>
                    <a href="mailto:saico@sa.org" className="text-[#4A90A4] hover:text-[#3A7A94]">
                      saico@sa.org
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="https://www.sa.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#4A90A4] hover:text-[#3A7A94] font-semibold"
              >
                Visitar Site <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Spain */}
            <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-lg p-8 border border-[#E8EDF3] hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Sexólicos Anónimos - Espanha</h3>
              <p className="text-[#7A8FA3] mb-6">
                Reuniões de Sexólicos Anónimos em várias cidades da Espanha. Programa de recuperação com 12 passos.
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-sm text-[#7A8FA3]">
                  Encontre informações sobre reuniões em Madrid, Barcelona, Valencia e outras cidades.
                </p>
              </div>
              <a
                href="https://sexolicosanonimos.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#4A90A4] hover:text-[#3A7A94] font-semibold"
              >
                Visitar Site <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Não Encontrou Sua Região?</h2>
          <p className="text-lg text-[#7A8FA3] mb-8">
            Se você está em uma região onde não há reuniões de SA listadas, entre em contato com a organização internacional. Eles podem ajudar você a encontrar apoio ou até iniciar um novo grupo.
          </p>
          <a
            href="https://www.sa.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4A90A4] hover:bg-[#3A7A94] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
          >
            Contactar SA Internacional
          </a>
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
                <li><a href="/recursos" className="hover:text-white transition-colors">Recursos</a></li>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
