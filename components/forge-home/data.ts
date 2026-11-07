export const programs = [
  { name: 'Strength', detail: 'Build power that lasts.', image: 'https://images.pexels.com/photos/40279394/pexels-photo-40279394.jpeg', tag: '01' },
  { name: 'Conditioning', detail: 'Move faster. Go further.', image: 'https://images.pexels.com/photos/38675855/pexels-photo-38675855.jpeg', tag: '02' },
  { name: 'Mobility', detail: 'Own your full range.', image: 'https://images.pexels.com/photos/4164458/pexels-photo-4164458.jpeg', tag: '03' },
  { name: 'Yoga', detail: 'Breathe deeper. Move better.', image: 'https://images.pexels.com/photos/39635367/pexels-photo-39635367.jpeg', tag: '04' },
  { name: 'Personal Training', detail: 'A coach focused on you.', image: 'https://images.pexels.com/photos/37963576/pexels-photo-37963576.jpeg', tag: '05' },
]

export const plans = [
  { name: 'Monthly', price: '800', description: 'Flexible access for your current chapter.', personalTraining: '₹500 / month', perks: ['Full gym access', 'Open 24/7', 'Movement assessment'] },
  { name: '6 Month', price: '3,800', description: 'A focused commitment with room to grow.', personalTraining: '₹300 / month', perks: ['Everything in Monthly', 'All group training', 'Recovery suite access'], featured: true },
  { name: '1 Year', price: '7,600', description: 'The strongest value for a lasting transformation.', personalTraining: '₹200 / month', perks: ['Everything in 6 Month', 'Personal training benefits', 'Personal nutrition plan'] },
]

export const coaches = [
  { name: 'Mark Henry', image: 'https://images.pexels.com/photos/31918891/pexels-photo-31918891.jpeg' },
  { name: 'Merry Jane', image: 'https://images.pexels.com/photos/39635356/pexels-photo-39635356.jpeg' },
  { name: 'Murcus Figo', image: 'https://images.pexels.com/photos/5175203/pexels-photo-5175203.jpeg' },
]

export const facilities = [
  { title: 'The strength floor', detail: '3,000 sq ft of natural light, free weights, racks, and space to move.', icon: 'dumbbell' },
  { title: 'Recovery suite', detail: 'Reset between sessions with compression, mobility tools, and guided breathwork.', icon: 'heartPulse' },
  { title: 'Your training crew', detail: 'Small-group energy with coaches who know your name and your goals.', icon: 'users' },
] as const

export const faqs = [
  { question: 'Do I need experience to join?', answer: 'Not at all. Every programme begins with a thoughtful movement assessment, giving your coach a clear understanding of your experience, goals, and starting point.' },
  { question: 'Can I freeze my membership?', answer: 'Yes. Membership freezes are available for approved travel, health, or personal commitments.' },
  { question: 'What should I bring for my first session?', answer: 'Bring comfortable training clothes, clean indoor shoes, a water bottle, and an open mind.' },
]

export const schedule = [
  { time: '06:00', name: 'Rise & Strength', coach: 'Maya Chen', type: 'Strength' },
  { time: '07:30', name: 'Engine Room', coach: 'Jordan Bell', type: 'Conditioning' },
  { time: '12:30', name: 'Midday Mobility', coach: 'Alex Rivera', type: 'Mobility' },
  { time: '18:00', name: 'Build Together', coach: 'Maya Chen', type: 'Small group' },
]

export const reviews = [
  { name: 'Aisha Patel', since: 'Member since 2021', detail: 'Strength & conditioning / 18 month journey', image: 'https://images.pexels.com/photos/13197590/pexels-photo-13197590.jpeg', quote: 'I came in wanting to get stronger. I left every session feeling more capable in every part of my life.' },
  { name: 'Marcus Williams', since: 'Member since 2022', detail: 'Performance training / 12 month journey', image: 'https://images.pexels.com/photos/7203532/pexels-photo-7203532.jpeg', quote: 'The coaches bring intention to every session. I have finally found a routine I look forward to keeping.' },
  { name: 'Youhan Martinez', since: 'Member since 2020', detail: 'Mobility & strength / 3 year journey', image: 'https://images.pexels.com/photos/12914078/pexels-photo-12914078.jpeg', quote: 'Soul Fitness gave me the confidence to move without fear and the community to keep showing up.' },
  { name: 'Ethan Brooks', since: 'Member since 2023', detail: 'Conditioning / 9 month journey', image: 'https://images.pexels.com/photos/18502123/pexels-photo-18502123.jpeg', quote: 'Every detail feels thoughtful, from the programming to the people. This is the first gym that feels like mine.' },
]

export const videoGallery = [
  { title: 'Find your pace', src: 'https://res.cloudinary.com/dnpbnppjt/video/upload/v1793947672/4686178-hd_1080_1920_30fps_nuetxe.mp4' },
  { title: 'Keep moving', src: 'https://res.cloudinary.com/dnpbnppjt/video/upload/v1793947829/cycle_e4iphx.mp4' },
  { title: 'Build your back', src: 'https://res.cloudinary.com/dnpbnppjt/video/upload/v1793947896/lat-pulldown_ctdkkj.mp4' },
  { title: 'Train with intent', src: 'https://res.cloudinary.com/dnpbnppjt/video/upload/v1793947997/lunches_hmz897.mp4' },
  { title: 'Show up strong', src: 'https://res.cloudinary.com/dnpbnppjt/video/upload/v1793948212/hhhh_jpbhem.mp4' },
  { title: 'Own the work', src: 'https://res.cloudinary.com/dnpbnppjt/video/upload/v1793948273/15079889_1080_1920_30fps_yxskgx.mp4' },
  { title: 'Stronger together', src: 'https://res.cloudinary.com/dnpbnppjt/video/upload/v1793948490/ladiues_aqnjeo.mp4' },
  { title: 'Make it count', src: 'https://res.cloudinary.com/dnpbnppjt/video/upload/v1793948502/biceps_qsunkf.mp4' },
]

export const imageGallery = [
  'https://images.pexels.com/photos/17959564/pexels-photo-17959564.jpeg',
  'https://images.pexels.com/photos/29981150/pexels-photo-29981150.jpeg',
  'https://images.pexels.com/photos/14195075/pexels-photo-14195075.jpeg',
  'https://images.pexels.com/photos/13965336/pexels-photo-13965336.jpeg',
  'https://images.pexels.com/photos/13965335/pexels-photo-13965335.jpeg',
  'https://images.pexels.com/photos/6551405/pexels-photo-6551405.jpeg',
  'https://images.pexels.com/photos/30704302/pexels-photo-30704302.jpeg',
  'https://images.pexels.com/photos/29850907/pexels-photo-29850907.jpeg',
  'https://images.pexels.com/photos/39259266/pexels-photo-39259266.jpeg',
  'https://images.pexels.com/photos/32085164/pexels-photo-32085164.jpeg',
  'https://images.pexels.com/photos/29259734/pexels-photo-29259734.jpeg',
  'https://images.pexels.com/photos/29259736/pexels-photo-29259736.jpeg',
]
export const links = ['programs', 'reviews', 'membership', 'contact']
