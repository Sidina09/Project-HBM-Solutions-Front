import {
  BrowserRouter,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import './App.css';
import RootLayout from './layout/RootLayout';
import Contrats, { allDocumentsLoaders, documentsLoaders } from './pages/Contrats';
import InfoPage, { documentDetailsLoaders } from './pages/InfoPage';
import { ScrollRestoration } from "react-router-dom";
import ErrorPage from "./pages/404";
import Hero from "./components/HeroSection";

// import Search from './components/Search';


const router = createBrowserRouter(
  createRoutesFromElements(  
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Hero />}/>
        <Route path="/documents" 
        errorElement={<ErrorPage />}>
          <Route index element={<Contrats />} loader={documentsLoaders}/>
          <Route path="all" element={<Contrats />} loader={allDocumentsLoaders}/>
        </Route>
        <Route path="infopage">
          <Route 
          path=":id" 
          element={<InfoPage />} 
          loader={documentDetailsLoaders}
          errorElement={<ErrorPage />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
  )
)
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
