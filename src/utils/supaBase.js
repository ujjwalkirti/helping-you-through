
import { createClient } from '@supabase/supabase-js'
const supaUrl=process.env.NEXT_PUBLIC_SUPABASE_URL;
const supaKey=process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supaUrl, supaKey);

export default supabase;
