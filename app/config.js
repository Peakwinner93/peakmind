/* Connexion au classement en ligne (Supabase).
   Tant que ces deux valeurs sont vides, l'appli marche normalement et le classement affiche « Bientôt en ligne ».
   Pour l'activer (avec un parent), voir le README, partie « Activer le classement en ligne ».
   La clé « anon public » est faite pour être publique : la sécurité est assurée par supabase/schema.sql. */
window.PEAKMIND_CONFIG = {
  supabaseUrl: '',       // ex. 'https://abcdefghij.supabase.co'
  supabaseAnonKey: ''    // ex. 'eyJhbGciOi…' (Project Settings › API › anon public)
};
