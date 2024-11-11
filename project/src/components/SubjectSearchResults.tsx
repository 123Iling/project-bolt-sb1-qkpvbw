import React from 'react';
import { BookOpen } from 'lucide-react';
import type { Employee } from '../types';

interface SubjectSearchResultsProps {
  results: {
    subject: {
      code: string;
      name: string;
      units: number;
      schedule?: string;
    };
    professor: Employee;
  }[];
  onProfessorClick: (professor: Employee) => void;
}

export default function SubjectSearchResults({ results, onProfessorClick }: SubjectSearchResultsProps) {
  if (!results.length) return null;

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
        Subject Search Results
      </h3>
      <div className="space-y-4">
        {results.map(({ subject, professor }) => (
          <div
            key={`${subject.code}-${professor.id}`}
            className="bg-white rounded-lg shadow-md border border-gray-100 p-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-800">{subject.name}</h4>
                <p className="text-sm text-gray-600">{subject.code} • {subject.units} units</p>
                {subject.schedule && (
                  <p className="text-sm text-blue-600 mt-1">{subject.schedule}</p>
                )}
              </div>
              <button
                onClick={() => onProfessorClick(professor)}
                className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800"
              >
                <img
                  src={professor.image}
                  alt={professor.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-right">
                  <div className="font-medium">{professor.name}</div>
                  <div className="text-xs text-gray-600">{professor.role}</div>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}