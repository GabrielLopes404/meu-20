import { readFileSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';

function generateStableId(content) {
  return createHash('sha256').update(content).digest('hex').substring(0, 16);
}

export default async function handler(req, res) {
  try {
    const dataPath = join(process.cwd(), 'data', 'services.json');
    const content = readFileSync(dataPath, 'utf-8');
    const items = JSON.parse(content);
    
    const services = items.map((service) => ({
      id: generateStableId(service.title),
      title: service.title,
      description: service.description,
      icon: service.icon
    }));
    
    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
}
