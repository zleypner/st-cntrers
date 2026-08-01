/**
 * Testimonios de pacientes
 * Los textos se mantienen en su idioma original
 * Las traducciones se marcan como tal cuando se muestran
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  originalLanguage: "en" | "es";
}

export const testimonials: Testimonial[] = [
  {
    id: "liran-rosenfeld",
    name: "Liran Rosenfeld",
    role: "Local Guide · 13 reviews · 7 photos",
    rating: 5,
    text: `Marcela is not just a dentist; she's a magician wielding dental tools and transforming smiles. Over the past three years, I've entrusted Marcela with my dental care, from routine clean-ups to cavity fixes, and every experience has been flawless.

What sets Marcela apart is her unique blend of artistry and empathy. She's not just fixing teeth; she's crafting masterpieces.

Marcela's adaptability shines as she tailors her approach to each client. It's a rarity to find someone who can seamlessly blend professionalism with personal connection, but Marcela does it effortlessly.

The results speak for themselves. My old smile feels like a relic compared to the radiant grin Marcela has crafted for me. It's not just a cosmetic change; it's a game-changer in how I carry myself and interact with the world.

With two decades of experience as an independent dentist, Marcela's expertise is unmatched. If you're looking for more than just dental care, Marcela is the one to see.`,
    originalLanguage: "en",
  },
  {
    id: "manex-manex",
    name: "Manex Manex",
    role: "5 reviews · 5 photos",
    rating: 5,
    text: `Best dentist in town! Marcela is a really good dentist, and she puts so much care and dedication into her work.

She helped me with several dental issues, including cavities, and made me a bridge. The result is amazing.

Thank you for giving me back my beautiful smile. 100% recommended to anybody who wants to take care of their teeth and smile.`,
    originalLanguage: "en",
  },
];
