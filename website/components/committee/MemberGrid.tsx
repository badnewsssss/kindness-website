import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { CommitteeMember } from '@/types/committee';
import { MemberCard } from './MemberCard';

export interface MemberGridProps extends React.HTMLAttributes<HTMLDivElement> {
  members: CommitteeMember[];
  showFullBio?: boolean;
  emptySlots?: number;
}

/**
 * Responsive grid of committee member cards
 * Supports 1-2-4 column layout based on screen size
 * Shows empty state cards for unfilled positions
 */
export const MemberGrid = forwardRef<HTMLDivElement, MemberGridProps>(
  (
    {
      members,
      showFullBio = false,
      emptySlots = 0,
      className,
      ...props
    },
    ref
  ) => {
    // Sort members by order property
    const sortedMembers = [...members].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

    // Filter only active members (if active property is used)
    const activeMembers = sortedMembers.filter(member => member.active !== false);

    return (
      <div
        ref={ref}
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
          className
        )}
        {...props}
      >
        {/* Render member cards */}
        {activeMembers.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            showFullBio={showFullBio}
          />
        ))}

        {/* Render empty position cards */}
        {emptySlots > 0 && Array.from({ length: emptySlots }).map((_, index) => (
          <EmptyPositionCard key={`empty-${index}`} />
        ))}
      </div>
    );
  }
);

MemberGrid.displayName = 'MemberGrid';

/**
 * Empty position card component
 * Shown for unfilled committee positions
 */
const EmptyPositionCard = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center justify-center h-full min-h-[400px] bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-all duration-200 hover:border-blue-400 hover:bg-blue-50/30',
          className
        )}
        {...props}
      >
        <div className="w-20 h-20 mb-4 rounded-full bg-gray-200 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Position Available
        </h3>
        <p className="text-sm text-gray-600 max-w-xs">
          We're looking for dedicated professionals to join our advisory committee and help expand our mission.
        </p>
      </div>
    );
  }
);

EmptyPositionCard.displayName = 'EmptyPositionCard';
