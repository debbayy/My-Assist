'use client';

import Image from 'next/image';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Side - Visuals */}
      <div style={{ 
        flex: 1, 
        position: 'relative', 
        background: 'linear-gradient(135deg, hsl(var(--primary-light)), hsl(var(--base-light)))',
        // display: 'flex', removed to avoid conflict, handled by desktop-only-split class logic if needed, but actually we want it hidden on mobile so keeping none
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        // Hide on mobile primarily, show on desktop via media query logic usually, but here doing inline
        display: 'none', 
      }} className="desktop-only-split">
         {/* We will add a global css rule for desktop-only-split to show it flex on lg screens */}
         <div className="animate-float" style={{ position: 'relative', width: '100%', maxWidth: '500px', height: '400px' }}>
            <Image 
              src="/hero.png" // Reusing hero image for now, can be specific login image
              alt="Login Visual"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
         </div>
         <div style={{ textAlign: 'center', marginTop: '40px', maxWidth: '400px' }}>
           <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Selamat Datang Kembali!</h2>
           <p style={{ color: '#666' }}>
             Terhubung kembali dengan ekosistem rumah tangga terpercaya nomor 1 di Indonesia.
           </p>
         </div>
      </div>

      {/* Right Side - Form */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '40px',
        background: 'hsl(var(--white))'
      }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <div style={{ marginBottom: '40px' }}>
            <Link href="/" style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: 'hsl(var(--primary))',
              textDecoration: 'none' 
            }}>
              JasaBantu
            </Link>
          </div>

          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Masuk</h1>
          <p style={{ color: '#888', marginBottom: '40px' }}>Masukkan detail akun anda untuk melanjutkan.</p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Email</label>
              <input 
                type="email" 
                placeholder="nama@email.com"
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  borderRadius: '10px', 
                  border: '1px solid #ddd',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  borderRadius: '10px', 
                  border: '1px solid #ddd',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#666' }}>
                <input type="checkbox" /> Ingat Saya
              </label>
              <a href="#" style={{ color: 'hsl(var(--primary))', fontWeight: 500 }}>Lupa Password?</a>
            </div>

            <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
              Masuk
            </button>
          </form>

          <div style={{ marginTop: '30px', textAlign: 'center', color: '#888', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ height: '1px', background: '#eee', flex: 1 }}></span>
            <span>atau</span>
            <span style={{ height: '1px', background: '#eee', flex: 1 }}></span>
          </div>

          <button className="btn" style={{ 
            width: '100%', 
            marginTop: '30px', 
            background: 'white', 
            border: '1px solid #ddd',
            display: 'flex',
            gap: '10px'
          }}>
            <span style={{ fontWeight: 'bold' }}>G</span> Masuk dengan Google
          </button>

          <p style={{ marginTop: '40px', textAlign: 'center', color: '#666' }}>
            Belum punya akun? <Link href="/register" style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>Daftar Sekarang</Link>
          </p>
        </div>
      </div>
      
      <style jsx global>{`
        @media (min-width: 1024px) {
          .desktop-only-split {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
