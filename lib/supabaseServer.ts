// lib/supabaseServer.ts (if needed later)
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const createSupabaseServerClient = () => {
  return createServerComponentClient({ cookies });
};
