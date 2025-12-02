'use client';

import React from 'react';
import { FormSelectProps } from '@/types/formSelect';

export const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label,
  options,
  onChange,
  required,
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-2 font-medium text-gray-300">
        {label}
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          onChange={onChange}
          className="w-full p-3 pr-10 rounded-lg border border-yellow-500 bg-neutral-900 text-gray-100 text-base 
                     appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="">Select</option>
          {options.map((opt, idx) =>
            typeof opt === 'string' ? (
              <option key={idx} value={opt.toLowerCase()}>
                {opt}
              </option>
            ) : (
              <option key={idx} value={opt.value}>
                {opt.label}
              </option>
            )
          )}
        </select>

        {/* Custom dropdown arrow */}
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-400 pointer-events-none">
          ▼
        </span>
      </div>
    </div>
  );
};
