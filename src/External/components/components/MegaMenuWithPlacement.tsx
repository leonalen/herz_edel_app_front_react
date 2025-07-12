import { Helmet } from "react-helmet-async";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiGrid,
  FiUsers,
  FiBookOpen,
  FiSun,
  FiGlobe,
  FiPhone,
} from "react-icons/fi";

const navListMenuItems = [
  {
    title: "Productos",
    description: "Soluciones para tus necesidades.",
    icon: FiGrid,
  },
  {
    title: "Sobre Nosotros",
    description: "Conocé nuestro equipo y dedicación.",
    icon: FiUsers,
  },
  {
    title: "Blog",
    description: "Novedades y artículos de interés.",
    icon: FiBookOpen,
  },
  {
    title: "Servicios",
    description: "Cómo podemos ayudarte a lograr tus objetivos.",
    icon: FiSun,
  },
  {
    title: "Soporte",
    description: "Contactanos para asistencia o consultas.",
    icon: FiGlobe,
  },
  {
    title: "Contacto",
    description: "Comunicate con nosotros.",
    icon: FiPhone,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key} tabIndex={0} aria-label={title}>
        <MenuItem
          className="flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {React.createElement(icon, {
              size: 24,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="top"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="font-medium"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              aria-haspopup="true"
              aria-expanded={isMenuOpen || isMobileMenuOpen}
              aria-label="Recursos"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Recursos
              <FiChevronDown
                size={12}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <FiChevronDown
                size={12}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          Inicio
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#contacto"
        variant="small"
        color="blue-gray"
        className="font-medium"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          Contacto
        </ListItem>
      </Typography>
    </List>
  );
}

export function MegaMenuWithPlacement() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Menú principal | Herz Edel</title>
        <meta name="description" content="Navegación principal y secciones destacadas de Herz Edel." />
      </Helmet>
      <Navbar className="mx-auto max-w-screen-xl px-4 py-2" aria-label="Menú principal" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Herz Edel
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
            aria-label={openNav ? "Cerrar menú" : "Abrir menú"}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {openNav ? (
              <FiX className="h-6 w-6" size={24} />
            ) : (
              <FiMenu className="h-6 w-6" size={24} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </>
  );
}