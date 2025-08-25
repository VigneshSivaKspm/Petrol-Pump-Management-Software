import React from 'react';
import EmployeesNav from "./Employee'sNav/EmployeesNav";
import EmployeePage from './EmployeePage';

const AbsentEmployee = () => {
  return <EmployeePage statusFilter="on_leave" />;
};

export default AbsentEmployee;