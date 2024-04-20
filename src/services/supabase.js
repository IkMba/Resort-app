import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gafvhzudgovcmuedcuwo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhZnZoenVkZ292Y211ZWRjdXdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1ODM1ODAsImV4cCI6MjAyODE1OTU4MH0.ehba0VZxHN6xrAjnaIV3aL6-SDhN0Gau7n9Mfwk7fYQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
