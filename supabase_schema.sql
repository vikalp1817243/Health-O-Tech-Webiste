-- ==============================================================================
-- Supabase PostgreSQL Schema & Seed Data for Health-O-Tech Hierarchy Flowchart
-- ==============================================================================

-- 1. Create table
create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  level int not null check (level in (0, 1, 2, 4, 5)),
  team_name text not null,
  photo_url text, -- Storage bucket public URL
  tagline text,
  email text,
  linkedin_url text,
  github_url text,
  order_index int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 2. Enable Row Level Security (RLS)
alter table public.team_members enable row level security;

-- 3. Policy: Allow anyone (public / anon) to read team members
create policy "Allow public read access"
  on public.team_members
  for select
  using (true);

-- 4. Policy: Allow authenticated users / service role to insert or update
create policy "Allow service role full access"
  on public.team_members
  for all
  using (auth.role() = 'authenticated' or auth.role() = 'service_role');

-- ==============================================================================
-- Storage Bucket Setup Instructions:
-- 1. In Supabase Dashboard, go to Storage -> "New Bucket"
-- 2. Name: team-photos
-- 3. Toggle "Public bucket" to ON
-- 4. Upload member photos, click "Copy URL", and paste into photo_url below!
-- ==============================================================================

-- 5. Seed Initial Data (Hierarchy Levels 0 to 5)
insert into public.team_members (name, role, level, team_name, tagline, photo_url, order_index)
values
  -- Level 0: President
  ('Aarav Sharma', 'President', 0, 'Executive Board', 'Steering club vision & strategic initiatives', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400', 1),
  
  -- Level 1: Vice President
  ('Priya Nair', 'Vice President', 1, 'Executive Board', 'Overseeing operations & cross-department synergy', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400', 2),

  -- Level 2: General Secretary
  ('Rohan Varma', 'General Secretary', 2, 'Executive Board', 'Governance, coordination & club compliance', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400', 3),

  -- Level 4 & 5: Team 1 - Technical & Development
  ('Kabir Mehta', 'Team Lead', 4, 'Technical & Development', 'Full-stack & IoT health monitoring', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400', 10),
  ('Ananya Iyer', 'Vice Lead', 4, 'Technical & Development', 'Embedded systems & firmware', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400', 11),
  ('Devansh Patel', 'Core Member', 5, 'Technical & Development', null, 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400', 12),
  ('Sanya Gupta', 'Core Member', 5, 'Technical & Development', null, 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400', 13),

  -- Level 4 & 5: Team 2 - Research & Innovations
  ('Dr. Vikram Joshi', 'Team Lead', 4, 'Research & Innovations', 'Biomedical signals & clinical trials', 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400', 20),
  ('Meera Kulkarni', 'Vice Lead', 4, 'Research & Innovations', 'Genomic data & computational biology', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400', 21),
  ('Aditya Rao', 'Core Member', 5, 'Research & Innovations', null, 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400', 22),

  -- Level 4 & 5: Team 3 - Events & Operations
  ('Karan Malhotra', 'Team Lead', 4, 'Events & Operations', 'Hackathons, symposiums & logistics', 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400', 30),
  ('Neha Reddy', 'Vice Lead', 4, 'Events & Operations', 'Stage & operational workflows', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400', 31),
  ('Ishaan Ghosh', 'Core Member', 5, 'Events & Operations', null, 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400', 32),

  -- Level 4 & 5: Team 4 - Design & Creative Media
  ('Dia Singhania', 'Team Lead', 4, 'Design & Creative Media', 'Brand identity, UI/UX & motion design', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400', 40),
  ('Arjun Verma', 'Vice Lead', 4, 'Design & Creative Media', '3D rendering & digital assets', 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=400', 41),

  -- Level 4 & 5: Team 5 - PR & Outreach
  ('Simran Kaur', 'Team Lead', 4, 'PR & Outreach', 'Media relations & university networks', 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=400', 50),
  ('Gaurav Bhatt', 'Vice Lead', 4, 'PR & Outreach', 'Community engagement & ambassadorship', 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400', 51),

  -- Level 4 & 5: Team 6 - Sponsorship & Relations
  ('Siddharth Jain', 'Team Lead', 4, 'Sponsorship & Relations', 'Corporate tie-ups & research grants', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400', 60),
  ('Nandini Pillai', 'Vice Lead', 4, 'Sponsorship & Relations', 'Industry sponsors & donor management', 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400', 61),

  -- Level 4 & 5: Team 7 - Content & Documentation
  ('Pooja Das', 'Team Lead', 4, 'Content & Documentation', 'Whitepapers, publications & editorial', 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400', 70),
  ('Raghav Chawla', 'Vice Lead', 4, 'Content & Documentation', 'Technical blogs & event archives', 'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&q=80&w=400', 71);
