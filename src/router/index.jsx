/*
 * @Author: lg
 * @Date: 2023-11-08 09:06:52
 * @LastEditors: lg
 * @LastEditTime: 2024-01-10 17:19:03
 * @Description:
 * @FilePath: \vite-react\src\router\index.jsx
 */
import { Suspense, lazy } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// 路由懒加载
const Layout = lazy(() => import('@/views/layout/index'));
const Login = lazy(() => import('@/views/auth/login'));
const Register = lazy(() => import('@/views/auth/register'));
const Home = lazy(() => import('@/views/home/index'));
const NotFound = lazy(() => import('@/views/not-find/index'));
const ProjectList = lazy(() => import('@/views/project-list/index'));
const ProjectListAdd = lazy(() => import('@/views/project-list/add/index'));
const ProjectListEdit = lazy(() => import('@/views/project-list/edit/index'));
const Organization = lazy(() => import('@/views/personnel-management/organization/index'));
const PersonnelInformation = lazy(() => import('@/views/personnel-management/personnel-information/index'));
const RoleConfiguration = lazy(() => import('@/views/personnel-management/role-configuration/index'));

//路由复杂写法
// export default function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Suspense fallback={<div>Loading..22222222222.</div>}>
//               <Home />
//             </Suspense>
//           }
//         ></Route>
//         <Route
//           path="/home"
//           element={
//             <Suspense>
//               <Home />
//             </Suspense>
//           }
//         ></Route>
//         {/* 定义404路由*/}
//         <Route
//           path="/404"
//           element={
//             <Suspense fallback={<div>Loading..1111111.</div>}>
//               <NotFound />
//             </Suspense>
//           }
//         ></Route>
//         {/* 未匹配的路由使用Navigate重定向到此页面 这里即notFound.jsx */}
//         <Route path="/*" element={<Navigate to="/404" />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

//使用useRoutes简化写法

export const routes = [
  { path: '/', element: <Navigate to="/login" /> },
  {
    path: '/', element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />
      },

      {
        path: 'personnel-management',
        children: [
          {
            path: 'organization',
            element: <Organization />,
          },
          {
            path: 'personnel-information',
            element: <PersonnelInformation />
          },
          {
            path: 'role-configuration',
            element: <RoleConfiguration />
          },
        ]
      },
      {
        path: 'project-list',
        element: <ProjectList />,
        children: [
          { path: 'add', element: <ProjectListAdd /> },
          { path: 'edit', element: <ProjectListEdit /> }
        ]
      },
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/not-find', element: <NotFound /> }
];
