import { readFileSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';

function generateStableId(content) {
  return createHash('sha256').update(content).digest('hex').substring(0, 16);
}

export default async function handler(req, res) {
  try {
    const dataPath = join(process.cwd(), 'data', 'faqs.json');
    const content = readFileSync(dataPath, 'utf-8');
    const items = JSON.parse(content);
    
    const faqs = items.map((faq) => ({
      id: generateStableId(faq.question),
      question: faq.question,
      answer: faq.answer,
      order: faq.order ?? 0
    }));
    
    res.status(200).json(faqs);
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    res.status(500).json({ error: 'Failed to fetch FAQs' });
  }
}
