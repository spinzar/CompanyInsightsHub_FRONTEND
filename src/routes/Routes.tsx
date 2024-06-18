import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home_page/HomePage";
import SearchPage from "../pages/search_page/SearchPage";
import CompanyPage from "../pages/company_page/CompanyPage";
import CompanyProfile from "../components/company_profile/CompanyProfile";
import IncomeStatements from "../components/income_statements/IncomeStatements";
import DesignPage from "../pages/design_page/DesignPage";
import BalanceSheet from "../components/balance_sheet/BalanceSheet";
import CashflowStatement from "../components/cashflow_statement/CashflowStatement";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: "", element: <HomePage/>},
            {path: "design-guide", element: <DesignPage/>},
            {path: "search", element: <SearchPage/>},
            {path: "company/:ticker", element: <CompanyPage/>,
                children: [
                    {path: "company-profile", element: <CompanyProfile/>}, 
                    {path: "income-statement", element: <IncomeStatements/>},
                    {path: "balance-sheet", element: <BalanceSheet/>},
                    {path: "cashflow-statement", element: <CashflowStatement/>}
                ]
            }
        ]
    }
]);