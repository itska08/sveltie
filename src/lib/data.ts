import { browser } from '$app/environment';

export interface Character {
  name: string;
  category: string;
  tier: string;
}

export interface Lightcone {
  name: string;
  rarity: string;
}

export async function getCharacters(): Promise<Character[]> {
  if (!browser) return [];
  const { get } = await import('idb-keyval');
  return (await get<Character[]>('characters')) ?? [];
}

export async function addCharacter(c: Character) {
  if (!browser) return;
  const { get, set } = await import('idb-keyval');
  const list = (await get<Character[]>('characters')) ?? [];
  list.push(c);
  await set('characters', list);
}

export async function getLightcones(): Promise<Lightcone[]> {
  if (!browser) return [];
  const { get } = await import('idb-keyval');
  return (await get<Lightcone[]>('lightcones')) ?? [];
}

export async function addLightcone(c: Lightcone) {
  if (!browser) return;
  const { get, set } = await import('idb-keyval');
  const list = (await get<Lightcone[]>('lightcones')) ?? [];
  list.push(c);
  await set('lightcones', list);
}

export async function getTiered(): Promise<Record<string, Record<string, string[]>>> {
  const chars = await getCharacters();
  const categories = ['DPS', 'Support DPS', 'Amplifier', 'Sustain'];
  const tiers = ['T0', 'T0.5', 'T1', 'T2', 'T3', 'T4', 'T5'];
  const out: Record<string, Record<string, string[]>> = {};
  for (const cat of categories) {
    out[cat] = {};
    for (const tier of tiers) out[cat][tier] = [];
  }
  for (const c of chars) {
    if (!out[c.category]) out[c.category] = {};
    if (!out[c.category][c.tier]) out[c.category][c.tier] = [];
    out[c.category][c.tier].push(c.name);
  }
  return out;
}
