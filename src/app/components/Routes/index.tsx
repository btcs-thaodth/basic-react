import { useRoutes, RouteObject } from 'react-router-dom'
import Login from '../../pages/login'
import ProtectedLayout from '../Layouts/ProtectedLayout'
import RedirectHomeLayout from '../Layouts/RedirectHomeLayout'
import { NotFoundPage } from '../NotFound'

const Task = () => <div>Task</div>
const Test = () => <div>Test</div>

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
    element: <NotFoundPage />,
  },
]

export default function Routes() {
  const routes = useRoutes(routesConfig)
  return routes
}
