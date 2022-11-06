import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TokenStorage from './db/token';
import HttpClient from './network/http';
import AttendanceService from './service/attendance';
import AuthService from './service/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
const tokenStorage = new TokenStorage();
const httpClient = new HttpClient('http://localhost:8080');
const attendanceService = new AttendanceService(httpClient, tokenStorage);
const authService = new AuthService(httpClient, tokenStorage);

root.render(<App attendanceService={attendanceService} authService={authService} />);
