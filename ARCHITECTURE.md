# Arquitectura Herz Edel App

```mermaid
graph TD
    A[public/img/varios] -->|Imágenes| B[hembras]
    A -->|Imágenes| C[machos]
    A -->|Imágenes| D[jovenes]
    A -->|Imágenes| E[camadas]
    
    subgraph src/External
        F[components]
        G[pages]
        H[secciones]
    end
    
    F --> F1[layout]
    F --> F2[ui]
    G --> G1[HomePage.tsx]
    G --> G2[Settings.tsx]
    G --> G3[Dashboard.tsx]
    H --> H1[hembras]
    H --> H2[machos]
    H --> H3[jovenes]
    H --> H4[camadas]
    H1 --> H1a[components]
    H1 --> H1b[pages]
    H3 --> H3a[components]
    H3 --> H3b[pages]
    H1a -->|Maxima, Mistica, Tessa, Xammy| I[Componentes Hembras]
    H3a -->|Bruce, Zafira| J[Componentes Jovenes]
    H1b -->|HembrasHomePages.tsx| K[Página Hembras]
    H3b -->|JovenesHomePages.tsx| L[Página Jovenes]
    
    subgraph src/store/external
        M[NavegacionContext.tsx]
    end
    
    F1 -->|Header, Sidebar, Layout| N[Layout]
    F2 -->|Button, Card| O[UI]
    
    G1 -->|Landing| P[Home]
    G2 -->|Configuración| Q[Settings]
    G3 -->|Panel| R[Dashboard]
```

---

- **Imágenes:** Se almacenan en `public/img/varios/...` y se usan en las galerías de cada sección.
- **Componentes y páginas:** Cada sección (hembras, machos, jóvenes, etc.) tiene sus propios componentes y página principal.
- **Navegación:** Se gestiona con React context (`NavegacionContext.tsx`).
- **Layout/UI:** Componentes compartidos para estructura y elementos visuales.
- **SEO:** Meta tags en `index.html` y Helmet en cada página.

Puedes visualizar este diagrama en VS Code con la extensión "Markdown Preview Mermaid Support" o en cualquier editor compatible con Mermaid.
