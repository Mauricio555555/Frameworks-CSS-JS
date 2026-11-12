import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [tailwindcss()],
    build: {
        rollupOptions: {
            input: {
                cursos: resolve(import.meta.dirname, 'index.html'),
                detalle: resolve(import.meta.dirname, 'detalle-cursos.html'),
                asignacion: resolve(import.meta.dirname, 'asignacion.html'),
                municipios: resolve(import.meta.dirname, 'municipios.html'),
                disponibilidad: resolve(import.meta.dirname, 'disponibilidad.html'),
            },
        },
    },
});
