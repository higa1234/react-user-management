import { Home } from "@/components/pages/Home";
import { Setting } from "@/components/pages/Setting";
import { UserManagement } from "@/components/pages/UserManagement";

export const HomeRoutes = [
    {
        path: "/",
        exact: true,
        Children: <Home />
    },
    {
        path: "/user_management",
        exact: false,
        Children: <UserManagement />
    },
    {
        path: "/setting",
        exact: false,
        Children: <Setting />
    },
]