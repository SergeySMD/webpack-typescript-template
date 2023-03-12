import { Navigate, Route, Routes } from 'react-router';
import React, { FC, Suspense } from 'react';

import Paths from './constants/path';

import routes from './routes';

const App: FC = () => {
  return (
    <div>
      <Routes>
        {routes.map(({ name, path, Component }, index) => (
          <Route
            key={name + index}
            element={
              <Suspense fallback={null}>
                <Component />
              </Suspense>
            }
            path={path}
          />
        ))}

        <Route element={<Navigate replace to={Paths.HOME} />} path="*" />
      </Routes>
    </div>
  );
};

export default App;
