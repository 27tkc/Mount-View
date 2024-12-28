import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zmqbvihwbortohifcnqy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptcWJ2aWh3Ym9ydG9oaWZjbnF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3NjMwODUsImV4cCI6MjA0MTMzOTA4NX0.CBzdoukrNDi_VrK0TM2H8YoOPTIKtvZZdgrf4vRSlz8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
