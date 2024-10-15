# Project Documentation

## Introduction

This project is set up using [Vite](https://vitejs.dev/) for fast, efficient development and easy deployment within a private network (intranet). The following key libraries and tools are used:

- **UI Library**: [Radix UI](https://www.radix-ui.com/) with custom styles applied using vanilla CSS. (Future customization will use Tailwind CSS.)
- **Forms**: [React Hook Form](https://react-hook-form.com/) is combined with [Yup](https://github.com/jquense/yup) for schema validation.
- **Server State Management**: [TanStack Query (React Query)](https://tanstack.com/query/v4) is used with [Dexie.js](https://dexie.org/) as a wrapper for IndexedDB to manage the server state while the backend is under development. Once a dedicated backend is available, replacing IndexedDB with a standard HTTP client (e.g., Axios) will be straightforward.
- **Client-Side Routing**: [React Router](https://reactrouter.com/) is used for navigation between client pages.
- **Page Builder**: [GrapesJS](https://grapesjs.com/) is implemented with customizations to support page building functionality.

## Project Structure

The project has a modular structure to organize routes, components, queries, and other assets efficiently. Below is an outline of the main directories and their purposes:

```plaintext
src/
├── api/                         # IndexedDB functions and schemas
├── components/                  # Reusable UI components
│   └── Builder/
│       └── grapejs/             # GrapesJS customizations
│           ├── blocks/          # Custom blocks for GrapesJS
│           ├── initialConfig.ts # Initial configuration for GrapesJS
│           └── useGrapejs.ts    # Custom hooks for GrapesJS editor customization
├── icons/                       # Icons used across the project
├── mutations/                   # TanStack mutations
├── pages/                       # Main application pages
├── queries/                     # TanStack queries
├── queryKeys/                   # Query keys for TanStack Query
├── router/                      # Routing configurations
├── styles/                      # CSS and other styling files
└── utils/                       # Utility functions (e.g., seed data for IndexedDB)
```

## Key Folders and Files

- **Routes**: All routes are defined in `src/router/index.tsx`. Routes are categorized as **public** and **admin** routes, with admin routes prefixed by `/admin/`.
- **Public Pages**: The dark sidebar and navigation for public pages are defined in `src/App.tsx`.
- **Admin Pages**: The light sidebar and admin page navigation are set up in `src/AdminApp.tsx`.
- **Pages**: All pages are located in `src/pages`.
- **Components**: Reusable components are stored in `src/components`.
- **Icons**: Icons used throughout the project are defined in `src/icons`.
- **TanStack Queries and Mutations**:
  - **Queries**: `src/queries`
  - **Mutations**: `src/mutations`
  - **Query Keys**: `src/queryKeys`
- **Utilities**: Utility functions, such as `seedData`, which seeds initial data into IndexedDB, are in `src/utils`.
- **IndexedDB Functions and Schema**: All IndexedDB-related functions and schemas are located in `src/api`.
- **GrapesJS Customizations**:
  - **Custom blocks**: `src/components/Builder/grapejs/blocks`
  - **GrapesJS configuration**: `src/components/Builder/grapejs/initialConfig.ts`
  - **Custom hooks for editor customization**: `src/components/Builder/grapejs/useGrapejs.ts`

## Custom Styling for UI Components

Currently, [Radix UI](https://www.radix-ui.com/) components are styled with vanilla CSS. In future updates, we plan to replace vanilla CSS with [Tailwind CSS](https://tailwindcss.com/) for a more streamlined styling approach.

## Important Notes on the GrapesJS Editor

The GrapesJS editor has been customized to meet specific requirements:

### Widget Positioning and Resizing

- All widgets are set to have `position: absolute` to enable free movement (drag-and-drop functionality) within the editor.
- Certain widgets are made resizable by setting the `resizable` attribute to `true`.

### Pending Customizations

- **Drop Indicator**: The green drop indicator remains visible and needs to be removed for a cleaner interface.
- **Storage Manager Refactor**: A custom storage solution is currently implemented using hooks. However, GrapesJS offers a built-in [Storage Manager](https://grapesjs.com/docs/modules/Storage.html) that could replace the custom solution. Refactoring to use the GrapesJS Storage Manager would simplify code and improve maintainability.
