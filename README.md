# VAJRAKAVACH INTELLIGENCE ENGINE V1

## Overview

Vajrakavach Intelligence Engine generates crop advisory reports for farmers using:

* Crop
* Sowing date
* Field coordinates
* Weather data
* Knowledge base
* Wind direction

The engine returns pest risk and scouting recommendations.

---

# Folder Structure

```text
vajrakavach_engine/

index.js
advisoryEngine.js

calculateDas.js
stageService.js
seasonService.js
weatherService.js
candidatePestService.js
riskEngine.js
windEngine.js
fieldEngine.js
reportGenerator.js

knowledge/
    cropKnowledge.json
```

---

# Input Required

The backend should provide:

```js
{
    crop: "Groundnut",

    sowingDate: "2026-03-20",

    latitude: 15.1065,

    longitude: 77.6340,

    fieldCoordinates: [

        [15.1065,77.6340],
        [15.1067,77.6352],
        [15.1058,77.6355],
        [15.1055,77.6339]

    ]
}
```

---

# Engine Usage

```js
const generateAdvisory = require("./advisoryEngine");

const advisory = await generateAdvisory(farmerData);
```

---

# Processing Flow

```text
Farmer Data
      ↓
Calculate DAS
      ↓
Determine Crop Stage
      ↓
Determine Season
      ↓
Fetch Weather
      ↓
Determine Wind Direction
      ↓
Knowledge Base Lookup
      ↓
Risk Calculation
      ↓
Field Coordinate Analysis
      ↓
Scout Direction Selection
      ↓
Generate Advisory
```

---

# Output Example

```js
{
  crop: "Groundnut",

  das: 82,

  stage: "Pod_Formation",

  season: "Kharif",

  temperature: 33.4,

  humidity: 48,

  rainfall: 0,

  windDirection: "W",

  risk: "LOW",

  primaryConcern: "Tikka Leaf Spot",

  secondaryConcern: "Leaf Miner",

  majorDisease: "Late Leaf Spot",

  scoutingFocus: "Canopy and root zone",

  precaution: "Inspect defoliation symptoms",

  scoutStartSide: "West",

  scoutCoordinates: [
      [15.1055,77.6339]
  ],

  todayAction:
  "Inspect Tikka Leaf Spot symptoms starting from the West side of the field."
}
```

---

# Knowledge Base

Crop information is stored inside:

```text
knowledge/cropKnowledge.json
```

The engine supports:

* Cotton
* Chilli
* Groundnut

Additional crops can be added without changing code.

---

# Weather Source

Open-Meteo API

Weather parameters used:

* Temperature
* Humidity
* Rainfall
* Wind Direction

---

# Current Version Features

✅ DAS calculation

✅ Crop stage identification

✅ Season detection

✅ Real weather API

✅ Wind direction conversion

✅ Knowledge-base-driven pest lookup

✅ Disease information

✅ Risk calculation

✅ Field coordinate processing

✅ Scout side recommendation

---

# Future Improvements

* Observation database
* Real corner calculation
* Zone prioritization
* Device detections
* Infographic report generation
* WhatsApp automation

---

# Notes

The engine is independent of:

* MongoDB
* Express routes
* Authentication
* Frontend

The backend only needs to pass farmer data and consume the advisory output.
