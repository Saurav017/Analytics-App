export default {
    darkMode: "class", 
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          light: {
            background: "#FFFFFF",
            sidebar: "#F9FAFB",
            card: "#FFFFFF",
            highlight: "#E3F2FD",
            border: "#E5E7EB",
            text: {
              primary: "#111827",
              secondary: "#6B7280",
            },
            accent: {
              blue: "#2563EB",
              chartblue: "#93C5FD",
            },
            status: {
              positive: "#10B981",
              negative: "#EF4444",
            },
          },
          dark: {
            background: "#1E1E1E",
            sidebar: "#181818",
            card: "#242424",
            highlight: "#E3F2FD",
            border: "#333333",
            text: {
              primary: "#FFFFFF",
              secondary: "#9CA3AF",
            },
            accent: {
              blue: "#60A5FA",
              grayblue: "#9CA3AF",
            },
            status: {
              positive: "#10B981",
              negative: "#EF4444",
            },
          },
        },
      },
    },
    plugins: [],
    
    
  };
  