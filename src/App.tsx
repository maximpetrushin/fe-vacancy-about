import { Routes, Route } from "react-router";
import AppLayout from "./layouts/AppLayout.tsx";
import Vacancies from "./pages/Vacancies.tsx";
import VacancyDetails from "./pages/VacancyDetails.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import VacancyList from "./components/VacancyList.tsx";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="vacancies" element={<Vacancies />}>
          <Route index element={<VacancyList />} />
          <Route path="moscow" element={<VacancyList />} />
          <Route path="petersburg" element={<VacancyList />} />
        </Route>

        <Route path="vacancies/:id" element={<VacancyDetails />} />
        <Route path="vacancies/moscow/:id" element={<VacancyDetails />} />
        <Route path="vacancies/petersburg/:id" element={<VacancyDetails />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
