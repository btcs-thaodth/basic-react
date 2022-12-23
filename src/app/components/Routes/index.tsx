import { RouteObject, useRoutes } from 'react-router-dom'

import Login from '../../pages/login'
import ProtectedLayout from '../Layouts/ProtectedLayout'
import RedirectHomeLayout from '../Layouts/RedirectHomeLayout'
import NotFound from '../NotFound'

function Task() {
  return <div>Task</div>
}
function Test() {
  return <div>Test</div>
}

export const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        path: 'test',
        element: <Test />,
      },
      { path: 'task', element: <Task /> },
    ],
  },
  {
    path: '/login',
    element: <RedirectHomeLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default function Routes() {
  const routes = useRoutes(routesConfig)
  return routes
}
