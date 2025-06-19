# Contributing to ENS Domains

First off, thank you for considering contributing to this project! Every contribution helps us build a better decentralized future.

This document provides guidelines for contributing. Please make sure to read it before you start.

## Component Architecture

To maintain a clean, scalable, and intuitive codebase, we follow a hybrid approach to organizing our React components. Our `src/components` directory is divided into five main categories. When adding or modifying a component, please place it in the appropriate directory.

### 1. `ui/` - UI Components

This directory is for highly reusable, generic UI components that are the building blocks of our application. They are presentation-focused and should not contain business logic.

-   **What goes here?** Buttons, inputs, modals, cards, tooltips, layout primitives (`<TwoCol />`), etc.
-   **Rule of Thumb:** If a component could be used on any page and has no specific feature logic, it belongs in `ui/`.

**Example Structure:**

```
src/components/ui/
├── cards/
│   └── ColorCards/
├── forms/
│   └── SearchInput/
└── navigation/
    └── LinkList/
```

### 2. `layout/` - Layout Components

These are the core components that define the overall structure of the application. They are used in the main `layout.tsx` files to create a consistent look and feel across pages.

-   **What goes here?** `Header`, `Footer`, `Navbar`, `Sidebar`.
-   **Rule of Thumb:** If a component defines a major structural part of the page that's present on most or all pages, it belongs in `layout/`.

### 3. `features/` - Feature-Specific Components

This directory contains components that are tied to a specific business domain or feature. Each feature gets its own subdirectory.

-   **What goes here?** All components related to the blog, governance portal, brand guidelines, etc.
-   **Rule of Thumb:** If a component is only used within one specific feature area (e.g., the blog), it should live within that feature's directory.

**Example Structure:**

```
src/components/features/
├── blog/
│   ├── PostPreview.tsx
│   └── Search/
└── governance/
    └── HeroContent.tsx
```

### 4. `pages/` - Page-Specific Components

This is for components that are single-use and specific to one top-level page. These are often composite components built from `ui/` and `features/` components.

-   **What goes here?** The hero section for the homepage, a specific animation on the developers page, etc.
-   **Rule of Thumb:** If a component is only used on one page (e.g., `src/app/(root)/page.tsx`) and is not likely to be reused, it belongs here.

**Example Structure:**

```
src/components/pages/
└── home/
    ├── animations/
    └── PartnersList/
```

### 5. `shared/` - Shared Utilities

This directory is for shared code that isn't a React component itself but is used by components.

-   **What goes here?** Icon sets, custom animations, helper functions, etc.
-   **Rule of Thumb:** If it's shared across multiple components but isn't a component itself, it probably belongs in `shared/`.

---

By following these guidelines, we can keep our component library organized and make it easier for everyone to find, use, and contribute to our codebase. 