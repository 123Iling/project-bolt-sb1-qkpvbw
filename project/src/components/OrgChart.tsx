import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Employee } from '../types';

interface OrgChartProps {
  data: Employee;
  onEmployeeClick: (employee: Employee) => void;
}

function EmployeeNode({ employee, onEmployeeClick }: { employee: Employee; onEmployeeClick: (employee: Employee) => void }) {
  return (
    <div className="flex flex-col items-center">
      <div 
        onClick={() => onEmployeeClick(employee)}
        className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md border border-blue-100 w-64 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      >
        <img
          src={employee.image}
          alt={employee.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 mb-2 shadow-inner"
        />
        <h3 className="font-bold text-gray-800 text-center">{employee.name}</h3>
        <p className="text-sm text-blue-600 text-center font-medium mt-1">{employee.role}</p>
        {employee.subjects && (
          <div className="mt-2 text-xs text-gray-500">
            {employee.subjects.length} subject{employee.subjects.length !== 1 ? 's' : ''} handled
          </div>
        )}
      </div>

      {employee.children && employee.children.length > 0 && (
        <>
          <div className="w-px h-8 bg-blue-200" />
          <ChevronDown className="w-6 h-6 text-blue-400 -mt-3 mb-2" />
          <div className="flex gap-8">
            {employee.children.map((child) => (
              <EmployeeNode key={child.id} employee={child} onEmployeeClick={onEmployeeClick} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function OrgChart({ data, onEmployeeClick }: OrgChartProps) {
  return (
    <div className="w-full overflow-x-auto p-8">
      <div className="min-w-max">
        <EmployeeNode employee={data} onEmployeeClick={onEmployeeClick} />
      </div>
    </div>
  );
}