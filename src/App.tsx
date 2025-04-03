
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/hooks/useAuth";

import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import InventoryPage from "./pages/InventoryPage";
import SalesPage from "./pages/SalesPage";
import SuppliersPage from "./pages/SuppliersPage";
import VendorPOPage from "./pages/purchase/VendorPOPage";
import MyPOPage from "./pages/purchase/MyPOPage";
import ExpensesPage from "./pages/purchase/ExpensesPage";
import InvoicePage from "./pages/sales/InvoicePage";
import InventoryReportsPage from "./pages/reports/InventoryReportsPage";
import PurchaseReportsPage from "./pages/reports/PurchaseReportsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="wheels-erp-theme">
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/inventory" element={<InventoryPage />} />
                <Route path="/dashboard/sales" element={<SalesPage />} />
                <Route path="/dashboard/sales/invoice" element={<InvoicePage />} />
                <Route path="/dashboard/suppliers" element={<SuppliersPage />} />
                <Route path="/dashboard/purchase/vendor-po" element={<VendorPOPage />} />
                <Route path="/dashboard/purchase/my-po" element={<MyPOPage />} />
                <Route path="/dashboard/purchase/expenses" element={<ExpensesPage />} />
                <Route path="/dashboard/reports/inventory" element={<InventoryReportsPage />} />
                <Route path="/dashboard/reports/purchase" element={<PurchaseReportsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
