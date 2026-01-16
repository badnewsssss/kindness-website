'use client';

import { FC, useState, Fragment } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Navigation } from './Navigation';
import { Container } from './Container';
import clsx from 'clsx';

export const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Site Name */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-md px-2 py-1 -mx-2 -my-1"
            >
              <HeartIcon
                className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors"
                aria-hidden="true"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  Kindness for Autism
                </span>
                <span className="text-xs text-gray-600 hidden sm:block">
                  Spreading joy and acceptance
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <Navigation className="flex-1" />

            {/* Desktop Donate Button */}
            <Link
              href="/donate"
              className={clsx(
                'inline-flex items-center justify-center',
                'px-6 py-2.5 rounded-full',
                'bg-gradient-to-r from-blue-600 to-blue-700',
                'text-white font-semibold text-sm',
                'shadow-md hover:shadow-lg',
                'hover:from-blue-700 hover:to-blue-800',
                'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
                'transition-all duration-200',
                'transform hover:scale-105'
              )}
            >
              <HeartIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button & Donate Button */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile Donate Button (always visible) */}
            <Link
              href="/donate"
              className={clsx(
                'inline-flex items-center justify-center',
                'px-4 py-2 rounded-full',
                'bg-gradient-to-r from-blue-600 to-blue-700',
                'text-white font-semibold text-sm',
                'shadow-md hover:shadow-lg',
                'hover:from-blue-700 hover:to-blue-800',
                'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
                'transition-all duration-200'
              )}
            >
              <HeartIcon className="h-4 w-4 sm:mr-2" aria-hidden="true" />
              <span className="hidden sm:inline">Donate</span>
            </Link>

            {/* Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={clsx(
                'inline-flex items-center justify-center',
                'p-2 rounded-md',
                'text-gray-700 hover:text-blue-700 hover:bg-blue-50',
                'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
                'transition-colors duration-200'
              )}
              aria-label="Open main menu"
              aria-expanded={mobileMenuOpen}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Dialog */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600/75 z-40" aria-hidden="true" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl overflow-y-auto">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <Dialog.Title className="text-lg font-semibold text-gray-900">
                  Menu
                </Dialog.Title>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className={clsx(
                    'inline-flex items-center justify-center',
                    'p-2 rounded-md',
                    'text-gray-700 hover:text-blue-700 hover:bg-blue-50',
                    'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
                    'transition-colors duration-200'
                  )}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="px-6 py-6">
                <Navigation
                  className="mb-6"
                  onClick={closeMobileMenu}
                />

                {/* Mobile Donate Button in Menu */}
                <div className="pt-6 border-t border-gray-200">
                  <Link
                    href="/donate"
                    onClick={closeMobileMenu}
                    className={clsx(
                      'flex items-center justify-center w-full',
                      'px-6 py-3 rounded-full',
                      'bg-gradient-to-r from-blue-600 to-blue-700',
                      'text-white font-semibold',
                      'shadow-md hover:shadow-lg',
                      'hover:from-blue-700 hover:to-blue-800',
                      'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
                      'transition-all duration-200'
                    )}
                  >
                    <HeartIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                    Make a Donation
                  </Link>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </header>
  );
};
