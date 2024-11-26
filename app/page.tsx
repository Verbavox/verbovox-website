"use client"
import { useState } from 'react';

const GPTTextGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const generateText = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generateText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch the generated text');
      }

      const data = await response.json();
      setResult(data.text);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-bold mb-4">GPT Text Generator</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt"
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={generateText}
        disabled={loading || !prompt}
        className={`w-full p-2 text-white bg-blue-500 rounded ${loading && 'opacity-50 cursor-not-allowed'}`}
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h2 className="font-semibold mb-2">Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default GPTTextGenerator;
