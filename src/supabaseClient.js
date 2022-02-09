import { createClient } from '@supabase/supabase-js'
import apiKeys from './apiKeys'

const supabaseUrl = apiKeys.REACT_APP_SUPABASE_URL
const supabaseAnonKey = apiKeys.REACT_APP_SUPABASE_ANON_KEY


export const supabase = createClient(supabaseUrl, supabaseAnonKey)