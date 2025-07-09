import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { AppBar, Toolbar, IconButton, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { addNavegacion } from "../../../store/external/navegacionExternalSlice";

export const HeaderPro = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false); // Estado para menú móvil

  const menuItems = [
    { label: t("inicio"), handler: () => dispatch(addNavegacion("inicio")) },
    { label: t("machos"), handler: () => dispatch(addNavegacion("machos")) },
    { label: t("hembras"), handler: () => dispatch(addNavegacion("hembras")) },
    { label: t("jovenes"), handler: () => dispatch(addNavegacion("jovenes")) },
    { label: t("camadas"), handler: () => dispatch(addNavegacion("camadas")) },
    { label: t("contacto"), handler: () => dispatch(addNavegacion("contacto")) },
    { label: t("login"), handler: () => dispatch(addNavegacion("login")) },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black", borderBottom: "3px solid white" }}>
      <Toolbar className="flex justify-between">
        {/* Menú Hamburguesa en Móvil */}
        <IconButton className="lg:hidden" color="inherit" onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>

        {/* Botones de Navegación (desktop) */}
        <Box className="hidden lg:flex space-x-4 mx-auto">
          {menuItems.map(({ label, handler }) => (
            <Button
              key={label}
              onClick={handler}
              sx={{ color: "gold" }} // Aplica color dorado
              className="hover:text-[#FFD700]" // Cambia a dorado más brillante al pasar el mouse
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Logo (alineado a la derecha) */}
        <Box className="ml-auto">
          <img src="/img/varios/rottweiler3.png" alt="Logo" className="h-12" />
        </Box>

        {/* Drawer para Menú Móvil */}
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <List className="w-60 bg-gray-900 h-full">
            {menuItems.map(({ label, handler }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton onClick={() => { handler(); setOpen(false); }}>
                  <ListItemText
                    primary={label}
                    sx={{ color: "gold" }} // Texto dorado
                    className="hover:text-[#FFD700]" // Efecto hover dorado más brillante
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
