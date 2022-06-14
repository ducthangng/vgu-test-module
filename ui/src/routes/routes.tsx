import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { GuardEC } from '../models/Guard';
import Guard from '../guards/AuthGuard';

import { CookiesProvider } from 'react-cookie';

import UserLayout from '../pages/Layout/UserLayout';
import ClassroomLayout from '../pages/Layout/ClassroomLayout';
import TestCardPage from '../pages/TestSelection';
import GroupSelection from '../pages/GroupSelection';
import Test from '../pages/Test';
import NotFound404 from '../pages/NotFound404';

import MockTestSelection from '../pages/MockTestSelection';
import TestManagement from '../pages/TestManagement';
import UserManagement from '../pages/UserManagement';

import { AdminEC, StudentEC } from '../models/Guard';

import { TestProvider } from '../context/test/TestContext';

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
          {/* <Route
            path="/"
            element={<Navigate to="/student/dashboard" replace />}
          /> */}

          {/* student routes */}
          <Route path="/student/*">
            <Route element={<UserLayout />}>
              <Route path="dashboard/*" element={<TestCardPage />}>
                <Route path="*" element={<Navigate to="" replace />} />
              </Route>

              <Route path="classroom/*">
                <Route element={<ClassroomLayout />}>
                  <Route path="" element={<MockTestSelection />} />
                  {/* <Route path="" element={<Classroom />} /> */}
                  {/* <Route path=":id/home" element={<Classroom />} /> */}
                  {/* <Route path=":id/test" element={<Test />} /> */}
                </Route>

                <Route path="*" element={<Navigate to="" replace />} />
              </Route>

              {/* <Route path="account/*" element={<Account />} /> */}
            </Route>

            {/* add new user routes here */}
            <Route path="*" element={<Navigate to="dashboard" replace />} />
          </Route>

          {/* admin routes */}
          <Route path="/admin/*" element={<Guard {...AdminGuard} />}>
            <Route element={<UserLayout />}>
              {/* <Route path="dashboard/*">
		      <Route path="" element={<AdminDashboardLayout />} />
		      <Route path="usercontrol" element={<ControlLayout />} />
		    </Route> */}

              <Route path="classroom/*">
                <Route element={<ClassroomLayout />}>
                  {/* <Route path="" element={<Classroom />} /> */}
                  {/* <Route path=":id/home" element={<Classroom />} /> */}
                  {/* <Route path=":id/test" element={<Test />} /> */}
                </Route>
                <Route path="*" element={<Navigate to="" replace />} />
              </Route>

              {/* <Route path="account/*" element={<Account />} /> */}
              {/* add new admin routes here */}
              <Route path="*" element={<Navigate to="dashboard/" replace />} />
            </Route>
          </Route>

          {/* admin view user information */}
          <Route path="userinformation/">
            <Route element={<UserManagement />} />
          </Route>

          {/* admin view test information */}
          <Route path="testmanagement/">
            <Route element={<TestManagement />} />
          </Route>

          {/* test routes */}
          <Route path="test">
            <Route
              path="do/*"
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
