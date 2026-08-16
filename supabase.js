import { createClient } from '@supabase/supabase-js';

// Supabase - Backend completo com PostgreSQL + Auth + Storage + Realtime
// 1. Crie uma conta em: supabase.com
// 2. Crie um projeto
// 3. Va em Settings > API e copie a URL e a anon key

const supabaseUrl = process.env.SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// ==================== AUTENTICACAO ====================
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// ==================== DATABASE ====================
export async function getAll(table) {
  const { data, error } = await supabase.from(table).select('*');
  if (error) throw error;
  return data;
}

export async function getById(table, id) {
  const { data, error } = await supabase.from(table).select('*').eq('id', id).single();
  if (error) throw error;
  return data;
}

export async function insert(table, values) {
  const { data, error } = await supabase.from(table).insert(values).select();
  if (error) throw error;
  return data;
}

export async function update(table, id, values) {
  const { data, error } = await supabase.from(table).update(values).eq('id', id).select();
  if (error) throw error;
  return data;
}

export async function remove(table, id) {
  const { error } = await supabase.from(table).delete().eq('id', id);
  if (error) throw error;
}

// ==================== STORAGE ====================
export async function uploadFile(bucket, path, file) {
  const { data, error } = await supabase.storage.from(bucket).upload(path, file);
  if (error) throw error;
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}

// ==================== REALTIME ====================
export function subscribeToTable(table, callback) {
  return supabase.channel('db-changes')
    .on('postgres_changes', { event: '*', schema: 'public', table }, callback)
    .subscribe();
}
