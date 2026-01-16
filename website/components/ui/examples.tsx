/**
 * UI Components Usage Examples
 *
 * This file demonstrates how to use all the UI components
 * for the Kindness for Autism nonprofit website
 */

import {
  Button,
  Card,
  CardImage,
  CardHeader,
  CardContent,
  CardFooter,
  Input,
  Textarea,
  Badge,
  BadgeGroup,
} from './index';

// ============================================================================
// BUTTON EXAMPLES
// ============================================================================

export function ButtonExamples() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Button Examples</h2>

      {/* Variants */}
      <div className="flex flex-wrap gap-3">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="autism">Autism Awareness</Button>
      </div>

      {/* Sizes */}
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small Button</Button>
        <Button size="md">Medium Button</Button>
        <Button size="lg">Large Button</Button>
      </div>

      {/* States */}
      <div className="flex flex-wrap gap-3">
        <Button loading>Loading...</Button>
        <Button disabled>Disabled Button</Button>
        <Button variant="autism" loading>
          Processing...
        </Button>
      </div>

      {/* Icon-only button with aria-label */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          size="sm"
          aria-label="Close dialog"
        >
          ✕
        </Button>
      </div>
    </div>
  );
}

// ============================================================================
// CARD EXAMPLES
// ============================================================================

export function CardExamples() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Card Examples</h2>

      {/* Simple Card */}
      <Card>
        <h3 className="text-xl font-semibold mb-2">Simple Card</h3>
        <p className="text-gray-600">
          This is a basic card with default padding and styling.
        </p>
      </Card>

      {/* Card with Hover Effect */}
      <Card hover>
        <h3 className="text-xl font-semibold mb-2">Hoverable Card</h3>
        <p className="text-gray-600">
          Hover over this card to see the elevation effect.
        </p>
      </Card>

      {/* Card with Image */}
      <Card padding="none" hover className="max-w-md">
        <CardImage
          src="/images/example.jpg"
          alt="Example autism awareness event"
          aspectRatio="16/9"
        />
        <div className="p-6">
          <CardHeader>
            <h3 className="text-xl font-semibold">Community Event</h3>
            <BadgeGroup spacing="sm" className="mt-2">
              <Badge variant="autism">Autism Awareness</Badge>
              <Badge variant="info">Upcoming</Badge>
            </BadgeGroup>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Join us for our annual autism awareness walk and celebration.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="autism" className="w-full">
              Register Now
            </Button>
          </CardFooter>
        </div>
      </Card>

      {/* Card with Different Padding */}
      <div className="grid grid-cols-3 gap-4">
        <Card padding="sm">
          <p className="text-sm">Small Padding</p>
        </Card>
        <Card padding="md">
          <p className="text-sm">Medium Padding</p>
        </Card>
        <Card padding="lg">
          <p className="text-sm">Large Padding</p>
        </Card>
      </div>
    </div>
  );
}

// ============================================================================
// INPUT EXAMPLES
// ============================================================================

export function InputExamples() {
  return (
    <div className="space-y-6 max-w-md">
      <h2 className="text-2xl font-bold">Input Examples</h2>

      {/* Basic Input */}
      <Input
        label="Email Address"
        type="email"
        placeholder="you@example.com"
      />

      {/* Required Input */}
      <Input
        label="Full Name"
        placeholder="John Doe"
        required
      />

      {/* Input with Helper Text */}
      <Input
        label="Username"
        placeholder="johndoe"
        helperText="Choose a unique username for your account"
      />

      {/* Input with Error */}
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        error="Password must be at least 8 characters"
      />

      {/* Disabled Input */}
      <Input
        label="Account Type"
        value="Premium Member"
        disabled
      />

      {/* Full Width Input */}
      <Input
        label="Message Subject"
        placeholder="Enter subject"
        fullWidth
      />

      {/* Textarea */}
      <Textarea
        label="Your Message"
        placeholder="Tell us about your experience..."
        helperText="Please share any details that might help us serve you better"
        rows={5}
      />

      {/* Textarea with Error */}
      <Textarea
        label="Feedback"
        placeholder="Your feedback"
        error="Feedback must be at least 10 characters"
        required
      />
    </div>
  );
}

// ============================================================================
// BADGE EXAMPLES
// ============================================================================

export function BadgeExamples() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Badge Examples</h2>

      {/* All Variants */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Variants</h3>
        <BadgeGroup>
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="autism">Autism Awareness</Badge>
        </BadgeGroup>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Sizes</h3>
        <BadgeGroup>
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </BadgeGroup>
      </div>

      {/* Real-world Usage */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Real-world Example</h3>
        <Card>
          <h4 className="text-xl font-semibold mb-2">Support Group Meeting</h4>
          <BadgeGroup spacing="sm" className="mb-4">
            <Badge variant="autism">Autism Support</Badge>
            <Badge variant="info">Virtual Event</Badge>
            <Badge variant="success">Free</Badge>
          </BadgeGroup>
          <p className="text-gray-600">
            Join our monthly support group for parents and caregivers of
            children with autism.
          </p>
        </Card>
      </div>

      {/* Category Tags */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Category Tags</h3>
        <BadgeGroup spacing="md">
          <Badge variant="primary">Events</Badge>
          <Badge variant="secondary">Resources</Badge>
          <Badge variant="autism">Awareness</Badge>
          <Badge variant="info">Education</Badge>
          <Badge variant="success">Community</Badge>
        </BadgeGroup>
      </div>
    </div>
  );
}

// ============================================================================
// COMPLETE FORM EXAMPLE
// ============================================================================

export function CompleteFormExample() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card padding="lg">
        <CardHeader>
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-gray-600 mt-1">
            We'd love to hear from you. Fill out the form below.
          </p>
        </CardHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              placeholder="John"
              required
              fullWidth
            />
            <Input
              label="Last Name"
              placeholder="Doe"
              required
              fullWidth
            />
          </div>

          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            required
            fullWidth
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="(555) 123-4567"
            helperText="Optional - We'll only call if necessary"
            fullWidth
          />

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1.5 block">
              Interest Areas
            </label>
            <BadgeGroup>
              <Badge variant="autism">Autism Support</Badge>
              <Badge variant="primary">Events</Badge>
              <Badge variant="secondary">Volunteering</Badge>
              <Badge variant="info">Resources</Badge>
            </BadgeGroup>
          </div>

          <Textarea
            label="Your Message"
            placeholder="Tell us how we can help..."
            required
            rows={6}
            fullWidth
          />

          <div className="flex gap-3 pt-4">
            <Button type="submit" variant="autism" className="flex-1">
              Send Message
            </Button>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
