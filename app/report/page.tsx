'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ReportPage() {
  const router = useRouter();

  // Estados para capturar as escolhas do utilizador
  const [emergencia, setEmergencia] = useState('Roubo / Assalto');
  const [provincia, setProvincia] = useState('Maputo Cidade');
  const [detalhes, setDetalhes] = useState('');

  // Estilo padronizado para os campos (UX Mobile-First)
  const fieldStyle = {
    width: '100%',
    padding: '16px',
    backgroundColor: '#1e293b',
    color: 'white',
    border: '1px solid #334155',
    borderRadius: '14px',
    fontSize: '16px',
    marginBottom: '20px',
    outline: 'none',
    display: 'block'
  };

  const handleEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    if (!detalhes.trim()) {
      alert("Por favor, descreva brevemente a situação para ajudar as autoridades.");
      return;
    }
    // Simulação de envio para a PRM/Emergência
    alert(`🚨 ALERTA ENVIADO COM SUCESSO!\n\nTipo: ${emergencia}\nLocal: ${provincia}\n\nAs autoridades locais e unidades de resposta foram notificadas.`);
    router.push('/');
  };

  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', color: 'white', fontFamily: 'system-ui' }}>
      
      {/* Header Profissional */}
      <header style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid #334155', background: '#1e293b' }}>
        <Link href="/" style={{ textDecoration: 'none', fontSize: '24px', color: '#ef4444', fontWeight: 'bold' }}>←</Link>
        <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>Novo Relatório de Emergência</h1>
      </header>

      <main style={{ padding: '25px 20px' }}>
        <form onSubmit={handleEnvio}>
          
          {/* TIPO DE INCIDENTE */}
          <label style={{ display: 'block', fontSize: '13px', color: '#ef4444', fontWeight: 'bold', marginBottom: '8px' }}>
            TIPO DE EMERGÊNCIA
          </label>
          <select 
            value={emergencia}
            onChange={(e) => setEmergencia(e.target.value)}
            style={fieldStyle}
          >
            <option value="Roubo / Assalto">Roubo / Assalto</option>
            <option value="Sequestro / Rapto">Sequestro / Rapto</option>
            <option value="Tentativa de Violação">Tentativa de Violação</option>
            <option value="Violência / Agressão">Violência / Agressão</option>
            <option value="Ferimento Grave">Ferimento Grave</option>
            <option value="Acidente de Viação">Acidente de Viação</option>
            <option value="Outros">Outros</option>
          </select>

          {/* LOCALIZAÇÃO (TODAS AS 11 PROVÍNCIAS DE MOÇAMBIQUE) */}
          <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', fontWeight: 'bold', marginBottom: '8px' }}>
            PROVÍNCIA DA OCORRÊNCIA
          </label>
          <select 
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
            style={fieldStyle}
          >
            <option value="Maputo Cidade">Maputo Cidade</option>
            <option value="Maputo Província">Maputo Província</option>
            <option value="Gaza">Gaza</option>
            <option value="Inhambane">Inhambane</option>
            <option value="Sofala">Sofala</option>
            <option value="Manica">Manica</option>
            <option value="Tete">Tete</option>
            <option value="Zambézia">Zambézia</option>
            <option value="Nampula">Nampula</option>
            <option value="Niassa">Niassa</option>
            <option value="Cabo Delgado">Cabo Delgado</option>
          </select>

          {/* DESCRIÇÃO DOS DETALHES */}
          <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', fontWeight: 'bold', marginBottom: '8px' }}>
            DETALHES ADICIONAIS
          </label>
          <textarea 
            placeholder="Ex: Cor do veículo, número de suspeitos, ponto de referência..."
            value={detalhes}
            onChange={(e) => setDetalhes(e.target.value)}
            style={{ ...fieldStyle, height: '120px', resize: 'none' }}
          />

          {/* AVISO DE SEGURANÇA E GPS */}
          <div style={{ padding: '15px', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', border: '1px solid #10b981', marginBottom: '30px', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '12px', color: '#10b981', fontWeight: '600' }}>
              📍 Sua localização GPS exata será enviada com este alerta.
            </p>
          </div>

          {/* BOTÃO DE SUBMISSÃO FINAL */}
          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '20px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              fontWeight: '900',
              fontSize: '18px',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(239, 68, 68, 0.3)'
            }}
          >
            CONFIRMAR E ENVIAR AGORA
          </button>
        </form>
      </main>
    </div>
  );
}
