import React, { useState } from 'react';
import Confetti from 'react-confetti';

const CompoundInterest = () => {
    const [principal, setPrincipal] = useState(0);
    const [rate, setRate] = useState(0);
    const [years, setYears] = useState(0);
    const [frequency, setFrequency] = useState(1);
    const [result, setResult] = useState<number | null>(null);
    const [showConfetti, setShowConfetti] = useState(false);

    const calculateCompoundInterest = (e: React.FormEvent) => {
        e.preventDefault();
        const r = rate / 100;
        const amount = principal * Math.pow(1 + r / frequency, frequency * years);
        setResult(amount);
        setShowConfetti(true);
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center">Compound Interest Calculator</h1>
            <form onSubmit={calculateCompoundInterest} className="mt-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Principal Amount</label>
                    <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(Number(e.target.value))}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Rate of Interest (%)</label>
                    <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Number of Years</label>
                    <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Compound Frequency (times per year)</label>
                    <input
                        type="number"
                        value={frequency}
                        onChange={(e) => setFrequency(Number(e.target.value))}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </form>
            {result !== null && (
                <div className="mt-5 text-center">
                    <p className="text-lg font-semibold">The result is: {result.toFixed(2)}</p>
                </div>
            )}
            {showConfetti && <Confetti />}
        </div>
    );
};

export default CompoundInterest;