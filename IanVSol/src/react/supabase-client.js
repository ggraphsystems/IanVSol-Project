import { createClient } from "@supabase/supabase-js"
import api from "./dbclient"; 

const supabaseUrl = api.supabaseUrl
const supabaseKey = api.supabaseKey

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;