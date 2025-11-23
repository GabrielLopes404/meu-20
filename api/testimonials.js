import { readFileSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';

function generateStableId(content) {
  return createHash('sha256').update(content).digest('hex').substring(0, 16);
}

export default async function handler(req, res) {
  try {
    const dataPath = join(process.cwd(), 'data', 'testimonials.json');
    const content = readFileSync(dataPath, 'utf-8');
    const items = JSON.parse(content);
    
    const testimonials = items.map((testimonial) => ({
      id: generateStableId(testimonial.author),
      author: testimonial.author,
      text: testimonial.text,
      avatarUrl: testimonial.avatarUrl ?? null
    }));
    
    res.status(200).json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
}
