# Installation Guide
## Software Requirements
- Python - 3.11.9 
- Node - 21.7.3
- npm - 10.5.0

## [Frontend (FE) Setup](https://github.com/Utkarsh-Anandani/hackathon-skin-cancer-detection-frontend)

### Clone the Repository
```bash
git clone https://github.com/Utkarsh-Anandani/hackathon-skin-cancer-detection-frontend.git
```

### Navigate to the Project Directory
```bash
cd hackathon-skin-cancer-detection-frontend
```

### Copy the `.env` File and Replace with Your Keys
```powershell
Copy-Item app/.env.example .env
```

### Install Dependencies
```bash
npm install
```

### Start the Frontend Server
```bash
npm run dev
```

---

## [Backend (BE) Setup](https://github.com/Utkarsh-Anandani/hackathon-skin-cancer-detection-backend)

### Clone the Repository
```bash
git clone https://github.com/Utkarsh-Anandani/hackathon-skin-cancer-detection-backend.git
```

### Navigate to the Project Directory
```bash
cd hackathon-skin-cancer-detection-backend
```

### Copy the `.env` File and Replace with Your Keys
```powershell
Copy-Item .env.example .env
```

### Install Dependencies
```bash
npm install
```

### Start the Backend Server
```bash
npm run dev
```

---

## [Deep Learning (Flask) Backend Setup](https://github.com/Utkarsh-Anandani/hackathon-skin-cancer-detection-DL-backend)

### Clone the Repository
```bash
git clone https://github.com/Utkarsh-Anandani/hackathon-skin-cancer-detection-DL-backend.git
```

### Navigate to the Project Directory
```bash
cd hackathon-skin-cancer-detection-DL-backend
```

### Install Dependencies
```bash
pip install tensorflow opencv-python numpy requests flask
```

### Start the Flask Backend Server
```bash
python main.py
```

