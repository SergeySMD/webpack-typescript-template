import React, { FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";

import { routes, paths } from "./routes";

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

        <Route element={<Navigate replace to={paths.HOME} />} path="*" />
      </Routes>
    </div>
  );
};

export default App;
