import React from 'react';
import { X, Phone, Mail, MapPin, BookOpen } from 'lucide-react';
import type { Employee, Subject } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee: Employee;
}

function SubjectList({ subjects }: { subjects?: Subject[] }) {
  if (!subjects?.length) return null;

  return (
    <div className="mt-6 border-t border-gray-100 pt-6">
      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
        <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
        Subjects Handled
      </h4>
      <div className="space-y-2">
        {subjects.map((subject) => (
          <div
            key={subject.code}
            className="bg-gray-50 p-3 rounded-lg"
          >
            <div className="font-medium text-gray-800">{subject.name}</div>
            <div className="text-sm text-gray-600 flex justify-between">
              <span>{subject.code}</span>
              <span>{subject.units} units</span>
            </div>
            {subject.schedule && (
              <div className="text-sm text-blue-600 mt-1">{subject.schedule}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ContactModal({ isOpen, onClose, employee }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex flex-col items-center">
          <img
            src={employee.image}
            alt={employee.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">{employee.name}</h3>
          <p className="text-blue-600 mb-6">{employee.role}</p>
          
          <div className="w-full space-y-4">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-600 mr-3" />
              <span>{employee.phone || '+63 (123) 456-7890'}</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-600 mr-3" />
              <span>{employee.email || `${employee.name.toLowerCase().replace(' ', '.')}@pit.edu.ph`}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-600 mr-3" />
              <span>{employee.office || 'Main Campus, PIT'}</span>
            </div>
          </div>

          <SubjectList subjects={employee.subjects} />
        </div>
      </div>
    </div>
  );
}