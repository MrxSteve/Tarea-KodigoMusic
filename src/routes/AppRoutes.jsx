import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import Search from "../pages/Search";
import SuggestionForm from "../pages/SuggestionForm";
import Library from "../pages/Library";

export default function AppRoutes() {
    return (
        <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="buscar" element={<Search />} />
            <Route path="sugerencia" element={<SuggestionForm />} />
            <Route path="biblioteca" element={<Library />} />
        </Route>
        </Routes>
    );
}
