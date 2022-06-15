import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GuardEC } from '../models/Guard';
import { CookiesProvider } from 'react-cookie';
import UserLayout from '../pages/Layout/UserLayout';
import ClassroomLayout from '../pages/Layout/ClassroomLayout';
import TestSelection from '../pages/TestSelection';
import GroupSelection from '../pages/GroupSelection';
import PreTestPage from '../pages/PreTestPage';
import Test from '../pages/Test';
import Guard from '../guards/AuthGuard';
import NotFound404 from '../pages/NotFound404';
import MockTestSelection from '../pages/MockTestSelection';
import UserProfile from '../pages/UserProfile';
import TestManagement from '../pages/TestManagement';
import UserManagement from '../pages/UserManagement';
import { AdminEC, StudentEC } from '../models/Guard';
import { TestProvider } from '../context/test/TestContext';
import { LoginLayout } from '../pages/LoginLayout';
import Login from '../pages/Login';

export default function AppRoute() {
  const AdminGuard: GuardEC = {
    guardEntity: AdminEC,
  };

  const StudentGuard: GuardEC = {
    guardEntity: StudentEC,
  };

  return (
    <BrowserRouter>
      <CookiesProvider>
        <Routes>
          {/* public routes */}
          <Route element={<LoginLayout />}>
            <Route path="/" element={<Login />} />
          </Route>

          {/* student routes */}
          {/* <Route path="/student/*" element={<Guard {...StudentGuard} />}> */}
          <Route path="/student/*">
            <Route element={<UserLayout />}>
              <Route path="dashboard/*" element={<UserProfile />}>
                <Route path="*" element={<Navigate to="" replace />} />
              </Route>

              <Route path="classroom/*">
                <Route path="" element={<GroupSelection />} />
                <Route element={<ClassroomLayout />}>
                  <Route path=":id/home" element={<TestSelection />} />
                </Route>
                <Route path="*" element={<Navigate to="" replace />} />
              </Route>

              {/* <Route path="account/*" element={<UserProfile />} /> */}
            </Route>

            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Route>

          {/* admin routes */}
          <Route path="/admin/*" element={<Guard {...AdminGuard} />}>
            <Route element={<UserLayout />}>
              <Route path="dashboard/*">
                <Route path="" element={<TestManagement />} />
                <Route path="users" element={<UserManagement />} />
              </Route>

              <Route path="classroom/*">
                <Route path="" element={<GroupSelection />} />
                <Route element={<ClassroomLayout />}>
                  <Route path=":id/home" element={<TestSelection />} />
                </Route>
                <Route path="*" element={<Navigate to="" replace />} />
              </Route>

              {/* <Route path="account/*" element={<Account />} /> */}
              {/* add new admin routes here */}
              <Route path="*" element={<Navigate to="dashboard/" replace />} />
            </Route>
          </Route>

          {/* test routes */}
          <Route path="test">
            <Route
              path=":testClassId/*"
              element={
                <TestProvider>
                  <Test reviewMode={false} />
                </TestProvider>
              }
            />
          </Route>

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  );
}
