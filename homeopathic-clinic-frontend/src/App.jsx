import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ScrollToTop from "./components/common/ScrollToTop";

const About = lazy(() => import("./pages/About"));
const Treatments = lazy(() => import("./pages/Treatments"));
const TreatmentDetails = lazy(
  () => import("./pages/TreatmentDetails")
);
const Doctor = lazy(() => import("./pages/Doctor"));
const Appointment = lazy(() => import("./pages/Appointment"));
const Contact = lazy(() => import("./pages/Contact"));

const Locations = lazy(() => import("./pages/Locations"));
const LocationDetails = lazy(
  () => import("./pages/LocationDetails")
);

function RouteLoader() {
  return (
    <div className="grid min-h-[70vh] place-items-center bg-[#f8faf8]">
      <div
        role="status"
        aria-label="Loading page"
        className="size-8 animate-pulse rounded-full bg-emerald-800/15"
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/treatments"
            element={<Treatments />}
          />

          <Route
            path="/treatments/:slug"
            element={<TreatmentDetails />}
          />

          <Route path="/doctor" element={<Doctor />} />

          <Route
            path="/appointment"
            element={<Appointment />}
          />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="/locations"
            element={<Locations />}
          />

          <Route
            path="/locations/:stateSlug/:citySlug"
            element={<LocationDetails />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;