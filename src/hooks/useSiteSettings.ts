import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const cache: { data: Record<string, string>; listeners: Set<() => void> } = {
  data: {},
  listeners: new Set(),
};

let loaded = false;
let channelSetup = false;

async function loadSettings() {
  const { data } = await supabase.from('site_settings').select('key,value');
  if (data) {
    const map: Record<string, string> = {};
    data.forEach((r: any) => { if (r.value) map[r.key] = r.value; });
    cache.data = map;
    cache.listeners.forEach(fn => fn());
  }
  loaded = true;
}

function setupChannel() {
  if (channelSetup) return;
  channelSetup = true;
  supabase
    .channel('global-site-settings')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'site_settings' }, () => loadSettings())
    .subscribe();
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<Record<string, string>>(cache.data);

  useEffect(() => {
    const update = () => setSettings({ ...cache.data });
    cache.listeners.add(update);

    if (!loaded) loadSettings();
    setupChannel();

    return () => { cache.listeners.delete(update); };
  }, []);

  return settings;
}

export function getSetting(settings: Record<string, string>, key: string, fallback: string): string {
  return settings[key] || fallback;
}
