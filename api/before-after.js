import { readFileSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';

function generateStableId(content) {
  return createHash('sha256').update(content).digest('hex').substring(0, 16);
}

export default async function handler(req, res) {
  try {
    const dataPath = join(process.cwd(), 'data', 'before-after.json');
    const content = readFileSync(dataPath, 'utf-8');
    const items = JSON.parse(content);
    
    const beforeAfter = items.map((item) => ({
      id: generateStableId(item.title + item.client),
      title: item.title,
      client: item.client,
      beforeImageUrl: item.beforeImageUrl,
      afterImageUrl: item.afterImageUrl,
      order: item.order ?? 0
    }));
    
    res.status(200).json(beforeAfter);
  } catch (error) {
    console.error('Error fetching before/after:', error);
    res.status(500).json({ error: 'Failed to fetch before/after items' });
  }
}
