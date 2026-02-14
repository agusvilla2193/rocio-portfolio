/**
 * Tipos de categorías permitidas para los proyectos.
 * Al usar un Type Literal, evitamos errores de tipeo en la data.
 */
export type Category = "Reel" | "Documentary" | "Commercial";

/**
 * Interfaz principal para el objeto Proyecto.
 */
export interface Project {
    id: string;
    title: string;
    country: string;
    category: Category;
    videoUrl: string;
    thumbnail: string;
}
