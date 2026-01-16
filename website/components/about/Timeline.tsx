'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Baby, Heart, Users, BookOpen, UserPlus, Calendar } from 'lucide-react';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: typeof Baby;
  color: string;
  bgColor: string;
}

const events: TimelineEvent[] = [
  {
    id: 'birth',
    year: '1999',
    title: 'A Miraculous Beginning',
    description: 'Charlie\'s son is born weighing just 1 pound, 8 ounces. The NICU becomes a second home, and an incredible team of medical professionals begins a journey of hope and healing.',
    icon: Baby,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: 'early-challenges',
    year: '2000-2005',
    title: 'Early Challenges & Discoveries',
    description: 'Autism diagnosis brings new understanding. Special-needs teachers, therapists, and caregivers become integral parts of the family\'s support system, showing extraordinary dedication and compassion.',
    icon: Heart,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
  },
  {
    id: 'community',
    year: '2010',
    title: 'Building Community',
    description: 'Charlie begins collecting stories of kindness—documenting the teachers, doctors, and everyday heroes who make a difference in the lives of families facing similar journeys.',
    icon: Users,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    id: 'stories-milestone',
    year: '2018',
    title: '44,000 Stories Milestone',
    description: 'The collection reaches 44,000+ personal stories from families, caregivers, and individuals touched by autism. Each story becomes a testament to the power of compassion and recognition.',
    icon: BookOpen,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
  },
  {
    id: 'advisory',
    year: '2023',
    title: 'Advisory Committee Formed',
    description: 'An Advisory Committee of 8 distinguished professionals is established—bringing expertise in medicine, education, advocacy, and policy to guide the mission forward.',
    icon: UserPlus,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    id: 'celebration',
    year: '2024',
    title: 'Celebrating 25 Years',
    description: 'Charlie\'s son celebrates his 25th birthday—a milestone of resilience, love, and the countless acts of kindness that made it possible. The mission continues with renewed purpose.',
    icon: Calendar,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
];

/**
 * Timeline component showing key milestones
 * Visualizes the journey from birth to present day
 */
export function Timeline() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="timeline-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            A Journey of 25 Years
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            From a premature birth in the NICU to a global mission of kindness and recognition,
            this timeline celebrates the milestones that shaped our purpose.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-600 transform md:-translate-x-1/2"
              aria-hidden="true"
            />

            {/* Events */}
            <div className="space-y-12">
              {events.map((event, index) => {
                const IconComponent = event.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={event.id}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:gap-8`}
                  >
                    {/* Icon */}
                    <div className={`absolute left-4 md:left-1/2 w-8 h-8 ${event.bgColor} rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 border-4 border-white shadow-lg`}>
                      <IconComponent className={event.color} size={16} aria-hidden="true" />
                    </div>

                    {/* Spacer for mobile */}
                    <div className="md:hidden w-full h-8" />

                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 pl-16 md:pl-0 md:text-right' : 'md:pl-12 pl-16 md:pl-16'}`}>
                      <Card hover padding="lg" className="border-l-4" style={{ borderLeftColor: `var(--${event.id}-color)` }}>
                        <CardContent>
                          {/* Year Badge */}
                          <div className={`inline-block px-3 py-1 ${event.bgColor} ${event.color} text-sm font-bold rounded-full mb-3`}>
                            {event.year}
                          </div>

                          {/* Title */}
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                            {event.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-700 leading-relaxed">
                            {event.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Future */}
          <div className="mt-16 text-center">
            <Card padding="lg" className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-indigo-200">
              <CardContent>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Calendar className="text-indigo-600" size={32} aria-hidden="true" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    The Journey Continues
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  Every day brings new stories, new heroes to celebrate, and new opportunities
                  to make a difference. The next chapter is being written—and you can be part of it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
