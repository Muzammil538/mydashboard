import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

export const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (num: string) => {
    setDisplay(display === '0' ? num : display + num);
    setEquation(equation + num);
  };

  const handleOperator = (op: string) => {
    setDisplay('0');
    setEquation(equation + ' ' + op + ' ');
  };

  const calculate = () => {
    try {
      const result = eval(equation);
      setDisplay(result.toString());
      setEquation(result.toString());
    } catch (error) {
      setDisplay('Error');
      setEquation('');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  const Button = ({ value, onClick, className = '' }: { value: string; onClick: () => void; className?: string }) => (
    <button
      onClick={onClick}
      className={`p-4 text-lg font-semibold rounded-lg hover:bg-opacity-90 ${className}`}
    >
      {value}
    </button>
  );

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Calculator</h2>
        <CalcIcon className="w-6 h-6 text-blue-500" />
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <div className="text-right text-gray-600 text-sm">{equation || '\u00A0'}</div>
        <div className="text-right text-3xl font-bold">{display}</div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <Button value="7" onClick={() => handleNumber('7')} className="bg-gray-100" />
        <Button value="8" onClick={() => handleNumber('8')} className="bg-gray-100" />
        <Button value="9" onClick={() => handleNumber('9')} className="bg-gray-100" />
        <Button value="÷" onClick={() => handleOperator('/')} className="bg-blue-100 text-blue-600" />
        
        <Button value="4" onClick={() => handleNumber('4')} className="bg-gray-100" />
        <Button value="5" onClick={() => handleNumber('5')} className="bg-gray-100" />
        <Button value="6" onClick={() => handleNumber('6')} className="bg-gray-100" />
        <Button value="×" onClick={() => handleOperator('*')} className="bg-blue-100 text-blue-600" />
        
        <Button value="1" onClick={() => handleNumber('1')} className="bg-gray-100" />
        <Button value="2" onClick={() => handleNumber('2')} className="bg-gray-100" />
        <Button value="3" onClick={() => handleNumber('3')} className="bg-gray-100" />
        <Button value="-" onClick={() => handleOperator('-')} className="bg-blue-100 text-blue-600" />
        
        <Button value="C" onClick={clear} className="bg-red-100 text-red-600" />
        <Button value="0" onClick={() => handleNumber('0')} className="bg-gray-100" />
        <Button value="=" onClick={calculate} className="bg-green-100 text-green-600" />
        <Button value="+" onClick={() => handleOperator('+')} className="bg-blue-100 text-blue-600" />
      </div>
    </div>
  );
};