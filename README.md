# Patient Dashboard - Jessica Taylor

## Overview

This project is a single-page patient dashboard that fetches and displays medical information for Jessica Taylor from the Coalition Technologies Patient Data API. It includes a dynamic blood pressure chart using Chart.js.

## Features
* Fetches patient data using **Basic Auth** from the live API.
* Displays **basic patient information** (Age, Insurance, Conditions).
* Renders a **blood pressure line chart** (Systolic & Diastolic) using Chart.js.
* Focused on **Jessica Taylor** only, per skills test requirements.
* Clean and responsive layout based on the Adobe XD template.

## File Structure

```
patient-dashboard/
│
├── index.html       # Main HTML page
├── styles.css       # CSS styling for layout
├── script.js        # JavaScript for API fetch and chart
```

## Setup and Run

1. Download the project folder.
2. Open the folder in a code editor (VSCode recommended).
3. Open `index.html` in the browser.

## Notes

* The project uses the **live API**: `https://fedskillstest.coalitiontechnologies.workers.dev`
* **Authentication** uses Basic Auth (`Username: coalition`, `Password: skills-test`).
* Only Jessica Taylor's data is displayed.
* No additional UI interactions are implemented, keeping in line with the FED skills test requirements.
* The blood pressure chart automatically updates based on the API data.

## Dependencies

* [Chart.js](https://www.chartjs.org/) - for rendering the blood pressure line chart.

## Contact

For any issues or questions about the project, reach out to the FED skills test support or refer to the API documentation provided in the test instructions.
