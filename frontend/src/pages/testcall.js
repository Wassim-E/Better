import { useEffect, useState } from 'react';
import { callAPI } from '../api/api-call';
import { useAppContext } from '../lib/Context';

export default function TestCallPage() {
  const [result, setResult] = useState(null);
  const { notifyError } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await callAPI('testcall/');
        setResult(data);
      } catch (error) {
        console.error('Failed to call /testcall/ API:', error);
        notifyError('Failed to load data from the server.');
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Test API Call</h1>
      {result ? (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
