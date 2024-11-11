import React from 'react';
import { MapPin, Users } from 'lucide-react';

interface OfficeCardProps {
  name: string;
  location: string;
  employeeCount: number;
  image: string;
  onClick: () => void;
}

export default function OfficeCard({ name, location, employeeCount, image, onClick }: OfficeCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group border border-gray-100"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-blue-600" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2 text-blue-600" />
            <span>{employeeCount} Staff Members</span>
          </div>
        </div>
      </div>
    </div>
  );
}