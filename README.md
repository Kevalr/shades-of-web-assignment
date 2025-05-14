# Shades of Web - Communities Showcase

A responsive React application that displays community information in both grid and carousel layouts. The application fetches data from a WordPress API and presents it in a visually appealing manner using Tailwind CSS.

## Features

- Responsive design for both desktop and mobile views
- Grid layout for community cards
- Carousel/slider view for the same content
- API integration with WordPress backend
- Modern UI with Tailwind CSS

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Swiper (for carousel functionality)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd shades-of-web-assignment
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add the API credentials:

```env
VITE_API_URL=https://devsow.wpengine.com/wp-json/communities/all/
VITE_API_AUTH=Basic bmVoYTowI21JdkJCdzRBdWJoKTU5QXhEQ0hIQTU=
```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── Components/
│   ├── CommonCard.tsx    # Card component for grid view
│   ├── SwiperCard.tsx    # Carousel component
│   └── index.tsx         # Main component
├── assets/              # Image assets
└── App.tsx             # Root component
```

## API Integration

The application fetches data from a WordPress API endpoint:

- URL: `https://devsow.wpengine.com/wp-json/communities/all/`
- Method: GET
- Required Headers:
  - Authorization: Basic Token
  - Accept: application/json

## Design Implementation

The application implements two main views:

1. Grid Layout:

   - Desktop: 3 columns
   - Tablet: 2 columns
   - Mobile: 1 column

2. Carousel Layout:
   - Desktop: 3 visible slides
   - Mobile: 1 visible slide
   - Navigation controls for sliding

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```
