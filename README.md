<!--
 * @Author: lg
 * @Date: 2023-11-08 08:59:37
 * @LastEditors: lg
 * @LastEditTime: 2023-11-29 09:27:38
 * @Description:
 * @FilePath: \vite-react\README.md
-->

# vite react

## 安装路由

- npm i react-router-dom
- 路由版本 V>=16
- 路由懒加载 React.lazy

```jsx
import { Suspense, lazy } from 'react';
//懒加载页面
const Home = lazy(() => import('@/views/home/index'));
const Home = React.lazy(() => import('@/views/home/index'));
//包裹异步加载组件的加载动画
<Suspense fallback={<div>Loading..1111111.</div>}>
  <NotFound />
</Suspense>;

// BrowserRouter历史模式
```

## Routes 和 Route 是 react-router-dom 包提供的两个组件，用于在 React 应用程序中进行路由

- Routes 组件是一个容器，用于定义一组 Route 组件。它内部可以包含零个或多个 - Route 组件，并根据 URL 匹配其中的一个 Route 组件来渲染。
- Route 组件用于定义路由。它包括一个路径（path）和一个组件（element）。当 URL 匹配该路径时，该组件将被渲染到页面上。可以在 Route 组件中定义其他属性和方法，以根据需要实现更高级的路由功能。

## 路由重定向 Navigate

- 因为，这个时候没有“/”没有对应任何路由组件。我们可以使页面处于跟路由“/”时，让他重定向到 about 组件，解决这个问题。
- Navigate 是 react-router-dom 4.0+ 版本中的一个组件，它可以通过编程方式导航到一个特定的路由。它的用法有些类似于 Link 组件和 history.push 方法，但它可以根据一些条件来激活导航
- Navigate 只要一渲染，就会引起视图变化。
- replace 是 Navigate 组件的一个属性，用于在导航时替换当前的路由历史记录而不是添加新的记录。(在 React Router 中，导航时会将新的路由历史记录添加到栈顶，这会增加浏览器的回退次数和前进次数。但是，在某些情况下，这不是我们想要的行为，因为某些路由可能不应该添加到历史记录中。这时就可以通过设置 replace 属性来解决这个问题。)

```jsx
<Route path="/" element={<Navigate to="/home" />}></Route>

<Route path="/*" element={<Navigate to="/404" />}></Route>

import { Navigate } from 'react-router-dom';

function App({ isAuth }) {
//我们使用了 Navigate 组件来导航到登录页面（即 to=”/login”），当 isAuth 的值为 false 时，会自动触发导航。当 isAuth 的值为 true 时，将会显示 组件和对应子路由。

// https://www.pipipi.net/27853.html
// https://zhuanlan.zhihu.com/p/518339176
  return (
    //Navigate 可以根据一些条件来激活导航
    {isAuth ? <Dashboard /> : <Navigate to="/login" />}
  );
}

function Home() {
  const [sum, setSum] = useState(1);
  return (
    <div>
      <h3>我是Home的内容</h3>
      {sum === 2 ? <Navigate to="/about" replace /> : <h4>当前sum的值是：{sum}</h4>}
      <button onClick={() => setSum(2)}>点击将我变成2</button>
    </div>
  );
}

```

## 路由注册的写法(复杂的写法)

- 缺点: 当组件很多时，这样写非常累赘(可以通过 useRoutes 解决这一问题)

```jsx
<Routes>
  <Route path="/about" element={<About />}></Route>
  <Route path="/home" element={<Home />}></Route>
  <Route path="/" element={<Navigate to="/about" />}></Route>
</Routes>
```

### useRoutes 配置路由

> useRoutes 是 React Router v6 中的一个 Hook，用于定义和渲染路由。它接受一个配置对象作为参数，该对象用于定义路由规则和对应的组件。

```jsx
import { NavLink, useRoutes } from 'react-router-dom';

const routes = [
  { path: '/', element: <Navigate to="/home" /> },
  { path: '/home', element: <Home /> },
  { path: '/not-find', element: <NotFound /> }
];

const ele = useRoutes(routes);
```

## 嵌套路由

- 页面中要配套 Outlet 一起使用

```jsx

{
    path: '/project-list',
    element: <ProjectList />,
    children: [
      { path: 'add', element: <ProjectListAdd /> },
      { path: 'edit', element: <ProjectListEdit /> }
    ]
  },


  // 页面中
function ProjectList() {
  return (
    <>
      <h3> 项目列表页</h3>

      <Outlet></Outlet>
    </>
  );
}
```

#### 嵌套路由 to 的三种写法(其余写法都会出错)

```jsx
<NavLink className="list-group-item" to="news">
  News
</NavLink>

<NavLink className="list-group-item" to="/home/news">
  News
</NavLink>

<NavLink className="list-group-item" to="./news">
  News
</NavLink>

```

## 路由跳转

> NavLink 和 Link 都是 React Router 库中的组件，用于实现页面路由导航,让用户可以在单页应用中自由地切换页面视图。

- Link 组件是最简单的路由导航器，它可以通过设置 to 属性来导航到指定的路由路径

```jsx
<Link to="/about">About</Link>
```

- NavLink 的高亮效果
  > NavLink 组件在实现路由导航功能的同时，还提供了一些额外的样式控制功能，例如可以为当前活跃路由添加自定义样式或类名。使用时，将 className 的返回值写成一个函数即可

```jsx
 <NavLink className={({ isActive }) => (isActive ? "list-group-item myCustomClassName" : "list-group-item")} to="/about">
    About
  </NavLink>
  <NavLink className="list-group-item" to="/home">
    Home
  </NavLink>

```

## 路由传参和接收参数

- Params 参数的传递与接受(useParams)

```jsx
// 传递参数
 <Link to={`detail/${m.id}`}>{m.title}</Link>
//路由配置
{
  path: "message",
  element: <Message />,
  children: [
    {
      path: "detail/:id",
      element: <Detail />
    }
  ]
},


//接收参数
import { useParams } from "react-router-dom";
const { id } = useParams();
```

- Search 参数的传递与接受(useSearchParams)
- useSearchParams 来获取当前 URL 中的查询参数。useSearchParams 返回一个元组，包含当前的查询参数对象和一个可以设置新的查询参数对象的函数 setSearchParams。
- setSearch 可以更改 search 参数，也可以更新视图

```jsx
// 传递参数
<Link to={`detail?id=${m.id}`}>{m.title}</Link>

//路由配置
{
  path: "message",
  element: <Message />,
  children: [
    {
      path: "detail",
      element: <Detail />
    }
  ]
},

//接收参数
import { useSearchParams  } from "react-router-dom";
const [search, setSearch] = useSearchParams();
const id = search.get("id");
 <button onClick={() => setSearch("id=1111")}>更改参数</button>
```

- state 参数传递和接收(useLocation)
  > state 参数不会使路由 url 发生变化

```jsx
//state参数的传递非常简单，标签内定义state属性即可
<Link to="detail" state={{ id: m.id }}>
  {m.title}
</Link>;

import { useLocation } from 'react-router-dom';
const { state } = useLocation();
console.log(state.id);
```

## 编程式导航
- react-router-dom v4 可以使 withRouter (函数组件里可以用这个方法), class组件里可以直接  this.props.history.push
- react-router-dom v5 是使用 useHistory 
- react-router-dom v6开始 useNavigate取代了原先版本中的useHistory 
 

> 我们通过 Link 组件或者 NavLink 组件实现跳转，某些情况下，我们可能需要其他形式实现跳转，比如通过一个按钮实现路由跳转。这个时候，我们就需要编程式导航。

- 通过 useNavigate 这个 hook 函数实现
- navigate 可以接受两个参数，第二个参数一个可选项，包含以下选项：
  - replace：当为 true 时，将当前导航记录替换为新路径，而不是在历史记录中创建一个新的导航记录。
  - state：一个任意类型的值，将其作为状态传递给新页面。
  - 注意: navigate 内我们定义的是 state 参数，因此，路由的接受也需要使用类似形式

```jsx
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
//跳转页面,传递参数
function goDetail(m) {
  navigate('detail', {
    replace: false,
    state: {
      id: m.id
    }
  });
}

//获取参数
const { state } = useLocation();
console.log(state.id);
```

## useInRouterContext 可以判断当前组件是否被组件包裹。

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

import { NavLink, useRoutes, useInRouterContext } from 'react-router-dom';
console.log(useInRouterContext()); // true
```
