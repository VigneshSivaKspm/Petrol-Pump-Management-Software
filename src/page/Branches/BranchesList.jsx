import React from 'react';
import BranchesNav from "./BranchesNav/BranchesNav";

const BranchesList = () => {
  return (
    <div className="p-6">
      <BranchesNav />
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-6">Branches List</h1>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">All Branches</h2>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Add New Branch
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="text-center py-8 text-gray-500">
              No branches found. Add a new branch to get started.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchesList;