# Arquitectura Herz Edel App

```mermaid
graph TD;
    subgraph "Assets Públicos"
        A["public/img/varios"]
    end
    
    subgraph "Código Fuente (src)"
        subgraph "UI Compartida (components)"
            F1["layout (Header, Sidebar)"]
            F2["ui (Button, Card)"]
        end

        subgraph "Páginas Globales (pages)"
            G1["HomePage.tsx (Landing)"]
            G2["Settings.tsx"]
            G3["Dashboard.tsx"]
        end

        subgraph "Módulos/Secciones (secciones)"
            H1["hembras"]
            H2["machos"]
            H3["jovenes"]
            H4["camadas"]
        end

        subgraph "Estado Global (store)"
            M["NavegacionContext.tsx"]
        end
    end

    H1 -- "Contiene" --> H1_subgraph["<br>components/<br>pages/HembrasHomePage.tsx"]
    H3 -- "Contiene" --> H3_subgraph["<br>components/<br>pages/JovenesHomePage.tsx"]

    A --> H1 & H2 & H3 & H4

    classDef default fill:#fff,stroke:#333,stroke-width:2px;
    classDef subgraph-bg fill:#f2f2f2,stroke:#ccc,stroke-width:1px;

    class A,F1,F2,G1,G2,G3,H1,H2,H3,H4,M,H1_subgraph,H3_subgraph default;
```

---

- **Imágenes:** Se almacenan en `public/img/varios/...` y se usan en las galerías de cada sección.
- **Componentes y páginas:** Cada sección (hembras, machos, jóvenes, etc.) tiene sus propios componentes y página principal.
- **Navegación:** Se gestiona con React context (`NavegacionContext.tsx`).
- **Layout/UI:** Componentes compartidos para estructura y elementos visuales.
- **SEO:** Meta tags en `index.html` y Helmet en cada página.

Puedes visualizar este diagrama en VS Code con la extensión "Markdown Preview Mermaid Support" o en cualquier editor compatible con Mermaid.
