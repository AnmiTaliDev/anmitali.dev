import Terminal from '@/components/Terminal/Terminal';
import FetchInfo from '@/components/FetchDisplay/FetchInfo';

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '1rem',
      }}
    >
      <Terminal>
        <FetchInfo />
      </Terminal>
    </main>
  );
}
