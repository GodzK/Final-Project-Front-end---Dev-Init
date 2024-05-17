import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Homepage', () => {
  it('should load successfully and display correct information', () => {
    render(<App />);

    // ตรวจสอบ document title โดยใช้ document.title โดยตรง
    expect(document.title).toEqual('PK Todolist');

    // ตรวจสอบว่า heading มี text เป็น 'PK Todolist'
    expect(screen.getByRole('heading')).toHaveTextContent('PK Todolist');

    // ตรวจสอบปุ่ม 'Sign In With Google'
    expect(screen.getByRole('button', { name: 'Sign In With Google' })).toBeInTheDocument();

    // ตรวจสอบว่าไม่มีข้อความ 'error' และ 'warning' ปรากฏในหน้า
    expect(screen.queryByText(/error/i)).toBeNull(); 
    expect(screen.queryByText(/warning/i)).toBeNull();
  });
});
