import React from 'react';

const Services = () => {
  const services = [
    { name: 'Web Development' },
    { name: 'Mobile App Development' },
    { name: 'UI/UX Design' },
    { name: 'Digital Marketing' },
    { name: 'Cloud Solutions' },
    { name: 'Data Analysis' },
    { name: 'Cybersecurity' },
    { name: 'E-commerce Solutions' },
    { name: 'AI & Machine Learning' },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Services</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#f5f5f5',
              padding: '20px',
              textAlign: 'center',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{service.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
