import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0f172a', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'sans-serif' }}>
      <h1>Sistema de Alerta de Segurança - MZ</h1>
      <Link href="/report" style={{ backgroundColor: '#ef4444', padding: '15px 30px', borderRadius: '10px', color: 'white', textDecoration: 'none', fontWeight: 'bold', marginTop: '20px' }}>
        CLIQUE AQUI PARA REPORTAR
      </Link>
    </div>
  );
}
