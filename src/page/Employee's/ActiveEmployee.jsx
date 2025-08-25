import React from 'react';
import EmployeesNav from "./Employee'sNav/EmployeesNav";
import EmployeePage from './EmployeePage';

const ActiveEmployee = () => {
  return <EmployeePage statusFilter="active" />;
};

export default ActiveEmployee;