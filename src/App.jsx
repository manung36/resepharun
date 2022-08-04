import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./utils/theme";
import HomePage from "./containers/HomePage";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import Layout from "./components/Layout";
import RecipeDetail from "./containers/RecipeDetail";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./containers/NotFound";
import Search from "./containers/Search";
import About from "./containers/About";
import RouteGuard from "./components/RouteGuard";
import Profile from "./containers/Profile";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <HomePage />
                  </Layout>
                }
              />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<SignIn />} />
              <Route
                path="/recipes/:recipeId"
                element={
                  <>
                    <RouteGuard>
                      <Layout>
                        <RecipeDetail />
                      </Layout>
                    </RouteGuard>
                  </>
                }
              />

              <Route
                path="/search"
                element={
                  <>
                    <RouteGuard>
                      <Layout>
                        <Search />
                      </Layout>
                    </RouteGuard>
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <Layout>
                      <About />
                    </Layout>
                  </>
                }
              />

              <Route
                path="/profile"
                element={
                  <>
                    <Layout>
                      <Profile />
                    </Layout>
                  </>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
