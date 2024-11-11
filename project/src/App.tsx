import React, { useState, useMemo } from 'react';
import { GraduationCap, ArrowLeft } from 'lucide-react';
import OfficeCard from './components/OfficeCard';
import OrgChart from './components/OrgChart';
import SearchBar from './components/SearchBar';
import StatsCard from './components/StatsCard';
import SubjectSearchResults from './components/SubjectSearchResults';
import ContactModal from './components/ContactModal';
import { offices } from './data/offices';
import type { Employee } from './types';

function App() {
  const [selectedOffice, setSelectedOffice] = useState<typeof offices[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const searchResults = useMemo(() => {
    const query = searchQuery.toLowerCase();
    
    // Search for offices
    const filteredOffices = offices.filter(office => 
      office.name.toLowerCase().includes(query) ||
      office.location.toLowerCase().includes(query)
    );

    // Search for subjects and their professors
    const subjectResults: { subject: Employee['subjects'][0], professor: Employee }[] = [];
    
    const searchEmployeeSubjects = (employee: Employee) => {
      employee.subjects?.forEach(subject => {
        if (
          subject.name.toLowerCase().includes(query) ||
          subject.code.toLowerCase().includes(query)
        ) {
          subjectResults.push({ subject, professor: employee });
        }
      });
      
      employee.children?.forEach(searchEmployeeSubjects);
    };

    offices.forEach(office => searchEmployeeSubjects(office.orgChart));

    return { offices: filteredOffices, subjects: subjectResults };
  }, [searchQuery]);

  const stats = useMemo(() => ({
    totalEmployees: offices.reduce((acc, curr) => acc + curr.employeeCount, 0),
    totalDepartments: offices.length,
    totalFaculty: offices.reduce((acc, curr) => {
      const countEmployees = (employee: typeof offices[0]['orgChart']) => {
        let count = 1;
        if (employee.children) {
          count += employee.children.reduce((sum, child) => sum + countEmployees(child), 0);
        }
        return count;
      };
      return acc + countEmployees(curr.orgChart);
    }, 0),
  }), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <GraduationCap className="w-8 h-8" />
            <div className="ml-3">
              <h1 className="text-2xl font-bold">Palompon Institute of Technology</h1>
              <p className="text-sm text-blue-200">Organizational Directory</p>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedOffice ? (
          <div>
            <button
              onClick={() => setSelectedOffice(null)}
              className="flex items-center text-blue-800 hover:text-blue-900 mb-6 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Departments
            </button>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedOffice.name}</h2>
                  <p className="text-gray-600 mt-1">{selectedOffice.address}</p>
                  <p className="text-blue-600 mt-1">Located at: {selectedOffice.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Total Staff</p>
                  <p className="text-2xl font-bold text-blue-600">{selectedOffice.employeeCount}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
              <OrgChart data={selectedOffice.orgChart} onEmployeeClick={setSelectedEmployee} />
            </div>
          </div>
        ) : (
          <div>
            <StatsCard {...stats} />
            
            <div className="mb-8">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>

            <SubjectSearchResults
              results={searchResults.subjects}
              onProfessorClick={setSelectedEmployee}
            />

            <h2 className="text-3xl font-bold text-gray-800 mb-2">Departments & Offices</h2>
            <p className="text-gray-600 mb-8">Click on a department to view its organizational structure</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.offices.map((office) => (
                <OfficeCard
                  key={office.id}
                  name={office.name}
                  location={office.location}
                  employeeCount={office.employeeCount}
                  image={office.image}
                  onClick={() => setSelectedOffice(office)}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {selectedEmployee && (
        <ContactModal
          isOpen={true}
          onClose={() => setSelectedEmployee(null)}
          employee={selectedEmployee}
        />
      )}
    </div>
  );
}

export default App;