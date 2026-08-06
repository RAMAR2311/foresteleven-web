// Configuración del cliente Supabase para ForestEleven
// Reemplaza estas constantes con las llaves de tu proyecto en Supabase (Project Settings -> API)

const SUPABASE_URL = 'https://iovhrpxuccomqukwubmn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ntzF1vnE3pISWi_dpgxtVQ_maUEe8r0';

// Inicializar cliente Supabase si la librería global existe
let supabaseClient = null;
if (typeof supabase !== 'undefined' && typeof supabase.createClient === 'function') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.warn('Supabase JS SDK no fue cargado correctamente.');
}
