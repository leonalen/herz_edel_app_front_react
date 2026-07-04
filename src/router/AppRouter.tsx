import { RouteObject } from "react-router-dom";
import { PublicLayout } from "../External/components/layout/PublicLayout";
import { AuthProvider } from "../Auth/context/AuthContext";
import { Outlet } from "react-router-dom";

// RootLayout is a component that wraps all routes in the required providers
export const RootLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <PublicLayout />,
        children: [
          {
            index: true,
            lazy: () =>
              import("../External/secciones/home/pages/HomeSesscionesHomePage").then(m => ({
                Component: m.HomeSesscionesHomePage,
              })),
          },
          {
            path: "machos",
            lazy: () =>
              import("../External/secciones/machos/pages/ReproductoresHerzEdel").then(m => ({
                Component: m.default,
              })),
          },
          {
            path: "machos/irko",
            lazy: () =>
              import("../External/secciones/machos/components/Irko").then(m => ({
                Component: m.Irko,
              })),
          },
          {
            path: "machos/nash",
            lazy: () =>
              import("../External/secciones/machos/components/Nash").then(m => ({
                Component: m.Nash,
              })),
          },
          {
            path: "machos/pedro",
            lazy: () =>
              import("../External/secciones/machos/components/Pedro").then(m => ({
                Component: m.Pedro,
              })),
          },
          {
            path: "hembras",
            lazy: () =>
              import("../External/secciones/hembras/pages/HembrasHomePages").then(m => ({
                Component: m.HembrasHomePages,
              })),
          },
          {
            path: "hembras/maxima",
            lazy: () =>
              import("../External/secciones/hembras/components/Maxima").then(m => ({
                Component: m.Maxima,
              })),
          },
          {
            path: "hembras/mistica",
            lazy: () =>
              import("../External/secciones/hembras/components/Mistica").then(m => ({
                Component: m.Mistica,
              })),
          },
          {
            path: "hembras/tessa",
            lazy: () =>
              import("../External/secciones/hembras/components/Tessa").then(m => ({
                Component: m.Tessa,
              })),
          },
          {
            path: "hembras/zafira",
            lazy: () =>
              import("../External/secciones/hembras/components/Zafira").then(m => ({
                Component: m.Zafira,
              })),
          },
          {
            path: "hembras/xammy",
            lazy: () =>
              import("../External/secciones/hembras/components/Xammy").then(m => ({
                Component: m.Xammy,
              })),
          },
          {
            path: "jovenes",
            lazy: () =>
              import("../External/secciones/jovenes/pages/JovenesHomePages").then(m => ({
                Component: m.JovenesHomePages,
              })),
          },
          {
            path: "jovenes/bruce",
            lazy: () =>
              import("../External/secciones/jovenes/components/Bruce").then(m => ({
                Component: m.Bruce,
              })),
          },
          {
            path: "jovenes/conny",
            lazy: () =>
              import("../External/secciones/jovenes/components/Conny").then(m => ({
                Component: m.Conny,
              })),
          },
          {
            path: "camadas",
            lazy: () =>
              import("../External/secciones/camadas/pages/CamadasHomePage").then(m => ({
                Component: m.CamadasHomePage,
              })),
          },
          {
            path: "contacto",
            lazy: () =>
              import("../External/secciones/contacto/pages/ContactoHomePage").then(m => ({
                Component: m.ContactoHomePage,
              })),
          },
          {
            path: "login",
            lazy: () =>
              import("../Auth/pages/LoginHomePage").then(m => ({
                Component: m.LoginHomePage,
              })),
          },
        ],
      },
      {
        path: "dashboard",
        lazy: () =>
          import("../Logged/pages/DashboardPage").then(m => ({
            Component: m.DashboardPage,
          })),
      },
      {
        path: "settings",
        lazy: () =>
          import("../External/pages/Settings").then(m => ({
            Component: m.Settings,
          })),
      },
    ],
  },
];
