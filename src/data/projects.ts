import { Project } from "@/types";

/**
 * Array de proyectos (Base de datos local).
 * En el futuro, este array podría ser reemplazado por una llamada a un CMS.
 */
export const PROJECTS: Project[] = [
    {
        id: "1",
        title: "Amanecer en los Alpes",
        country: "Suiza",
        category: "Reel",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-traveling-over-a-snowy-mountain-range-at-sunset-41006-large.mp4",
        thumbnail: "https://images.unsplash.com/photo-1531219572328-a0e71b4a9d7c"
    },
    {
        id: "2",
        title: "Luces de Tokyo",
        country: "Japón",
        category: "Documentary",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-busy-intersection-at-night-42244-large.mp4",
        thumbnail: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26"
    }
];

/**
 * Servicio de obtención de proyectos.
 * Implementado como promesa para simular latencia de red (API Ready).
 */
export const getProjects = async (): Promise<Project[]> => {
    // Simulamos una pequeña demora de red para probar estados de carga (opcional)
    // await new Promise((resolve) => setTimeout(resolve, 500));

    return Promise.resolve(PROJECTS);
};
