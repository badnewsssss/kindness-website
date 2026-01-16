import type { CommitteeMember } from '@/types/committee';

export const committeeMembers: CommitteeMember[] = [
  {
    id: 'member-001',
    name: 'Dr. Sarah Mitchell',
    role: 'Chair',
    title: 'Clinical Psychologist',
    organization: 'Autism Spectrum Clinic',
    bio: 'Dr. Mitchell has over 20 years of experience specializing in autism spectrum disorders. She leads diagnostic assessments and family support programs, and has published numerous research papers on early intervention strategies. Her dedication to improving the lives of individuals with autism and their families drives her commitment to community education and advocacy.',
    image: {
      src: '/images/committee/member-001.jpg',
      alt: 'Dr. Sarah Mitchell, Clinical Psychologist',
    },
    expertise: ['Clinical Psychology', 'Autism Diagnosis', 'Family Therapy', 'Early Intervention'],
    social: {
      linkedin: 'https://linkedin.com/in/sarah-mitchell-phd',
      email: 'sarah.mitchell@example.org',
    },
    order: 1,
    joinedDate: '2020-01-15',
  },
  {
    id: 'member-002',
    name: 'James Rodriguez',
    role: 'Vice Chair',
    title: 'Special Education Director',
    organization: 'County Public Schools',
    bio: 'With 15 years in special education leadership, James has revolutionized inclusive education practices across 45 schools. He develops training programs for educators and has successfully implemented individualized learning plans that have helped hundreds of students with autism thrive in mainstream classrooms.',
    image: {
      src: '/images/committee/member-002.jpg',
      alt: 'James Rodriguez, Special Education Director',
    },
    expertise: ['Special Education', 'Inclusive Learning', 'Teacher Training', 'IEP Development'],
    social: {
      linkedin: 'https://linkedin.com/in/james-rodriguez-edu',
      email: 'james.rodriguez@example.org',
    },
    order: 2,
    joinedDate: '2020-01-15',
  },
  {
    id: 'member-003',
    name: 'Emily Chen',
    role: 'Board Member',
    title: 'Parent Advocate & Support Group Leader',
    organization: 'Autism Family Network',
    bio: 'As a mother of two children on the autism spectrum, Emily brings invaluable lived experience to the committee. She founded three parent support groups and has helped over 200 families navigate the challenges of autism diagnosis and advocacy. Her passion for peer support and community building has created lasting networks of mutual aid.',
    image: {
      src: '/images/committee/member-003.jpg',
      alt: 'Emily Chen, Parent Advocate',
    },
    expertise: ['Parent Advocacy', 'Support Groups', 'Community Building', 'Lived Experience'],
    social: {
      website: 'https://autismfamilynetwork.org',
      email: 'emily.chen@example.org',
    },
    order: 3,
    joinedDate: '2021-03-20',
  },
  {
    id: 'member-004',
    name: 'Dr. Marcus Washington',
    role: 'Board Member',
    title: 'Developmental Pediatrician',
    organization: "Children's Medical Center",
    bio: 'Dr. Washington specializes in neurodevelopmental disorders and has been at the forefront of autism research for over a decade. He leads clinical trials for innovative therapies and works closely with families to develop comprehensive care plans. His approach combines evidence-based medicine with compassionate, family-centered care.',
    image: {
      src: '/images/committee/member-004.jpg',
      alt: 'Dr. Marcus Washington, Developmental Pediatrician',
    },
    expertise: ['Pediatric Medicine', 'Neurodevelopment', 'Clinical Research', 'Medical Advocacy'],
    social: {
      linkedin: 'https://linkedin.com/in/marcus-washington-md',
    },
    order: 4,
    joinedDate: '2020-06-10',
  },
  {
    id: 'member-005',
    name: 'Rachel Goldstein',
    role: 'Board Member',
    title: 'Speech-Language Pathologist',
    organization: 'Communication First Therapy',
    bio: 'Rachel has dedicated her 18-year career to helping nonverbal and minimally verbal individuals with autism find their voice through augmentative and alternative communication (AAC). She trains families and educators on communication strategies and advocates for the recognition of all forms of communication as valid and valuable.',
    image: {
      src: '/images/committee/member-005.jpg',
      alt: 'Rachel Goldstein, Speech-Language Pathologist',
    },
    expertise: ['Speech Therapy', 'AAC Devices', 'Communication Strategies', 'Nonverbal Support'],
    social: {
      website: 'https://communicationfirsttherapy.com',
      linkedin: 'https://linkedin.com/in/rachel-goldstein-slp',
    },
    order: 5,
    joinedDate: '2021-09-01',
  },
  {
    id: 'member-006',
    name: 'David Kim',
    role: 'Advisor',
    title: 'Self-Advocate & Technology Consultant',
    organization: 'Neurodiversity at Work',
    bio: 'As an autistic adult and technology professional, David brings critical self-advocacy perspective to the committee. He consults with companies on neurodiversity hiring practices and workplace accommodations. His insights help ensure that autistic voices are centered in all our initiatives and that we work toward acceptance, not just awareness.',
    image: {
      src: '/images/committee/member-006.jpg',
      alt: 'David Kim, Self-Advocate',
    },
    expertise: ['Self-Advocacy', 'Neurodiversity', 'Workplace Inclusion', 'Technology'],
    social: {
      twitter: 'https://twitter.com/davidkim_neuro',
      linkedin: 'https://linkedin.com/in/david-kim-advocate',
      website: 'https://neurodiversityatwork.com',
    },
    order: 6,
    joinedDate: '2022-01-15',
  },
  {
    id: 'member-007',
    name: 'Dr. Lisa Patel',
    role: 'Advisor',
    title: 'Occupational Therapist',
    organization: 'Sensory Integration Center',
    bio: 'Dr. Patel specializes in sensory processing and occupational therapy for individuals with autism. She has developed innovative sensory integration programs used in schools and therapy centers nationwide. Her work focuses on helping individuals with autism navigate sensory challenges and develop skills for daily living.',
    image: {
      src: '/images/committee/member-007.jpg',
      alt: 'Dr. Lisa Patel, Occupational Therapist',
    },
    expertise: ['Occupational Therapy', 'Sensory Integration', 'Motor Skills', 'Daily Living Skills'],
    social: {
      linkedin: 'https://linkedin.com/in/lisa-patel-ot',
    },
    order: 7,
    joinedDate: '2021-11-08',
  },
  {
    id: 'member-008',
    name: 'Michael Thompson',
    role: 'Advisor',
    title: 'Behavioral Analyst (BCBA)',
    organization: 'Positive Behavior Institute',
    bio: 'Michael is a Board Certified Behavior Analyst with expertise in Applied Behavior Analysis (ABA) and positive behavior support. He advocates for ethical, compassionate ABA practices that respect neurodiversity and prioritize the well-being and autonomy of autistic individuals. His programs focus on skill-building while honoring each person\'s unique communication and learning style.',
    image: {
      src: '/images/committee/member-008.jpg',
      alt: 'Michael Thompson, Behavioral Analyst',
    },
    expertise: ['Applied Behavior Analysis', 'Positive Behavior Support', 'Skill Development', 'Ethics in ABA'],
    social: {
      linkedin: 'https://linkedin.com/in/michael-thompson-bcba',
      website: 'https://positivebehaviorinstitute.org',
    },
    order: 8,
    joinedDate: '2022-04-12',
  },
];

export const committeeChair = committeeMembers.find(member => member.role === 'Chair');
export const boardMembers = committeeMembers.filter(member =>
  member.role === 'Chair' || member.role === 'Vice Chair' || member.role === 'Board Member'
);
export const advisors = committeeMembers.filter(member => member.role === 'Advisor');
