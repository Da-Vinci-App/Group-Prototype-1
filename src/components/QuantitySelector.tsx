import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="flex items-center gap-3 bg-neutral rounded-lg p-1">
      <button
        onClick={onDecrease}
        className="w-8 h-8 rounded-lg bg-white hover:bg-gray-100 flex items-center justify-center text-text-primary font-semibold transition-colors"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="w-8 text-center font-semibold text-text-primary">{quantity}</span>
      <button
        onClick={onIncrease}
        className="w-8 h-8 rounded-lg bg-primary hover:bg-primary-dark flex items-center justify-center text-white font-semibold transition-colors"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
