# Diagrama de Flujo de Componentes Herz Edel

```mermaid
flowchart TD
    A[App.tsx] --> B[AppRouter]
    B --> C[HeaderPro]
    B --> D[Sidebar]
    B --> E[Main Content]
    E --> F[HomePage]
    E --> G[Secciones]
    G --> G1[HembrasHomePages]
    G --> G2[MachosHomePages]
    G --> G3[JovenesHomePages]
    G --> G4[CamadasHomePage]
    G1 --> H1[Maxima]
    G1 --> H2[Mistica]
    G1 --> H3[Tessa]
    G1 --> H4[Xammy]
    G3 --> J1[Bruce]
    G3 --> J2[Zafira]
    
    subgraph Navegacion
        K[NavegacionContext]
    end
    F --> K
    G1 --> K
    G3 --> K
    G2 --> K
    G4 --> K
    
    C --> L[Logo]
    C --> M[Menu]
    D --> N[Links]
    
    F --> O[CarouselHome]
    F --> P[Footer]
```

---

- **App.tsx:** Punto de entrada, renderiza el router y layout principal.
- **AppRouter:** Gestiona las rutas y renderiza las páginas según la navegación.
- **HeaderPro/Sidebar:** Componentes de layout y navegación.
- **HomePage:** Página principal, incluye carrusel y footer.
- **Secciones:** Cada sección (hembras, machos, jóvenes, camadas) tiene su propia página y componentes de galería/detalle.
- **NavegacionContext:** Contexto para manejar el estado de navegación entre secciones y componentes.

Puedes visualizar este diagrama en VS Code con la extensión "Markdown Preview Mermaid Support" o en mermaid.live.
