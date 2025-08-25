import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GreenButton } from "../../components/Component/Button";
import { Label, NumberInput, TextInput } from "../../components/Fields/InputFields";
import BranchesNav from "./BranchesNav/BranchesNav";

const AddNewBranchForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    branchName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    contactPerson: '',
    phone: '',
    email: '',
    fuelCapacity: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.branchName.trim()) newErrors.branchName = 'Branch name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.fuelCapacity) newErrors.fuelCapacity = 'Fuel capacity is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      // Redirect to branches list on success
      navigate('/branch_list');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <BranchesNav />
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 p-6 mt-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b">Add New Branch</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Branch Name */}
            <div className="space-y-1">
              <Label htmlFor="branchName">Branch Name *</Label>
              <TextInput
                id="branchName"
                name="branchName"
                value={formData.branchName}
                onChange={handleChange}
                placeholder="Enter branch name"
                error={errors.branchName}
              />
            </div>

            {/* Address */}
            <div className="space-y-1">
              <Label htmlFor="address">Address *</Label>
              <TextInput
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter full address"
                error={errors.address}
              />
            </div>

            {/* City */}
            <div className="space-y-1">
              <Label htmlFor="city">City *</Label>
              <TextInput
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                error={errors.city}
              />
            </div>

            {/* State */}
            <div className="space-y-1">
              <Label htmlFor="state">State *</Label>
              <TextInput
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                error={errors.state}
              />
            </div>

            {/* Pincode */}
            <div className="space-y-1">
              <Label htmlFor="pincode">Pincode *</Label>
              <TextInput
                id="pincode"
                name="pincode"
                type="number"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter pincode"
                error={errors.pincode}
              />
            </div>

            {/* Contact Person */}
            <div className="space-y-1">
              <Label htmlFor="contactPerson">Contact Person *</Label>
              <TextInput
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder="Enter contact person name"
                error={errors.contactPerson}
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <Label htmlFor="phone">Phone Number *</Label>
              <TextInput
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                error={errors.phone}
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="email">Email *</Label>
              <TextInput
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                error={errors.email}
              />
            </div>

            {/* Fuel Capacity */}
            <div className="space-y-1">
              <Label htmlFor="fuelCapacity">Fuel Capacity (Liters) *</Label>
              <NumberInput
                id="fuelCapacity"
                name="fuelCapacity"
                value={formData.fuelCapacity}
                onChange={handleChange}
                placeholder="Enter fuel capacity in liters"
                error={errors.fuelCapacity}
                min="0"
                step="0.01"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200 mt-8">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <GreenButton
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2"
            >
              {isSubmitting ? 'Saving...' : 'Save Branch'}
            </GreenButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewBranchForm;
