-- Supabase SQL Schema for Dancer Portfolio (Paula Navarro)
-- Run this in your Supabase SQL Editor to initialize all tables and policies

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
  id TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  full_name TEXT NOT NULL,
  headline TEXT NOT NULL,
  secondary_headline TEXT,
  status TEXT,
  location TEXT,
  hero_image TEXT,
  hero_video_url TEXT,
  bio_short TEXT,
  bio_full TEXT[],
  quote JSONB,
  director_endorsement JSONB,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Casting Stats Table
CREATE TABLE IF NOT EXISTS public.casting_stats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id TEXT REFERENCES public.profiles(id) ON DELETE CASCADE,
  height TEXT,
  hair_color TEXT,
  eye_color TEXT,
  shoe_size TEXT,
  measurements TEXT,
  dress_size TEXT,
  vocal_range TEXT,
  unions TEXT,
  passports TEXT,
  driving TEXT,
  disciplines JSONB
);

-- 3. Showreels Table
CREATE TABLE IF NOT EXISTS public.showreels (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  duration TEXT,
  resolution TEXT DEFAULT '4K UHD',
  description TEXT,
  thumbnail TEXT,
  video_url TEXT,
  vimeo_id TEXT,
  sort_order INT DEFAULT 0
);

-- 4. Experience & Credits Table
CREATE TABLE IF NOT EXISTS public.experience_credits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  year TEXT NOT NULL,
  category TEXT NOT NULL, -- 'Theater', 'TV & Film', 'Music Videos'
  title TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  director TEXT NOT NULL,
  highlights TEXT[],
  featured BOOLEAN DEFAULT false,
  sort_order INT DEFAULT 0
);

-- 5. Gallery Photos Table
CREATE TABLE IF NOT EXISTS public.gallery_photos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL, -- 'Headshots', 'Action/Stage Shots', 'Editorial'
  image_url TEXT NOT NULL,
  photographer TEXT,
  production TEXT,
  aspect_ratio TEXT DEFAULT '3/4',
  tags TEXT[],
  sort_order INT DEFAULT 0
);

-- 6. Contact Inquiries Table
CREATE TABLE IF NOT EXISTS public.contact_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  production_type TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.casting_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.showreels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience_credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Public read policies for portfolio content
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Public stats are viewable by everyone" ON public.casting_stats FOR SELECT USING (true);
CREATE POLICY "Public showreels are viewable by everyone" ON public.showreels FOR SELECT USING (true);
CREATE POLICY "Public credits are viewable by everyone" ON public.experience_credits FOR SELECT USING (true);
CREATE POLICY "Public photos are viewable by everyone" ON public.gallery_photos FOR SELECT USING (true);

-- Allow public insertion for contact inquiries
CREATE POLICY "Allow public submissions for contact inquiries" ON public.contact_inquiries FOR INSERT WITH CHECK (true);
