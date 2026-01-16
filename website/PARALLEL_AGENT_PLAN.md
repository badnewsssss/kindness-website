# Parallel Agent Website Development Plan

## Overview

The "Kindness for Autism" Next.js website has several missing pages and components. This plan sets up git worktrees to enable parallel agent work and assigns tasks to specialized agents based on their expertise.

## Current State Analysis

**Completed:**

- Phase 1: Foundation (components, layout, config) - mostly done
- Phase 2: Data & Types - files exist but may need review
- Home page exists with basic structure

**Missing Work:**

- **Phase 3 Pages**: about, gallery, videos, stories, advisory-committee, donate, contact
- **Phase 4 Components**: Some components exist but need integration/refinement
- **Phase 5 Polish**: SEO metadata, accessibility menu, audits

## Git Worktree Strategy

Create separate worktrees for independent agent work:

1. **Main branch** (`main`): Current working directory
2. **Worktree 1**: `website-about-gallery` - About & Gallery pages
3. **Worktree 2**: `website-videos-stories` - Videos & Stories pages  
4. **Worktree 3**: `website-committee-donate` - Committee & Donate pages
5. **Worktree 4**: `website-contact-polish` - Contact page & Phase 5 polish

Each worktree operates in a separate directory, allowing parallel commits without conflicts.

## Agent Assignments

### Worktree 1: About & Gallery (`website-about-gallery`)

**Agent**: `nextjs-developer` + `frontend-developer`

- Create `app/about/page.tsx` with mission, vision, values
- Create `app/gallery/page.tsx` with photo grid integration
- Integrate existing `components/gallery/PhotoGrid.tsx` and `Lightbox.tsx`
- Ensure responsive design and accessibility

### Worktree 2: Videos & Stories (`website-videos-stories`)

**Agent**: `nextjs-developer` + `frontend-developer`

- Create `app/videos/page.tsx` with video grid
- Create `app/stories/page.tsx` with story listing and search
- Integrate existing video components (`YouTubeEmbed.tsx`, `TikTokEmbed.tsx`, `VideoGrid.tsx`)
- Integrate existing story components (`StoryCard.tsx`, `StoryGrid.tsx`, `StorySearch.tsx`)

### Worktree 3: Committee & Donate (`website-committee-donate`)

**Agent**: `nextjs-developer` + `frontend-developer`

- Create `app/advisory-committee/page.tsx` with member cards
- Create `app/donate/page.tsx` with donation options
- Create missing donate components:
  - `components/donate/PayPalButton.tsx`
  - `components/donate/GoFundMeWidget.tsx`
  - `components/donate/FundraisingProgress.tsx`
- Use existing `data/committee.ts` for committee data

### Worktree 4: Contact & Polish (`website-contact-polish`)

**Agent**: `nextjs-developer` + `accessibility-tester` + `frontend-developer`

- Create `app/contact/page.tsx` with contact form
- Create `components/contact/ContactForm.tsx` (form validation with react-hook-form + zod)
- Create `components/contact/SocialLinks.tsx`
- Create `components/shared/AccessibilityMenu.tsx`
- Add SEO metadata to all pages (using Next.js Metadata API)
- Run accessibility audit and fix issues

## Implementation Steps

### Step 1: Create Git Worktrees

```bash
# From main repository root
cd c:\Users\joshu\Developer\kindness
git worktree add -b website-about-gallery ../kindness-about-gallery
git worktree add -b website-videos-stories ../kindness-videos-stories  
git worktree add -b website-committee-donate ../kindness-committee-donate
git worktree add -b website-contact-polish ../kindness-contact-polish
```

### Step 2: Agent Activation Pattern

Each agent should:

1. Check out their assigned worktree branch
2. Navigate to `website/` directory in that worktree
3. Review existing components and data files
4. Implement assigned tasks
5. Commit changes to their branch
6. Push branch when complete

### Step 3: Merge Strategy

After agents complete work:

1. Merge worktrees back to main sequentially
2. Resolve any conflicts (unlikely due to separate files)
3. Run `npm run build` to verify
4. Run accessibility audit

## File Structure Reference

**Existing components to integrate:**

- `components/gallery/PhotoGrid.tsx`, `Lightbox.tsx`
- `components/videos/YouTubeEmbed.tsx`, `TikTokEmbed.tsx`, `VideoGrid.tsx`
- `components/stories/StoryCard.tsx`, `StoryGrid.tsx`, `StorySearch.tsx`
- `components/home/HeroSection.tsx`, `ImpactStats.tsx`, `FeaturedStories.tsx`, `DonationCTA.tsx`

**Existing data files:**

- `data/stories.ts`
- `data/gallery.ts`
- `data/videos.ts`
- `data/committee.ts`

**Existing types:**

- `types/story.ts`
- `types/gallery.ts`
- `types/video.ts`
- `types/committee.ts`

## Agent Communication

Agents should reference:

- [website/TASK_SHEET.md](website/TASK_SHEET.md) for task status
- [website/config/site.ts](website/config/site.ts) for site configuration
- [website/components/layout/README.md](website/components/layout/README.md) for layout patterns
- Existing component examples in `components/*/examples.tsx` files

## Success Criteria

- [ ] All 7 missing pages created and functional
- [ ] All page components properly integrated
- [ ] SEO metadata added to all pages
- [ ] Accessibility menu component created
- [ ] `npm run build` succeeds without errors
- [ ] All pages pass basic accessibility checks
- [ ] Responsive design verified (mobile, tablet, desktop)

## Progress Status

**Completed:**
- ✅ Git worktrees created
- ✅ About page created
- ✅ Gallery page created

**In Progress:**
- 🔄 Videos page
- 🔄 Stories page

**Pending:**
- ⏳ Committee page
- ⏳ Donate page
- ⏳ Contact page
- ⏳ Accessibility menu
- ⏳ SEO metadata
- ⏳ Final merge and verification

## Notes

- Agents work in parallel but on separate files to avoid conflicts
- Each worktree is a separate git branch for easy merging
- Components already exist - focus on page creation and integration
- Follow Next.js 15 App Router patterns
- Use existing design system (colors, typography from `config/site.ts`)
- Maintain consistency with existing home page style
