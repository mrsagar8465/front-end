import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch employee data from the backend
  useEffect(() => {
    const listEmployee = async () => {
      try {
        const response = await axios.get('https://localhost:8080/user/'); // Replace with your actual backend API URL
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    listEmployee();
  }, []);

  // Function to download the employee list as a PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ['ID', 'Name', 'Contact Number', 'Email'];
    const tableRows = [];

    employees.forEach((employee) => {
      const employeeData = [
        employee.id,
        employee.name,
        employee.contactNumber,
        employee.email,
      ];
      tableRows.push(employeeData);
    });

    doc.text('Employee List', 14, 15);
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save('Employee_List.pdf');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Employee List</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Contact Number</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="bg-white even:bg-gray-50 hover:bg-gray-200">
                <td className="border border-gray-300 px-4 py-2 text-center">{employee.id}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.name}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.contactNumber}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={downloadPDF}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600"
      >
        Download PDF
      </button>
    </div>
  );
};

export default ListEmployee;
