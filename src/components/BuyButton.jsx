import { useState } from 'react';

export default function BuyButton({ productName }) {
  const [status, setStatus] = useState('idle');

  const handleTrigger = () => {
    setStatus('adding');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 2000);
    }, 800);
  };

  return (
    <button 
      onClick={handleTrigger}
      disabled={status === 'adding'}
      style={{
        width: '100%',
        padding: '12px 16px',
        backgroundColor: status === 'success' ? '#059669' : status === 'adding' ? '#27272a' : '#ffffff',
        color: status === 'success' || status === 'adding' ? '#ffffff' : '#000000',
        fontSize: '12px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        border: 'none',
        borderRadius: '4px',
        cursor: status === 'adding' ? 'not-allowed' : 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      {status === 'idle' && `Add to Bag`}
      {status === 'adding' && `Securing Order...`}
      {status === 'success' && `✓ Added`}
    </button>
  );
}
