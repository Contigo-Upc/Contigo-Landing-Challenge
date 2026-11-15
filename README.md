# Contigo - Landing Page

**Contigo** es una aplicación que acompaña paso a paso a las personas que tienen dificultades con los trámites y pagos digitales, como pagar la luz, el agua o el internet, o renovar el DNI. Explica cada paso con lenguaje sencillo, apoyo visual y audio. Contigo solo orienta: el pago siempre lo hace la persona en la app o web oficial.

Este repositorio contiene el avance de implementación del Landing Page del proyecto, desarrollado para el curso **IHC y Tecnologías Móviles** de la Universidad Peruana de Ciencias Aplicadas (UPC).

## Autores

| Integrante |
| --- |
| Ayllón Varela, Mauricio Alonso |
| Aragón Peramás, Sebastián Miguel |
| Coras Zelada, Bruno Enrique |
| Leguia Quijano, Vilmar |
| Mayorga Garcia, Carolina |
| Negron Muñoz, Cayo Manuel Stefano |
| Vilcamiche Arce, Grecia Fabiola |

## Segmentos objetivo

- **Adultos mayores** que no se sienten seguros usando aplicaciones y páginas web para sus trámites.
- **Jóvenes sin experiencia en trámites** que no saben qué documentos necesitan ni por dónde empezar.
- **Personas con baja alfabetización digital** que necesitan instrucciones simples, con imágenes y audio.

## Principales características

- **Guía paso a paso:** una sola instrucción por pantalla, con imágenes, audio e indicador de progreso.
- **Modo práctica:** permite recorrer un trámite con datos de ejemplo antes de hacerlo de verdad.
- **Lectura de recibos:** toma una foto del recibo y Contigo identifica el número, el monto y la fecha de vencimiento.
- **Asistente:** resuelve dudas al instante y explica las palabras difíciles sin salir del trámite.
- **Recordatorios y calendario:** avisa antes de que venza un pago para no olvidarlo.
- **Accesibilidad:** textos grandes, buen contraste y lenguaje claro.

## Tecnologías

- HTML5, CSS3 y JavaScript, sin frameworks de CSS.
- Google Fonts (Poppins).

## Estructura del proyecto

```
public/
  index.html          Landing Page
  favicon.ico         Ícono del sitio
  assets/
    styles/
      styles.css      Estilos del Landing Page
    images/           Logo, ilustraciones e íconos
    scripts/
      main.js         Menú para celular, sección activa y año del pie
README.md
```

## Cómo ejecutarlo

1. Clona el repositorio.
2. Abre la carpeta del proyecto en WebStorm.
3. Abre `public/index.html` en el navegador, o usa el botón de vista previa de WebStorm.

## Flujo de trabajo

El repositorio sigue el modelo **GitFlow**:

- `main`: versiones estables.
- `develop`: integración de las funcionalidades terminadas.
- `feature/<nombre>`: una rama por funcionalidad, creada desde `develop` y unida a `develop` mediante un Pull Request.
- `release/<versión>`: preparación de una versión antes de pasarla a `main`.

Los commits siguen **Conventional Commits** en inglés, por ejemplo: `feat: add hero section`.
