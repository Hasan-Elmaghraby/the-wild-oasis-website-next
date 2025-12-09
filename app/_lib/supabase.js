import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URl;
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
