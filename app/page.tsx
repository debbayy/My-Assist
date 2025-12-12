import Nav from './components/Nav';
import Hero from './components/Hero';
import RoleCards from './components/RoleCards';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <RoleCards />
      
      {/* Simple Footer inline for now */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '40px', 
        background: 'rgba(255,255,255,0.8)', 
        marginTop: '60px',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}>
        <p style={{ color: '#888' }}>&copy; 2025 JasaBantu. All rights reserved.</p>
      </footer>
    </main>
  );
}
