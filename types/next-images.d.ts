// Tipos de los imports de imágenes (import photo from "@/public/photo.png").
// next-env.d.ts también los incluye, pero Next lo genera al ejecutar dev/build y está en .gitignore,
// así que no existe en el CI; este archivo sí se versiona.
/// <reference types="next/image-types/global" />
