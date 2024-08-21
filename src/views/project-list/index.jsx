/*
 * @Author: lg
 * @Date: 2023-11-09 14:25:58
 * @LastEditors: lg
 * @LastEditTime: 2023-11-09 14:33:52
 * @Description:
 * @FilePath: \vite-react\src\views\project-list\index.jsx
 */
import { Outlet } from 'react-router-dom';
function ProjectList() {
  return (
    <>
      <h3> 项目列表页</h3>

      <Outlet></Outlet>
    </>
  );
}
export default ProjectList;
