import React from 'react';
import { Users, Building2, GraduationCap } from 'lucide-react';

interface StatsCardProps {
  totalEmployees: number;
  totalDepartments: number;
  totalFaculty: number;
}

export default function StatsCard({ totalEmployees, totalDepartments, totalFaculty }: StatsCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <div className="flex items-center">
          <Users className="w-8 h-8 text-blue-600" />
          <div className="ml-4">
            <p className="text-sm text-gray-600">Total Employees</p>
            <p className="text-2xl font-bold text-gray-800">{totalEmployees}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <div className="flex items-center">
          <Building2 className="w-8 h-8 text-blue-600" />
          <div className="ml-4">
            <p className="text-sm text-gray-600">Departments</p>
            <p className="text-2xl font-bold text-gray-800">{totalDepartments}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <div className="flex items-center">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <div className="ml-4">
            <p className="text-sm text-gray-600">Faculty Members</p>
            <p className="text-2xl font-bold text-gray-800">{totalFaculty}</p>
          </div>
        </div>
      </div>
    </div>
  );
}