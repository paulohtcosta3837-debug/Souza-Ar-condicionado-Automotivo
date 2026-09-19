import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/workshopData';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div 
        className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-sky-700 font-bold">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            <h3 id="privacy-modal-title" className="text-lg font-bold text-slate-900">
              Política de Privacidade e Proteção de Dados (LGPD)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Fechar modal de privacidade"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed overflow-y-auto pr-1">
          <p>
            A <strong>Souza Ar-condicionado Automotivo</strong>, sediada em Itaúna - MG, respeita a privacidade de seus clientes e usuários em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei Federal nº 13.709/2018 - LGPD).
          </p>

          <h4 className="text-sm font-bold text-slate-900">1. Coleta e Finalidade dos Dados</h4>
          <p>
            Coletamos exclusivamente as informações estritamente necessárias para a prestação de serviços mecânicos e de climatização automotiva, incluindo: nome, telefone de contato/WhatsApp, modelo do veículo e histórico de manutenções realizadas. Esses dados têm como finalidade o agendamento de serviços, envio de orçamentos previamente autorizados e controle de garantia técnica.
          </p>

          <h4 className="text-sm font-bold text-slate-900">2. Não Compartilhamento com Terceiros</h4>
          <p>
            Seus dados pessoais não são comercializados, alugados ou compartilhados com terceiros para fins publicitários. O contato é realizado diretamente pelo nosso canal oficial de WhatsApp (+55 37 99857-0029).
          </p>

          <h4 className="text-sm font-bold text-slate-900">3. Segurança da Informação</h4>
          <p>
            Empregamos medidas técnicas e organizacionais adequadas para proteger os dados coletados contra acessos não autorizados, perdas ou adulterações.
          </p>

          <h4 className="text-sm font-bold text-slate-900">4. Direitos do Titular</h4>
          <p>
            Em cumprimento ao Art. 18 da LGPD, você possui o direito de confirmar a existência de tratamento, acessar seus dados, solicitar correções de informações incompletas ou requerer a eliminação de seus dados cadastrais a qualquer momento via solicitação expressa em nosso canal de WhatsApp.
          </p>

          <h4 className="text-sm font-bold text-slate-900">5. Contato do Encarregado</h4>
          <p>
            Para quaisquer esclarecimentos ou solicitações relativas à proteção de seus dados pessoais, entre em contato através de nossa oficina no Trevo Padre Eustáquio, Itaúna - MG ou pelo telefone <strong>{BUSINESS_INFO.phoneFormatted}</strong>.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors"
          >
            Entendido e Concordo
          </button>
        </div>
      </div>
    </div>
  );
};
