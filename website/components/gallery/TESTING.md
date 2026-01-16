# Gallery Components - Testing Guide

This guide helps you test all gallery components to ensure they work correctly.

## Quick Start

1. **Create a test page** at `app/gallery/page.tsx`:

```tsx
import GalleryExamplePage from '@/components/gallery/gallery-example';
export default GalleryExamplePage;
```

2. **Run the development server**:

```bash
npm run dev
```

3. **Visit** `http://localhost:3000/gallery`

## Component Tests

### PhotoGrid Component

**Visual Tests:**
- [ ] Grid displays in 1 column on mobile, 2 on tablet, 3 on desktop, 4 on large screens
- [ ] Images maintain 4:3 aspect ratio
- [ ] Images have proper spacing (gap-4)
- [ ] Category filter tabs are visible and styled correctly
- [ ] Image count shows correct number

**Interaction Tests:**
- [ ] Clicking an image opens the lightbox
- [ ] Filter tabs change active state on click
- [ ] Filtering updates image count
- [ ] Filtering shows only images in selected category
- [ ] "All" category shows all images

**Keyboard Tests:**
- [ ] Tab key moves focus between filter buttons
- [ ] Arrow keys navigate between filter tabs
- [ ] Enter/Space activates focused filter tab
- [ ] Tab key moves to image cards after filters

### ImageCard Component

**Visual Tests:**
- [ ] Image loads with smooth fade-in animation
- [ ] Loading skeleton shows before image loads
- [ ] Category badge appears in top-right corner
- [ ] Badge has white background with transparency
- [ ] Hover reveals caption overlay with gradient

**Interaction Tests:**
- [ ] Clicking card opens lightbox
- [ ] Hover shows caption overlay smoothly
- [ ] Card has visible focus ring when tabbed to
- [ ] Enter/Space keys open lightbox when focused

**Accessibility Tests:**
- [ ] Image has proper alt text
- [ ] Card has role="button"
- [ ] Card has descriptive aria-label
- [ ] Keyboard focus is visible

### Lightbox Component

**Visual Tests:**
- [ ] Opens with smooth fade and scale animation
- [ ] Backdrop is dark (black/95 opacity)
- [ ] Image is centered and contained within viewport
- [ ] Close button (X) in top-right corner
- [ ] Image counter (e.g., "3 of 12") in top-left
- [ ] Navigation arrows on left/right sides
- [ ] Caption displays at bottom with gradient background
- [ ] Category name shows below caption

**Interaction Tests:**
- [ ] Close button closes lightbox
- [ ] Clicking backdrop closes lightbox
- [ ] Previous arrow shows previous image
- [ ] Next arrow shows next image
- [ ] Previous from first image wraps to last
- [ ] Next from last image wraps to first
- [ ] Image counter updates on navigation

**Keyboard Tests:**
- [ ] Escape key closes lightbox
- [ ] Left arrow key shows previous image
- [ ] Right arrow key shows next image
- [ ] Home key jumps to first image
- [ ] End key jumps to last image
- [ ] Tab key cycles through close button and nav buttons
- [ ] Focus is trapped within lightbox
- [ ] Focus returns to clicked image card when closed

**Accessibility Tests:**
- [ ] Focus trap prevents tabbing outside lightbox
- [ ] Close button has aria-label
- [ ] Nav buttons have aria-labels
- [ ] Image counter has aria-live region
- [ ] Caption uses Dialog.Description for screen readers

### GalleryFilter Component

**Visual Tests:**
- [ ] Tabs are in a horizontal row with wrapping
- [ ] Active tab has white background and blue text
- [ ] Inactive tabs have transparent background and gray text
- [ ] Tabs have proper spacing (gap-2)
- [ ] Container has light gray background with padding
- [ ] Tabs have rounded corners

**Interaction Tests:**
- [ ] Clicking tab activates it
- [ ] Only one tab is active at a time
- [ ] Active tab has aria-selected="true"
- [ ] Inactive tabs have aria-selected="false"
- [ ] Inactive tabs have tabIndex={-1}
- [ ] Active tab has tabIndex={0}

**Keyboard Tests:**
- [ ] Arrow Right moves to next tab
- [ ] Arrow Left moves to previous tab
- [ ] Arrow keys wrap at ends
- [ ] Home key moves to first tab
- [ ] End key moves to last tab
- [ ] Focus follows arrow key navigation

## Browser Testing

Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)

## Responsive Testing

Test at different viewport sizes:
- [ ] Mobile (375px): 1 column grid
- [ ] Tablet (768px): 2 column grid
- [ ] Desktop (1024px): 3 column grid
- [ ] Large (1280px+): 4 column grid

## Accessibility Testing

### Screen Reader Testing

Using NVDA/JAWS (Windows) or VoiceOver (Mac):
- [ ] Image cards announce as buttons with descriptions
- [ ] Filter tabs work as tab controls
- [ ] Lightbox traps focus properly
- [ ] Image counter is announced when navigating
- [ ] Close and navigation buttons are properly labeled

### Keyboard-Only Navigation

Without using mouse:
- [ ] Can navigate entire gallery with Tab/Shift+Tab
- [ ] Can filter with arrow keys
- [ ] Can open lightbox with Enter/Space
- [ ] Can navigate lightbox with arrow keys
- [ ] Can close lightbox with Escape
- [ ] Focus indicators are always visible

### Reduced Motion

Test with reduced motion preference enabled:
1. **Windows**: Settings > Accessibility > Visual effects > Animation effects: Off
2. **Mac**: System Preferences > Accessibility > Display > Reduce motion: On
3. **Browser**: DevTools > Rendering > Emulate CSS prefers-reduced-motion: reduce

Verify:
- [ ] Image hover scale effect is disabled
- [ ] Lightbox animations are instant or very brief
- [ ] All transitions respect reduced motion

## Performance Testing

### Image Loading
- [ ] Images lazy load (check Network tab)
- [ ] Blur placeholders show before images load (if provided)
- [ ] Only visible images load initially
- [ ] Images below fold load as you scroll

### Lighthouse Audit

Run Lighthouse audit in Chrome DevTools:
- [ ] Performance score > 90
- [ ] Accessibility score = 100
- [ ] Best Practices score > 90

## Common Issues & Solutions

### Images not loading
- Ensure image paths are correct in sample-data.ts
- Check that images exist in public/images/gallery/
- Verify Next.js Image component configuration

### Lightbox not opening
- Check console for errors
- Verify @headlessui/react is installed
- Ensure PhotoGrid component has 'use client' directive

### Keyboard navigation not working
- Verify focus styles are visible
- Check that tabIndex values are correct
- Test in different browsers (focus behavior varies)

### Filter tabs not changing
- Check state management in PhotoGrid
- Verify category names match image data
- Look for console errors

## Manual Test Checklist

Complete this checklist for each component:

### Before Deployment
- [ ] All TypeScript errors resolved
- [ ] ESLint passes with no errors
- [ ] All images have alt text
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG AA standards
- [ ] Component works without JavaScript (progressive enhancement)
- [ ] No console errors or warnings
- [ ] Tested in at least 2 browsers
- [ ] Tested on mobile device
- [ ] Tested with screen reader
- [ ] Tested with keyboard only
- [ ] Tested with reduced motion preference

## Automated Testing (Future)

Consider adding these tests with Jest/Testing Library:

```typescript
// PhotoGrid.test.tsx
- renders correct number of images
- filters images by category
- opens lightbox on image click
- shows "no photos" message when filtered category is empty

// ImageCard.test.tsx
- renders image with correct alt text
- displays category badge
- calls onClick handler when clicked
- shows caption on hover

// Lightbox.test.tsx
- renders when isOpen is true
- closes on Escape key
- navigates with arrow keys
- wraps around at first/last image
- displays correct image counter

// GalleryFilter.test.tsx
- renders all category tabs
- highlights active category
- calls onCategoryChange when clicked
- supports keyboard navigation
```

## Reporting Issues

If you find issues, document:
1. Component name
2. Steps to reproduce
3. Expected behavior
4. Actual behavior
5. Browser/device information
6. Screenshots/video if visual issue
