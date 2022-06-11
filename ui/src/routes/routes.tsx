import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GuardEC } from '../utils/models/Guard';
import Guard from '../guards/AuthGuard';
import { CookiesProvider } from 'react-cookie';
import UserLayout from '../pages/Layout/UserLayout';
import ClassroomLayout from '../pages/Layout/ClassroomLayout';
import TestCardPage from '../pages/TestSelection';
import GroupSelection from '../pages/GroupSelection';
import PreTestPage from '../pages/PreTestPage';
import Test from '../pages/Test';
import MockTestSelection from '../pages/MockTestSelection';
import { AdminEC, StudentEC } from '../utils/models/Guard';

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
          <Route
            path="/"
            element={<Navigate to="/student/dashboard" replace />}
          />

          {/* student routes */}
          <Route path="/student/*">
            <Route element={<UserLayout />}>
              <Route path="dashboard/*" element={<TestCardPage />}>
                <Route path="*" element={<Navigate to="" replace />} />
              </Route>

              <Route path="classroom/*">
                <Route element={<ClassroomLayout />}>
                  <Route path="" element={<PreTestPage />} />
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

          {/* not found */}
          {/* <Route path="*" element={<NotFound />} /> */}

          <Route
            path="test/review/*"
            element={
              <TestProvider>
                <Test reviewMode={true} />
              </TestProvider>
            }
          />
          <Route
            path="test/do/*"
            element={
              <TestProvider>
                <Test reviewMode={false} />
              </TestProvider>
            }
          />
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  );
}
