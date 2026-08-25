# Digital Clock - Multiple Time Zones

A beautiful, real-time digital clock application that displays the current time across multiple time zones simultaneously. Perfect for tracking time in different parts of the world.

## ✨ Features

🕐 **Real-Time Clock Updates**
- Updates every second with accurate current time
- Displays time in different time zones

🌍 **Multiple Time Zones**
- Support for all IANA time zones
- Pre-configured popular time zones
- Search and add custom time zones

💾 **Persistent Storage**
- Selected time zones saved in localStorage
- Preferences persist across sessions

🎨 **Beautiful UI**
- Modern glassmorphism design
- Smooth animations and transitions
- Gradient backgrounds
- Fully responsive layout

📱 **Responsive Design**
- Works perfectly on desktop, tablet, and mobile
- Adaptive grid layout
- Touch-friendly buttons

🔍 **Search Functionality**
- Search for specific time zones
- Quick access to popular time zones
- Easy addition of custom time zones

## 📁 Project Structure

```
digital-clock-timezone/
├── index.html      # HTML structure
├── styles.css      # Styling and animations
├── script.js       # Clock logic and interactions
└── README.md       # Documentation
```

## 🚀 Getting Started

### Method 1: Direct Use (No Installation)

1. Clone the repository:
```bash
git clone https://github.com/Tadashya/digital-clock-timezone.git
cd digital-clock-timezone
```

2. Open `index.html` in your web browser

That's it! The clock will start running immediately.

### Method 2: Using a Local Server

1. Clone the repository
2. Start a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```
3. Open `http://localhost:8000` in your browser

## 🎯 How to Use

1. **View Current Clocks**: The app starts with UTC, New York, London, and Tokyo
2. **Add a Time Zone**:
   - Type a timezone name (e.g., `Asia/Dubai`) in the search box
   - Click "+ Add Timezone" or press Enter
   - Or click on any preset button (New York, London, etc.)
3. **Remove a Time Zone**: Click the "Remove" button on any clock card
4. **Search Suggestions**: Use timezone format like `Continent/City`

## 🌐 Supported Time Zones

The application supports all IANA time zones, including:

### Americas
- `America/New_York` - Eastern Time
- `America/Chicago` - Central Time
- `America/Denver` - Mountain Time
- `America/Los_Angeles` - Pacific Time
- `America/Toronto` - Eastern Canada
- `America/Mexico_City` - Mexico
- `America/Buenos_Aires` - Argentina
- `America/Sao_Paulo` - Brazil

### Europe
- `Europe/London` - GMT/BST
- `Europe/Paris` - CET/CEST
- `Europe/Berlin` - CET/CEST
- `Europe/Moscow` - MSK
- `Europe/Istanbul` - EET/EEST

### Africa
- `Africa/Cairo` - EET
- `Africa/Lagos` - WAT
- `Africa/Johannesburg` - SAST

### Asia
- `Asia/Dubai` - GST
- `Asia/Kolkata` - IST
- `Asia/Bangkok` - ICT
- `Asia/Hong_Kong` - HKT
- `Asia/Shanghai` - CST
- `Asia/Tokyo` - JST

### Oceania
- `Australia/Sydney` - AEDT/AEST
- `Australia/Melbourne` - AEDT/AEST
- `Pacific/Auckland` - NZDT/NZST
- `Pacific/Fiji` - FJT

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with backdrop-filter and gradients
- **Vanilla JavaScript**: No dependencies required
- **LocalStorage API**: For persistent timezone preferences

### Key Functions

- `init()` - Initializes the application
- `addTimezone(tz)` - Adds a new timezone
- `removeTimezone(tz)` - Removes a timezone
- `updateClocks()` - Updates all clock displays
- `renderClocks()` - Renders the UI

## 🎨 Customization

### Change Colors
Edit the gradient colors in `styles.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Font
Modify the font-family in `styles.css`:
```css
font-family: 'Your Font Name', sans-serif;
```

### Add Default Time Zones
Edit the initial array in `script.js`:
```javascript
let selectedTimezones = [
    'UTC',
    'America/New_York',
    'Your/Timezone'
];
```

## 📝 Features Explained

### Real-Time Updates
The clock updates every second using `setInterval(updateClocks, 1000)`

### Time Zone Support
Uses JavaScript's `toLocaleString()` with `timeZone` option for accurate timezone conversion

### Persistent Storage
Selected timezones are saved to browser's localStorage:
```javascript
localStorage.setItem('selectedTimezones', JSON.stringify(selectedTimezones));
```

## 🐛 Troubleshooting

**Invalid Timezone Error**
- Make sure you're using the correct timezone format: `Continent/City`
- Check IANA timezone database for valid names

**Clocks Not Updating**
- Refresh the page
- Check browser console for errors
- Ensure JavaScript is enabled

**Timezone Not Found**
- Verify the exact spelling of the timezone
- Use the preset buttons for popular timezones

## 🚀 Future Enhancements

- [ ] 12-hour and 24-hour format toggle
- [ ] Theme customization (dark/light mode)
- [ ] Timezone offset display
- [ ] Meeting time planner
- [ ] Alarm functionality
- [ ] Different clock styles (analog, binary, etc.)
- [ ] Export timezone schedule as image
- [ ] Multi-language support

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 💬 Support

If you encounter any issues or have suggestions, please open an issue on GitHub.

---

**Made with ❤️ by Tadashya**

Enjoy tracking time across the globe! 🌍🕐
