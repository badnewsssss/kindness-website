# UI Components - Kindness for Autism

Reusable, accessible UI components built with React, TypeScript, and Tailwind CSS for the Kindness for Autism nonprofit website.

## Components

### Button

Accessible button component with multiple variants, sizes, and loading states.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'autism'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Shows loading spinner |
| `disabled` | `boolean` | `false` | Disables the button |
| `aria-label` | `string` | - | Accessibility label (required for icon-only buttons) |
| `children` | `ReactNode` | - | Button content |

#### Usage

```tsx
import { Button } from '@/components/ui';

// Primary button
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

// Autism awareness variant
<Button variant="autism">
  Support Autism Awareness
</Button>

// Loading state
<Button loading>
  Processing...
</Button>

// Icon-only button with aria-label
<Button variant="outline" size="sm" aria-label="Close dialog">
  ✕
</Button>
```

#### Accessibility Features

- Proper focus ring with `focus:ring-2`
- `aria-busy` when loading
- `aria-disabled` when disabled
- Supports `aria-label` for icon-only buttons
- Keyboard accessible

---

### Card

Card component with soft shadow, rounded corners, and optional hover effects.

#### Components

- **Card** - Main container
- **CardImage** - Optional image header
- **CardHeader** - Header section
- **CardContent** - Main content area
- **CardFooter** - Footer section with border

#### Props (Card)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding |
| `hover` | `boolean` | `false` | Enable hover effect |
| `children` | `ReactNode` | - | Card content |

#### Props (CardImage)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | - | Alt text for accessibility |
| `aspectRatio` | `'16/9' \| '4/3' \| '1/1' \| 'auto'` | `'16/9'` | Image aspect ratio |

#### Usage

```tsx
import { Card, CardImage, CardHeader, CardContent, CardFooter, Button, Badge } from '@/components/ui';

// Simple card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>

// Card with image and hover
<Card padding="none" hover>
  <CardImage
    src="/images/event.jpg"
    alt="Community event"
    aspectRatio="16/9"
  />
  <div className="p-6">
    <CardHeader>
      <h3 className="text-xl font-semibold">Community Event</h3>
      <Badge variant="autism">Autism Awareness</Badge>
    </CardHeader>
    <CardContent>
      <p>Join us for our annual walk.</p>
    </CardContent>
    <CardFooter>
      <Button variant="autism">Register</Button>
    </CardFooter>
  </div>
</Card>
```

---

### Input & Textarea

Accessible form input components with labels, error states, and helper text.

#### Props (Input)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label |
| `error` | `string` | - | Error message to display |
| `helperText` | `string` | - | Helper text below input |
| `required` | `boolean` | `false` | Shows required indicator (*) |
| `fullWidth` | `boolean` | `false` | Takes full width of container |
| `disabled` | `boolean` | `false` | Disables the input |

#### Props (Textarea)

Same as Input, plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rows` | `number` | `4` | Number of visible rows |

#### Usage

```tsx
import { Input, Textarea } from '@/components/ui';

// Basic input
<Input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  required
/>

// Input with error
<Input
  label="Password"
  type="password"
  error="Password must be at least 8 characters"
  required
/>

// Input with helper text
<Input
  label="Username"
  placeholder="johndoe"
  helperText="Choose a unique username"
/>

// Textarea
<Textarea
  label="Your Message"
  placeholder="Tell us more..."
  rows={5}
  required
/>
```

#### Accessibility Features

- Unique IDs automatically generated if not provided
- Labels properly associated with inputs
- Required indicator with `aria-label="required"`
- `aria-invalid` when error exists
- `aria-describedby` links to error/helper text
- Error messages with `role="alert"`
- Error icon for visual feedback

---

### Badge

Status badge component for categories, tags, and status indicators.

#### Components

- **Badge** - Single badge
- **BadgeGroup** - Container for multiple badges with spacing

#### Props (Badge)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'autism'` | `'default'` | Color variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Badge size |
| `children` | `ReactNode` | - | Badge content |

#### Props (BadgeGroup)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `spacing` | `'sm' \| 'md' \| 'lg'` | `'md'` | Gap between badges |
| `children` | `ReactNode` | - | Badge elements |

#### Usage

```tsx
import { Badge, BadgeGroup } from '@/components/ui';

// Single badge
<Badge variant="autism">Autism Awareness</Badge>

// Badge group
<BadgeGroup spacing="sm">
  <Badge variant="autism">Autism Support</Badge>
  <Badge variant="info">Virtual Event</Badge>
  <Badge variant="success">Free</Badge>
</BadgeGroup>

// All sizes
<BadgeGroup>
  <Badge size="sm">Small</Badge>
  <Badge size="md">Medium</Badge>
  <Badge size="lg">Large</Badge>
</BadgeGroup>
```

---

## Color Scheme

### Autism Awareness Blue

The components include a special `autism` variant using the official autism awareness blue color:

- Background: `#0066CC`
- Light background: `#E6F0FF`
- Hover: `#0052A3`
- Active: `#004080`

### Other Variants

- **Primary**: Blue (`blue-600`)
- **Secondary**: Green (`green-600`)
- **Success**: Emerald (`emerald-600`)
- **Warning**: Yellow (`yellow-600`)
- **Danger**: Red (`red-600`)
- **Info**: Cyan (`cyan-600`)

---

## Accessibility Checklist

All components follow WCAG 2.1 AA guidelines:

- ✅ Proper semantic HTML
- ✅ ARIA attributes where needed
- ✅ Keyboard navigation support
- ✅ Focus indicators (visible focus rings)
- ✅ Color contrast ratios meet AA standards
- ✅ Screen reader compatible
- ✅ Error messages announced to assistive tech
- ✅ Loading states communicated
- ✅ Required fields clearly marked

---

## Installation & Setup

The components use the following dependencies (already in package.json):

```json
{
  "dependencies": {
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.4.0"
  }
}
```

The `cn` utility is located at `@/lib/utils.ts` and merges Tailwind classes properly.

---

## File Structure

```
components/ui/
├── Button.tsx         # Button component
├── Card.tsx          # Card components
├── Input.tsx         # Input & Textarea components
├── Badge.tsx         # Badge components
├── index.ts          # Barrel exports
├── examples.tsx      # Usage examples
└── README.md         # This file
```

---

## Examples

See `examples.tsx` for comprehensive usage examples including:

- All button variants and states
- Card layouts with images
- Form inputs with validation
- Badge groups and categories
- Complete form example

---

## TypeScript Support

All components are fully typed with TypeScript interfaces exported for use:

```tsx
import type { ButtonProps, CardProps, InputProps, BadgeProps } from '@/components/ui';
```

---

## Dark Mode Support

Components currently support light mode. To add dark mode:

1. Add dark mode variants to Tailwind classes
2. Use `dark:` prefix for dark mode styles
3. Consider autism awareness blue contrast in dark mode

---

## Contributing

When adding new components:

1. Use TypeScript with proper interfaces
2. Follow accessibility guidelines
3. Include proper ARIA attributes
4. Use the `cn` utility for className merging
5. Add examples to `examples.tsx`
6. Update this README with props and usage
7. Test with keyboard navigation
8. Test with screen readers

---

## Browser Support

Components work in all modern browsers:

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

---

## License

Part of the Kindness for Autism nonprofit website.
