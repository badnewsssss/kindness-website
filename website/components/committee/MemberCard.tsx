import { forwardRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, Badge, BadgeGroup } from '@/components/ui';
import { CommitteeMember } from '@/types/committee';

export interface MemberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  member: CommitteeMember;
  showFullBio?: boolean;
}

/**
 * Committee member card component
 * Displays member photo, information, expertise badges, and optional social links
 */
export const MemberCard = forwardRef<HTMLDivElement, MemberCardProps>(
  (
    {
      member,
      showFullBio = false,
      className,
      ...props
    },
    ref
  ) => {
    const {
      name,
      title,
      organization,
      bio,
      expertise,
      image,
      photoUrl,
      social,
      socialLinks,
      pronouns,
    } = member;

    // Support both image object and photoUrl string
    const imageSrc = image?.src || photoUrl || '/images/committee/placeholder.jpg';
    const imageAlt = image?.alt || `${name} profile photo`;
    const imageBlurDataUrl = image?.blurDataUrl;

    // Support both social and socialLinks
    const socialData = social || socialLinks;

    // Create bio excerpt (first 150 characters)
    const bioExcerpt = showFullBio ? bio : bio.length > 150 ? `${bio.substring(0, 150)}...` : bio;

    return (
      <Card
        ref={ref}
        padding="none"
        hover
        className={cn('flex flex-col h-full overflow-hidden', className)}
        {...props}
      >
        {/* Member Photo */}
        <div className="relative w-full aspect-square bg-gray-200">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            placeholder={imageBlurDataUrl ? 'blur' : undefined}
            blurDataURL={imageBlurDataUrl}
          />
        </div>

        {/* Member Information */}
        <div className="flex flex-col flex-grow p-6">
          {/* Name and Pronouns */}
          <div className="mb-2">
            <h3 className="text-xl font-bold text-gray-900">
              {name}
            </h3>
            {pronouns && (
              <span className="text-sm text-gray-600 italic">
                ({pronouns})
              </span>
            )}
          </div>

          {/* Title */}
          <p className="text-base font-semibold text-blue-600 mb-1">
            {title}
          </p>

          {/* Organization */}
          {organization && (
            <p className="text-sm text-gray-700 mb-4">
              {organization}
            </p>
          )}

          {/* Bio */}
          <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">
            {bioExcerpt}
          </p>

          {/* Expertise Badges */}
          {expertise && expertise.length > 0 && (
            <div className="mb-4">
              <BadgeGroup spacing="sm">
                {expertise.map((skill) => (
                  <Badge
                    key={skill}
                    variant="primary"
                    size="sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </BadgeGroup>
            </div>
          )}

          {/* Social Links */}
          {socialData && Object.keys(socialData).length > 0 && (
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              {socialData.linkedin && (
                <a
                  href={socialData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  aria-label={`${name}'s LinkedIn profile`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {socialData.twitter && (
                <a
                  href={socialData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
                  aria-label={`${name}'s Twitter profile`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              )}
              {socialData.facebook && (
                <a
                  href={socialData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
                  aria-label={`${name}'s Facebook profile`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                  </svg>
                </a>
              )}
              {socialData.instagram && (
                <a
                  href={socialData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
                  aria-label={`${name}'s Instagram profile`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                  </svg>
                </a>
              )}
              {socialData.website && (
                <a
                  href={socialData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  aria-label={`${name}'s website`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                </a>
              )}
              {socialData.email && (
                <a
                  href={`mailto:${socialData.email}`}
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                  aria-label={`Email ${name}`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </Card>
    );
  }
);

MemberCard.displayName = 'MemberCard';
