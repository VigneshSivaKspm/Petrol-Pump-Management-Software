import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPlus, FaArrowLeft } from 'react-icons/fa';
import EmployeeList from '../../components/Employee/EmployeeList';
import EmployeeForm from '../../components/Employee/EmployeeForm';

// Mock data - Replace with actual API calls
const mockEmployees = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    employeeId: 'EMP001',
    position: 'Pump Operator',
    department: 'Operations',
    joinDate: '2023-01-15',
    status: 'active',
    shift: 'morning',
    address: '123 Main St, City, Country'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 234 567 891',
    employeeId: 'EMP002',
    position: 'Cashier',
    department: 'Sales',
    joinDate: '2023-02-20',
    status: 'active',
    shift: 'evening',
    address: '456 Oak Ave, City, Country'
  },
  {
    id: '3',
    name: 'Robert Johnson',
    email: 'robert.j@example.com',
    phone: '+1 234 567 892',
    employeeId: 'EMP003',
    position: 'Manager',
    department: 'Management',
    joinDate: '2022-11-05',
    status: 'on_leave',
    shift: 'flexible',
    address: '789 Pine Rd, City, Country'
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.d@example.com',
    phone: '+1 234 567 893',
    employeeId: 'EMP004',
    position: 'Maintenance Technician',
    department: 'Maintenance',
    joinDate: '2023-03-10',
    status: 'active',
    shift: 'night',
    address: '321 Elm St, City, Country'
  },
  {
    id: '5',
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    phone: '+1 234 567 894',
    employeeId: 'EMP005',
    position: 'Assistant Manager',
    department: 'Management',
    joinDate: '2022-09-15',
    status: 'inactive',
    shift: 'morning',
    address: '654 Maple Dr, City, Country'
  }
];

const EmployeePage = ({ statusFilter: initialFilter }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [employees, setEmployees] = useState(mockEmployees);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [statusFilter, setStatusFilter] = useState(initialFilter || 'all');
  
  // Filter employees based on status
  const filteredEmployees = statusFilter === 'all' 
    ? employees 
    : employees.filter(emp => emp.status === statusFilter);
  
  // Handle status change from URL
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('active_employee')) {
      setStatusFilter('active');
    } else if (path.includes('absent_employee')) {
      setStatusFilter('on_leave');
    } else if (path.includes('total_employee')) {
      setStatusFilter('all');
    } else {
      setStatusFilter(initialFilter || 'all');
    }
  }, [location.pathname, initialFilter]);
  
  // Handle employee edit
  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setIsAddingNew(false);
  };
  
  // Handle employee delete
  const handleDelete = (employeeId) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(employees.filter(emp => emp.id !== employeeId));
    }
  };
  
  // Handle status change
  const handleStatusChange = (employee) => {
    const newStatus = employee.status === 'active' ? 'inactive' : 'active';
    setEmployees(employees.map(emp => 
      emp.id === employee.id ? { ...emp, status: newStatus } : emp
    ));
  };
  
  // Handle form submission
  const handleSave = (formData) => {
    if (selectedEmployee) {
      // Update existing employee
      setEmployees(employees.map(emp => 
        emp.id === selectedEmployee.id ? { ...formData, id: selectedEmployee.id } : emp
      ));
      setSelectedEmployee(null);
    } else {
      // Add new employee
      const newEmployee = {
        ...formData,
        id: `EMP${String(employees.length + 1).padStart(3, '0')}`
      };
      setEmployees([...employees, newEmployee]);
      setIsAddingNew(false);
    }
  };
  
  // Handle cancel
  const handleCancel = () => {
    setSelectedEmployee(null);
    setIsAddingNew(false);
  };
  
  // Handle add new employee
  const handleAddNew = () => {
    setSelectedEmployee(null);
    setIsAddingNew(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          {statusFilter === 'active' && 'Active '}
          {statusFilter === 'on_leave' && 'On Leave '}
          {statusFilter === 'inactive' && 'Inactive '}
          Employees
        </h1>
        
        <div className="flex gap-2">
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-ghost"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
          <button 
            onClick={handleAddNew}
            className="btn btn-primary"
          >
            <FaPlus className="mr-2" /> Add Employee
          </button>
        </div>
      </div>
      
      {isAddingNew || selectedEmployee ? (
        <div className="mb-8">
          <button 
            onClick={handleCancel}
            className="btn btn-ghost mb-4"
          >
            <FaArrowLeft className="mr-2" /> Back to List
          </button>
          <EmployeeForm 
            employee={selectedEmployee} 
            onSave={handleSave} 
            onCancel={handleCancel} 
          />
        </div>
      ) : (
        <EmployeeList 
          employees={filteredEmployees} 
          onEdit={handleEdit}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
};

export default EmployeePage;
