# PRODIGY_GA_02
AI Image Generation Web App
This project is a web-based application that allows users to generate images from text prompts using a Generative AI model. Built as part of an internship at Prodigy InfoTech, it showcases skills in frontend development and API integration.

Features
🎨 Generate images based on text prompts using Hugging Face AI models.
🚀 Responsive and user-friendly interface.
⏳ Real-time loading indicator during image generation.
🖼 Displays dynamically generated images.

Tech Stack
Frontend: HTML, CSS, JavaScript
Backend API: Hugging Face AI Model Integration
Hosting Environment: Local server (Python -m http.server)

How It Works
Enter a descriptive text prompt in the input field.
Click the Generate button.
The app sends the prompt to the Hugging Face API and fetches a generated image.
A loading indicator is displayed until the image is ready.
The generated image is displayed in the UI.

Setup Instructions

bash
Copy code
git clone https://github.com/arunkishorai/PRODIGY_GA_02.git
cd PRODIGY_GA_02
Start a simple HTTP server to host the app locally:

bash
Copy code
python -m http.server
Open the browser and go to:

arduino
Copy code
http://localhost:8000
Interact with the app by entering text prompts and generating images.

Files in the Project
index.html: Main HTML structure of the web app.
style.css: CSS for styling and responsive design.
script.js: JavaScript for API calls and app interactivity.
load.gif: Loading indicator (GIF).

Dependencies
Hugging Face API: Ensure you have access to the Hugging Face Inference API.
API Key: Replace the placeholder API key in script.js with your personal key.

Screenshots
1. Homepage
![Screenshot 2024-12-05 180057](https://github.com/user-attachments/assets/5bb59822-546c-4eed-96b1-a6a7637c0b04)

2. Generated Image
![Screenshot 2024-12-05 180158](https://github.com/user-attachments/assets/00547996-6f3d-4f98-bc2e-51f32ee5c950)

Future Enhancements
Add support for downloading generated images.
Allow multiple AI models for different styles of generation.
Host the project online for easy access.

Contact
If you have any questions or feedback, feel free to reach out:
Name: Arunkishor R
Email: kingkishor1141dj@gmail.com
LinkedIn: https://www.linkedin.com/in/arunkishor-r

Acknowledgments
Prodigy InfoTech for the opportunity and guidance during the internship.
Hugging Face for the amazing AI tools and models.
