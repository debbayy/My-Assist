'use client';

import Link from 'next/link';


export default function Nav() {
  return (
    <nav className="glass-card" style={{ 
      position: 'fixed', 
      top: '20px', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      width: '90%', 
      maxWidth: '1200px', 
      padding: '15px 30px', 
      zIndex: 100, 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'hsl(var(--primary))' }}>
        JasaBantu
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#" style={{ fontWeight: 500 }}>Beranda</a>
        <a href="#roles" style={{ fontWeight: 500 }}>Layanan</a>
        <a href="#" style={{ fontWeight: 500 }}>Kontak</a>
      </div>
      <Link href="/login"
      className="btn btn-primary">
        Masuk
      </Link>
    </nav>
  );
}
