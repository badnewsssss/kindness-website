# Layout Components

Comprehensive layout components for the Kindness for Autism nonprofit website. These components provide a warm, accessible, and welcoming design with proper mobile responsiveness and keyboard navigation.

## Components

### Header
Main navigation header with responsive mobile menu.

**Features:**
- Sticky positioning with soft shadow
- Logo/branding on left
- Desktop navigation with 8 main links
- Persistent "Donate" CTA button (always visible on all breakpoints)
- Mobile hamburger menu with slide-in dialog
- Focus trap in mobile menu
- Proper ARIA attributes for accessibility

**Usage:**
```tsx
import { Header } from '@/components/layout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
```

### Footer
Comprehensive footer with links, social media, and contact information.

**Features:**
- Mission tagline
- Quick links section
- Social media icons (YouTube, TikTok, Facebook)
- Contact email
- Copyright with auto-updating year
- Privacy & Terms links
- Warm gradient background

**Usage:**
```tsx
import { Footer } from '@/components/layout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

### Navigation
Reusable navigation component with active link detection.

**Features:**
- Automatic active page detection
- Responsive flex layout
- Accessible with aria-current
- Hover and focus states
- Works in desktop and mobile contexts

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Additional CSS classes |
| onClick | () => void | undefined | Click handler (used to close mobile menu) |

**Usage:**
```tsx
import { Navigation } from '@/components/layout';

<Navigation className="my-custom-class" onClick={handleClick} />
```

**Navigation Items:**
Export `navigationItems` array for use in other components:
```tsx
import { navigationItems } from '@/components/layout';

// navigationItems = [
//   { name: 'Home', href: '/', description: 'Return to homepage' },
//   { name: 'About', href: '/about', description: 'Learn about our mission' },
//   // ... etc
// ]
```

### Container
Max-width container with responsive padding.

**Features:**
- Multiple size options
- Customizable padding
- Semantic HTML element support
- Auto-centered with margins

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Content to wrap |
| className | string | undefined | Additional CSS classes |
| size | 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full' | 'lg' | Max width constraint |
| padding | 'none' \| 'sm' \| 'md' \| 'lg' | 'md' | Horizontal padding |
| as | string | 'div' | HTML element to render |

**Usage:**
```tsx
import { Container } from '@/components/layout';

<Container size="lg" padding="md">
  <h1>Page Content</h1>
</Container>

<Container as="section" size="xl" padding="lg">
  <h2>Wide Section</h2>
</Container>
```

### SkipLink
Accessibility skip navigation link.

**Features:**
- Hidden until keyboard focused
- Fixed positioning at top of page
- High z-index to ensure visibility
- Styled with primary brand colors
- Screen reader accessible

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| href | string | '#main-content' | Target element ID |
| className | string | undefined | Additional CSS classes |

**Usage:**
```tsx
import { SkipLink } from '@/components/layout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

## Complete Layout Example

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import { Header, Footer, SkipLink } from '@/components/layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kindness for Autism',
  description: 'Spreading joy, kindness, and acceptance in our community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

```tsx
// app/page.tsx
import { Container } from '@/components/layout';

export default function HomePage() {
  return (
    <Container as="section" className="py-12">
      <h1>Welcome to Kindness for Autism</h1>
      <p>Spreading joy and acceptance in our community.</p>
    </Container>
  );
}
```

## Accessibility Features

All layout components follow WCAG 2.1 Level AA guidelines:

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Management**: Visible focus indicators on all focusable elements
- **ARIA Attributes**: Proper use of aria-current, aria-label, aria-expanded, etc.
- **Focus Trap**: Mobile menu traps focus when open
- **Skip Link**: Allows keyboard users to skip navigation
- **Semantic HTML**: Proper use of nav, header, footer, main elements
- **Color Contrast**: All text meets minimum contrast ratios
- **Screen Reader Support**: Descriptive labels and hidden text where needed

## Mobile Responsiveness

- **Breakpoints**:
  - Mobile: < 1024px (hamburger menu)
  - Desktop: >= 1024px (full navigation)
- **Touch Targets**: Minimum 44x44px for all interactive elements
- **Mobile Menu**: Slide-in drawer with backdrop and smooth transitions
- **Persistent Donate Button**: Always visible across all screen sizes
- **Responsive Typography**: Fluid font sizing with clamp()

## Design System

**Colors:**
- Primary: Blue (#3b82f6) - Trust, calmness, autism awareness
- Backgrounds: Warm whites and soft grays
- Gradients: Blue gradient for CTAs

**Typography:**
- Headings: Bold, clear hierarchy
- Body: Comfortable reading size (16px base)

**Spacing:**
- Consistent padding and margins
- Container max-widths for readability

**Shadows:**
- Soft, subtle shadows
- Elevation on hover for interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- Next.js 15+
- React 19+
- @headlessui/react - Accessible UI components
- @heroicons/react - Icon library
- clsx - Conditional class names
- tailwind-merge - Tailwind class merging

## Testing Checklist

- [ ] All navigation links work correctly
- [ ] Mobile menu opens and closes
- [ ] Focus trap works in mobile menu
- [ ] Skip link appears on Tab press
- [ ] Active page highlighting works
- [ ] Donate button always visible
- [ ] Social media links open in new tabs
- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces navigation correctly
- [ ] Responsive at all breakpoints
