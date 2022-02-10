import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { mainRoutes } from '../../routes/mainRoutes';
import Loader from '../loader/Loader';

const AppRouter = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {mainRoutes.map(route => (
            <Route path={route.path} element={route.element} key={route.name} />
          ))}
          <Route path="/" element={<Navigate to="/students" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
