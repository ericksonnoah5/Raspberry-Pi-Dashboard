# Raspberry Pi Dashboard

A browser-based home dashboard with calendars, weather, a clock, and a rotating photo slideshow.

## Overview

Designed for an always-on Raspberry Pi display, this static dashboard combines a Google Calendar month view and agenda with local photos and weather information. It also runs in an ordinary desktop browser.

## Features

- Embedded Google Calendar month and agenda views.
- Current temperature and wind speed plus a seven-day forecast from Open-Meteo.
- Fahrenheit temperatures and wind speeds in miles per hour.
- Local clock and date updated every second.
- Crossfading photo slideshow and weather refresh every minute.

## Tech stack

- HTML5, CSS3, and vanilla JavaScript
- Open-Meteo weather API
- Google Calendar embeds

## Getting started

```bash
git clone https://github.com/ericksonnoah5/Raspberry-Pi-Dashboard.git
cd Raspberry-Pi-Dashboard
python3 -m http.server 8000
```

Open [localhost:8000](http://localhost:8000), optionally in a full-screen browser on a Raspberry Pi. No npm install or build step is required. Python 3 is only used to serve the files locally.

### Configuration

- Replace the calendar iframe URLs in `index.html` with calendars you have permission to view. Calendar sharing settings and browser sign-in determine what appears.
- Change the weather latitude, longitude, and timezone in `script.js`, and the location label in `index.html`, for your location.
- Replace the entries in the `photos` array in `script.js` and the initial image in `index.html` to use your own photos. Filenames are case-sensitive.
- Set the device timezone to match the desired clock. Weather and calendar timezones are configured separately; the included settings use America/Chicago.

## Project structure

```text
index.html     Dashboard panels and calendar embeds
style.css      Layout and slideshow styling
script.js      Clock, weather requests, and photo rotation
photos/        Local slideshow images
Changelog.md   Development notes
```

## Limitations

Weather and calendars require internet access. Calendar embeds may require sign-in or appropriate sharing permissions. The layout is designed for a dedicated dashboard display. There is no automated test suite.

## Credits

Created by Noah Erickson. Weather data is provided by Open-Meteo; calendar views are provided by Google Calendar.

## License

Source code is available under the [MIT License](LICENSE). Personal photographs are not included in the software license.
