// UserForm.test.js
import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import axios from 'axios';
import UserForm from '../pages/User';


// Mock Axios post function
jest.mock('axios');

describe('UserForm', () => {
  it('submits form data', async () => {
    const mockedAxios = axios.post; // Reference to the axios.post function

    const { getByPlaceholderText, getByText } = render(<UserForm />);

    // Fill in form inputs
    fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'James Subedi' } });
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'jamessubedites@gmail.com' } });
    fireEvent.change(getByPlaceholderText('Website'), { target: { value: 'https://subedijames2017.github.io/' } });
    fireEvent.change(getByPlaceholderText('Phone Number'), { target: { value: '12345678' } });
    fireEvent.change(getByPlaceholderText('Street'), { target: { value: 'Stafford Street' } });
    fireEvent.change(getByPlaceholderText('City'), { target: { value: 'Scone' } });
    fireEvent.change(getByPlaceholderText('Suite'), { target: { value: 'villa' } });
    fireEvent.change(getByPlaceholderText('Zipcode'), { target: { value: '2337' } });
    fireEvent.change(getByPlaceholderText('Company Name'), { target: { value: 'Acepirit' } });
    fireEvent.change(getByPlaceholderText('Catch Phrase'), { target: { value: 'Ace Of Spirit' } });
    fireEvent.change(getByPlaceholderText('Business Service'), { target: { value: 'Digital Assistance' } });




    // Simulate form submission
    fireEvent.click(getByText('Submit'));

    await waitFor(() => {
      // Check if axios.post was called with the correct URL and data
      expect(mockedAxios).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/users',
        expect.objectContaining({
          name: 'James Subedi',
          email: 'jamessubedites@gmail.com',
          website: 'https://subedijames2017.github.io/',
          phone: '12345678',
          address: {street:'Stafford Street',city:'Scone',suite:'villa',zipcode:'2337'},
          company: {name:'Acepirit',catchPhrase:'Ace Of Spirit',bs:'Digital Assistance'}
        })
      );
    });
  });
});
