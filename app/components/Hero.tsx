import Image from 'next/image';

export default function Hero() {
  return (
    <section style={{ 
      padding: '160px 0 80px', 
      display: 'flex', 
      alignItems: 'center', 
      minHeight: '100vh',
      gap: '40px'
    }} className="container">
      <div style={{ flex: 1 }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '20px',
          background: 'linear-gradient(to right, hsl(var(--base-dark)), hsl(var(--primary)))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Solusi & Properti <br />
          <span className="text-gradient">Rumah Tangga Anda</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px', lineHeight: 1.6 }}>
          Menghubungkan asisten rumah tangga profesional, majikan, dan yayasan terpercaya dalam satu aplikasi. Mudah, Aman, dan Cepat.
        </p>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
            Mulai Sekarang
          </button>
          <button className="btn" style={{ background: 'white', boxShadow: 'var(--shadow-sm)' }}>
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <div className="animate-float" style={{ 
          position: 'relative', 
          width: '100%', 
          height: '500px'
        }}>
          <Image 
            src="/hero.png" 
            alt="Hero Home" 
            fill 
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
