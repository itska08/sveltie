import { get, set } from 'idb-keyval';

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
  return (await get<Character[]>('characters')) ?? [];
}

export async function addCharacter(c: Character) {
  const list = await getCharacters();
  list.push(c);
  await set('characters', list);
}

export async function getLightcones(): Promise<Lightcone[]> {
  return (await get<Lightcone[]>('lightcones')) ?? [];
}

export async function addLightcone(c: Lightcone) {
  const list = await getLightcones();
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
