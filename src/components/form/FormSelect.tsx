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
      <label htmlFor={name} className="block mb-2 font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          onChange={onChange}
          className="w-full p-3 pr-10 rounded-lg border border-gray-200 bg-white text-gray-900 text-base
                     appearance-none focus:outline-none focus:border-[#376941] focus:ring-1 focus:ring-[#376941]"
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
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none text-xs">
          ▼
        </span>
      </div>
    </div>
  );
};
