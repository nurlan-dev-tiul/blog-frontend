import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register";
import ArticlePage from "pages/Article";
import CreatePost from "pages/CreatePost";
import Profile from "pages/Profile";
import CategoryPage from "pages/Category";
import { useDispatch } from "react-redux";
import { Global } from '@emotion/react';
import { Layout } from "components/Layout";
import { GlobalStyle } from "styles/global";
import { PrivateRoute } from "components/PrivateRoute";
import { getProfileAction } from "store/auth/auth.action";

const App = () => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getProfileAction())
  }, [dispatch])

  return (
    <>
    <Global styles={GlobalStyle} />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/create-post' element={
              <PrivateRoute>
                  <CreatePost />
              </PrivateRoute>
            } />
            <Route path='/detail/:id' element={<ArticlePage />} />
            <Route path='/category/:id' element={<CategoryPage />} />
            <Route path='/profile/:id' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
