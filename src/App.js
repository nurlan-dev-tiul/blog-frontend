import React, {Suspense} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

import { useDispatch } from "react-redux";
import { Global } from '@emotion/react';
import { Layout } from "components/Layout";
import { GlobalStyle } from "styles/global";
import { PrivateRoute } from "components/PrivateRoute";
import { getProfileAction } from "store/auth/auth.action";
import { Loading } from "components/Loading";

const Login = React.lazy(() => import('./pages/Auth/Login'));
const Register = React.lazy(() => import('./pages/Auth/Register'));
const CreatePost = React.lazy(() => import('pages/CreatePost'));
const ArticlePage = React.lazy(() => import('pages/Article'));
const Profile = React.lazy(() => import('pages/Profile'));
const CategoryPage = React.lazy(() => import('pages/Category'));

const App = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    const user = localStorage.getItem('userBlog');
    if(user){
      dispatch(getProfileAction())
    }
  }, [dispatch]);

  return (
    <>
      <Global styles={GlobalStyle} />
      <BrowserRouter>

          <Routes>
              <Route path='/login' element={
                <Suspense fallback={<Loading />}>
                  <Login />
                </Suspense>
              } />
              <Route path='/register' element={
              <Suspense fallback={<Loading />}>
                <Register />
              </Suspense>
              } />
              
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/create-post' element={
                <PrivateRoute>
                  <Suspense fallback={<Loading />}>
                    <CreatePost />
                  </Suspense>
                </PrivateRoute>
              } />
              <Route path='/detail/:id' element={
                <Suspense fallback={<Loading />}>
                  <ArticlePage />
                </Suspense>
              } />
                
              <Route path='/category/:id' element={
                <Suspense fallback={<Loading />}>
                  <CategoryPage />
                </Suspense>
              } />
              <Route path='/profile/:id' element={
                <Suspense fallback={<Loading />}>
                  <Profile />
                </Suspense>
              } />
              <Route path='*' element={ <NotFound />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
