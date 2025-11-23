import { readFileSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';

function generateStableId(content) {
  return createHash('sha256').update(content).digest('hex').substring(0, 16);
}

export default async function handler(req, res) {
  try {
    const dataPath = join(process.cwd(), 'data', 'portfolio.json');
    const content = readFileSync(dataPath, 'utf-8');
    const items = JSON.parse(content);
    
    const portfolioItems = items.map((item) => ({
      id: generateStableId(item.title + item.category),
      title: item.title,
      category: item.category,
      imageUrl: item.imageUrl,
      description: item.description ?? null,
      client: item.client ?? null,
      order: item.order ?? 0
    }));
    
    res.status(200).json(portfolioItems);
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({ error: 'Failed to fetch portfolio items' });
  }
}
