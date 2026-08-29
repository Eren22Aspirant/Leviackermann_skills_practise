import { useState } from 'react';

export default function BuyButton({ productName }) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'adding' | 'success'

  const handleTrigger = () => {
    setStatus('adding');
    
    // Simulate real database checkout latency lag
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 2000);
    }, 800);
  };

  return (
    <button 
      onClick={handleTrigger}
      disabled={status === 'adding'}
      className={`w-full py-3 px-4 rounded text-xs font-bold uppercase tracking-widest transition-all duration-300 transform active:scale-[0.98] ${
        status === 'success' 
          ? 'bg-emerald-600 text-white' 
          : status === 'adding'
          ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
          : 'bg-white text-black hover:bg-zinc-200'
      }`}
    >
      {status === 'idle' && `Add to Bag`}
      {status === 'adding' && `Securing Order...`}
      {status === 'success' && `✓ Added Successfully`}
    </button>
  );
}
