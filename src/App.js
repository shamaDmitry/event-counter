import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import EventsPage from "./pages/EventsPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={ <HomePage /> } />
        <Route path="/events" element={ <EventsPage /> } />
        <Route path="/event/:id" element={ <EventPage /> } />

        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
