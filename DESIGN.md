---
name: Javier Rojas — Portafolio
description: Hoja de vida viva en forma de ledger de auditoría para reclutadores
colors:
  paper: "#f3f0e6"
  paper-deep: "#e8e4d6"
  ink: "#1a1c18"
  ink-muted: "#3d4238"
  greenbar: "#b8c9a8"
  greenbar-deep: "#8fa67c"
  stamp: "#c43c2c"
  stamp-deep: "#9e2f22"
  rule: "#2a2e26"
  white: "#faf9f4"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Georgia, serif"
    fontSize: "clamp(2.75rem, 8vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  heading:
    fontFamily: "Bricolage Grotesque, Georgia, serif"
    fontSize: "clamp(1.65rem, 3.5vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  subheading:
    fontFamily: "Bricolage Grotesque, Georgia, serif"
    fontSize: "clamp(1.15rem, 2.4vw, 1.45rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Bricolage Grotesque, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  body-lead:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "-0.015em"
  ui:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  chip:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0"
  hint:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0"
  mono:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
  mono-sm:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
  mono-xs:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.68rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.05em"
  mono-micro:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.65rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.1em"
  stamp-label:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.62rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
  stamp-label-sm:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.55rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.12em"
  link-meta:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.04em"
  dossier-id:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.1em"
  nav-mobile:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.85rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  none: "0"
  sm: "2px"
  stamp: "50%"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "3rem"
  xl: "5rem"
  section: "clamp(4rem, 10vw, 7rem)"
components:
  button-stamp:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1.6rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.9rem 1.6rem"
---

# Design System — Ledger de auditoría

## Overview

Portafolio personal de Javier Andrés Rojas Erazo presentado como un **informe de auditoría en papel continuo (greenbar)**. La página es la hoja de vida que un reclutador puede escanear en segundos: encabezado de reporte, columnas de trayectoria, expedientes de proyectos y un sello de contacto. Luz de escritorio (fondo papel claro); el verde de listado es el color comprometido; el rojo sello marca la acción primaria.

## Colors

| Token | Hex | Uso |
|-------|-----|-----|
| paper | `#f3f0e6` | Fondo de página |
| paper-deep | `#e8e4d6` | Bandas / zebra secundaria |
| greenbar | `#b8c9a8` | Filas impares del ledger, acentos de sección |
| greenbar-deep | `#8fa67c` | Verde comprometido más denso |
| ink | `#1a1c18` | Texto principal, reglas |
| ink-muted | `#3d4238` | Texto secundario (tinte desde ink, no gris neutro) |
| stamp | `#c43c2c` | CTA, sello “disponible”, foco |
| rule | `#2a2e26` | Líneas de reporte |

No usar degradados en texto. No tema oscuro neón.

## Typography

- **Display / headings:** Bricolage Grotesque — peso y escala hacen el trabajo del “logo de reporte”.
- **Meta / fechas / columnas:** Azeret Mono — solo para datos, periodos y etiquetas de documento (no como disfraz “tech”).
- Medida de cuerpo ~65–75ch. Display máximo ~5.5rem.

## Layout

- Contenedor max ~1080px; márgenes generosos.
- Primer viewport = encabezado de informe (marca JR + nombre + rol + foto carnet + CTA).
- Experiencia = filas de ledger (periodo | empresa | rol), no tarjetas idénticas.
- Más espacio arriba de cada título de sección que debajo.
- Móvil: columnas del ledger se apilan; la foto baja bajo el título.

## Elevation & Depth

Casi plano (papel). Sombra solo en el sello/CTA al hover (offset + blur suave). Sin glassmorphism.

## Shapes

Esquinas casi rectas (2px). El único círculo es el sello redondo de marca/estado.

## Components

- **Nav:** barra fina sobre papel, tipografía mono para links, marca JR en caja con borde.
- **Botón sello:** fondo stamp, tipografía display condensed, hover oscurece y “imprime” sombra.
- **Fila ledger:** zebra greenbar / paper; hover eleva tinta.
- **Chips de skill:** borde rule, fondo paper-deep; sin barras de porcentaje.
- **Expediente de proyecto:** bloque con regla superior gruesa, meta mono, link externo.

## Do's and Don'ts

**Do:** Escaneabilidad para reclutadores; prueba (roles, proyectos, links) sobre claims; contacto siempre visible.

**Don't:** Barras de skill inventadas; cards de icono+título+texto como estructura; texto en gradiente; dark mode cyan; Inter / Space Grotesk como display.
