import Image from 'next/image';

interface Role {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  color: string;
  bg: string;
}

const roles: Role[] = [
  {
    title: 'Pencari Kerja',
    subtitle: 'Asisten Rumah Tangga',
    desc: 'Temukan pekerjaan yang sesuai dengan keahlian Anda dengan gaji yang transparan.',
    img: '/role_helper.png',
    color: 'var(--primary)',
    bg: 'var(--primary-light)'
  },
  {
    title: 'Pencari Jasa',
    subtitle: 'Majikan',
    desc: 'Rekrut asisten rumah tangga terpercaya yang sudah diverifikasi identitas dan keahliannya.',
    img: '/role_employer.png',
    color: 'var(--secondary)',
    bg: 'var(--secondary-light)'
  },
  {
    title: 'Penyalur',
    subtitle: 'Yayasan',
    desc: 'Kelola database pekerja dan salurkan ke majikan dengan sistem manajemen yang modern.',
    img: '/role_agency.png',
    color: 'var(--accent)',
    bg: '#E0E7FF'
  }
];

export default function RoleCards() {
  return (
    <section id="roles" className="container" style={{ padding: '80px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Siapa yang Bisa Bergabung?</h2>
        <p style={{ color: '#666', fontSize: '1.2rem' }}>Platform kami dirancang untuk semua ekosistem rumah tangga</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {roles.map((role, index) => (
          <div key={index} className="glass-card" style={{ 
            padding: '40px 30px', 
            textAlign: 'center', 
            transition: 'transform 0.3s ease',
            cursor: 'default'
          }}>
            <div style={{ 
              width: '120px', 
              height: '120px', 
              margin: '0 auto 30px', 
              position: 'relative',
              background: role.bg,
              borderRadius: '50%',
              padding: '20px'
            }}>
               <Image 
                 src={role.img} 
                 alt={role.title} 
                 fill 
                 style={{ objectFit: 'contain', padding: '15px' }}
               />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '5px', color: `hsl(${role.color})` }}>{role.title}</h3>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '15px', color: '#888', fontWeight: 500 }}>{role.subtitle}</h4>
            <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '25px' }}>{role.desc}</p>
            <button className="btn" style={{ 
              border: `2px solid hsl(${role.color})`, 
              color: `hsl(${role.color})`,
              background: 'transparent'
            }}>
              Daftar Sebagai {role.title}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
