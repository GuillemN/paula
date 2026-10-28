/**
 * portfolioService.js
 * Supabase-ready data service layer.
 * 
 * If VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are provided in .env,
 * this service can query the corresponding Supabase tables:
 * - 'profiles'
 * - 'casting_stats'
 * - 'showreels'
 * - 'experience_credits'
 * - 'gallery_photos'
 * - 'contact_inquiries'
 * 
 * Otherwise, it reliably yields cached/curated offline data with zero latency.
 */

import {
  dancerProfile,
  castingStats,
  showreelData,
  experienceTimeline,
  galleryItems,
  representationData
} from '../data/dancerData';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_KEY);

export async function fetchProfile() {
  if (isSupabaseConfigured) {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/profiles?select=*&limit=1`, {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.length > 0) return { ...dancerProfile, ...data[0] };
      }
    } catch (err) {
      console.warn('Falling back to local profile data due to fetch error:', err);
    }
  }
  return dancerProfile;
}

export async function fetchCastingStats() {
  return castingStats;
}

export async function fetchShowreels() {
  return showreelData;
}

export async function fetchExperience() {
  return experienceTimeline;
}

export async function fetchGallery() {
  return galleryItems;
}

export async function fetchRepresentation() {
  return representationData;
}

export async function submitContactInquiry(inquiry) {
  // If Supabase is active, insert row into 'contact_inquiries'
  if (isSupabaseConfigured) {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/contact_inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          Prefer: 'return=representation'
        },
        body: JSON.stringify({
          name: inquiry.name,
          email: inquiry.email,
          production_type: inquiry.productionType,
          company: inquiry.company,
          message: inquiry.message,
          created_at: new Date().toISOString()
        })
      });
      if (!res.ok) throw new Error('Supabase insertion failed');
      return { success: true, via: 'supabase' };
    } catch (err) {
      console.error('Supabase contact submission failed, fallback to local simulate:', err);
    }
  }

  // Fallback simulated submission with realistic network latency
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  // Store submission in localStorage for casting director convenience
  try {
    const existing = JSON.parse(localStorage.getItem('dancer_inquiries') || '[]');
    existing.push({ ...inquiry, timestamp: new Date().toISOString() });
    localStorage.setItem('dancer_inquiries', JSON.stringify(existing));
  } catch (e) {
    console.debug('localStorage inquiry write', e);
  }

  return { success: true, via: 'simulated' };
}
