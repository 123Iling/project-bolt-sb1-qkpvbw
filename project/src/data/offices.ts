export const offices = [
  {
    id: '1',
    name: 'Office of the President',
    location: 'Main Administration Building',
    address: 'Palompon Institute of Technology, Palompon, Leyte',
    employeeCount: 45,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800',
    orgChart: {
      id: 'emp1',
      name: 'Dr. Maria Santos',
      role: 'University President',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      subjects: [
        {
          code: 'LEAD101',
          name: 'Educational Leadership and Management',
          units: 3,
          schedule: 'Monday 9:00 AM - 12:00 PM'
        }
      ],
      children: [
        {
          id: 'emp2',
          name: 'Dr. James Rivera',
          role: 'Vice President for Academic Affairs',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
          subjects: [
            {
              code: 'EDU501',
              name: 'Advanced Educational Administration',
              units: 3,
              schedule: 'Wednesday 1:00 PM - 4:00 PM'
            }
          ],
          children: [
            {
              id: 'emp3',
              name: 'Dr. Elena Cruz',
              role: 'Dean of Engineering',
              image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
              subjects: [
                {
                  code: 'ENG401',
                  name: 'Engineering Management',
                  units: 3,
                  schedule: 'Tuesday 8:00 AM - 11:00 AM'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: '2',
    name: 'College of Engineering',
    location: 'Engineering Building',
    address: 'East Campus, PIT',
    employeeCount: 75,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    orgChart: {
      id: 'emp5',
      name: 'Dr. Elena Cruz',
      role: 'Dean of Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      subjects: [
        {
          code: 'ENG401',
          name: 'Engineering Management',
          units: 3,
          schedule: 'Tuesday 8:00 AM - 11:00 AM'
        }
      ],
      children: [
        {
          id: 'emp6',
          name: 'Engr. Carlos Reyes',
          role: 'Department Head - Civil Engineering',
          image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=200',
          subjects: [
            {
              code: 'CE301',
              name: 'Structural Analysis',
              units: 4,
              schedule: 'Monday/Thursday 1:00 PM - 3:00 PM'
            },
            {
              code: 'CE405',
              name: 'Construction Management',
              units: 3,
              schedule: 'Wednesday 9:00 AM - 12:00 PM'
            }
          ]
        },
        {
          id: 'emp7',
          name: 'Engr. Patricia Lim',
          role: 'Department Head - Computer Engineering',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
          subjects: [
            {
              code: 'CPE201',
              name: 'Digital Systems Design',
              units: 4,
              schedule: 'Tuesday/Friday 8:00 AM - 10:00 AM'
            },
            {
              code: 'CPE305',
              name: 'Computer Architecture',
              units: 3,
              schedule: 'Monday 1:00 PM - 4:00 PM'
            }
          ]
        }
      ]
    }
  }
];