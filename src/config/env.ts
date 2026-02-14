export const ENV = {
    social: {
        instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
        tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "",
        youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    },
    contact: {
        phone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "",
        email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
    },
} as const;

// Validamos que no haya datos críticos vacíos en desarrollo
if (process.env.NODE_ENV === "development") {
    if (!ENV.contact.phone) console.warn("⚠️ NEXT_PUBLIC_WHATSAPP_PHONE no está definida en .env.local");
}
