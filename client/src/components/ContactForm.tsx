import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

/**
 * Design Philosophy: Minimalismo Terapêutico
 * Componente de Formulário de Contato
 */

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio de email
      const mailtoLink = `mailto:sarecoveryporto@gmail.com?subject=Contato%20de%20${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      toast.success("Formulário enviado! Abrindo seu cliente de email...");

      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-[#E8EDF3] p-8">
      <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Solicite o Link do Zoom</h3>

      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#2C3E50] mb-2">
            Seu Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome (pode ser fictício)"
            className="w-full px-4 py-3 border border-[#E8EDF3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90A4] bg-white text-[#2C3E50]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#2C3E50] mb-2">
            Seu Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu.email@exemplo.com"
            className="w-full px-4 py-3 border border-[#E8EDF3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90A4] bg-white text-[#2C3E50]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[#2C3E50] mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Gostaria de receber o link do Zoom para as reuniões de SA Porto..."
            rows={4}
            className="w-full px-4 py-3 border border-[#E8EDF3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90A4] bg-white text-[#2C3E50] resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#4A90A4] hover:bg-[#3A7A94] text-white py-3 rounded-lg font-semibold transition-all"
        >
          {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
        </Button>
      </form>

      {/* Alternative Contact Methods */}
      <div className="border-t border-[#E8EDF3] pt-8">
        <p className="text-sm text-[#7A8FA3] mb-4 font-semibold">Ou entre em contato conosco diretamente:</p>
        <div className="space-y-3">
          <a
            href="https://wa.me/5599984687433?text=Olá,%20gostaria%20de%20receber%20o%20link%20do%20Zoom%20para%20as%20reuniões%20de%20SA%20Porto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-[#F5F7FA] hover:bg-[#E8EDF3] rounded-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-[#4A90A4]" />
            <div>
              <p className="font-semibold text-[#2C3E50]">WhatsApp</p>
              <p className="text-sm text-[#7A8FA3]">+55 99984687433</p>
            </div>
          </a>

          <a
            href="mailto:sarecoveryporto@gmail.com"
            className="flex items-center gap-3 p-4 bg-[#F5F7FA] hover:bg-[#E8EDF3] rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5 text-[#4A90A4]" />
            <div>
              <p className="font-semibold text-[#2C3E50]">Email</p>
              <p className="text-sm text-[#7A8FA3]">sarecoveryporto@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+5599984687433"
            className="flex items-center gap-3 p-4 bg-[#F5F7FA] hover:bg-[#E8EDF3] rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5 text-[#4A90A4]" />
            <div>
              <p className="font-semibold text-[#2C3E50]">Telefone</p>
              <p className="text-sm text-[#7A8FA3]">+55 99984687433</p>
            </div>
          </a>
        </div>
      </div>

      {/* Privacy Note */}
      <div className="mt-8 p-4 bg-[#F5F7FA] rounded-lg border border-[#E8EDF3]">
        <p className="text-xs text-[#7A8FA3]">
          <strong>Privacidade:</strong> Suas informações são confidenciais e serão usadas apenas para enviar o link do Zoom. Seu anonimato é protegido.
        </p>
      </div>
    </div>
  );
}
