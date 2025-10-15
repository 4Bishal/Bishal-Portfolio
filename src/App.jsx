import { HashRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Toaster } from "react-hot-toast"; // ✅ Import Toaster

function App() {
  return (
    <>
      {/* Toast container at root */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: '8px',
            padding: '8px 12px',
            fontSize: '14px',
            background: 'var(--background)',
            color: 'var(--foreground)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          },
          success: {
            iconTheme: {
              primary: '#22c55e', // Tailwind green-500
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444', // Tailwind red-500
              secondary: '#ffffff',
            },
          },
        }}
      />


      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
