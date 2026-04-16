export interface Site {
  id: string
  name: string
  description: string
  url: string
  tags: string[]
}

export const sites: Site[] = [
  {
    id: 'bakeri-larsen',
    name: 'Bakeri Larsen',
    description: 'Artisan bakery in Oslo. Online menu, opening hours, and a simple order form for catering.',
    url: 'https://example.com',
    tags: ['Food & drink', 'Local business'],
  },
  {
    id: 'fjord-yoga',
    name: 'Fjord Yoga Studio',
    description: 'Wellness studio with class schedule, instructor bios, and membership sign-up.',
    url: 'https://example.com',
    tags: ['Health & wellness', 'Booking'],
  },
  {
    id: 'nords-photo',
    name: 'Nords Photography',
    description: 'Portfolio site for a freelance photographer. Gallery-first layout with a contact form.',
    url: 'https://example.com',
    tags: ['Portfolio', 'Creative'],
  },
  {
    id: 'haug-consulting',
    name: 'Haug Consulting',
    description: 'One-page site for a business consultant. Services, testimonials, and a booking link.',
    url: 'https://example.com',
    tags: ['Consulting', 'One-page'],
  },
  {
    id: 'kvist-coffee',
    name: 'Kvist Coffee Roasters',
    description: 'Small-batch roastery with a product catalogue and subscription sign-up.',
    url: 'https://example.com',
    tags: ['E-commerce', 'Food & drink'],
  },
]
