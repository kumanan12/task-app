# My React App

This is a simple React application created using Vite as the build tool. The application includes a component for calculating compound interest.

## Project Structure

```
my-react-app
├── public
│   └── index.html          # Main HTML file for the application
├── src
│   ├── assets
│   │   └── logo.svg       # Logo for the application
│   ├── components
│   │   └── CompoundInterest.tsx  # Component for calculating compound interest
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Entry point of the application
│   └── vite-env.d.ts      # TypeScript definitions for Vite
├── package.json            # npm configuration file
├── tsconfig.json          # TypeScript configuration file
├── vite.config.ts         # Vite configuration file
└── README.md              # Documentation for the project
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-react-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Usage

The application allows users to input the rate, number of years, and compound frequency to calculate compound interest. The result will be displayed on the screen.

## License

This project is licensed under the MIT License.