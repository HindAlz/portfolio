/* Project popup content and media. Match each id to the card data-project attribute in index.html. */

window.portfolioProjects = [
  {
    "id": "eeg",
    "title": "EEG models' Robustness",
    "name": "EEG models' Robustness",
    "category": "research ml",
    "label": "EEG · Machine learning",
    "number": "01",
    "tags": [
      "Python",
      "EEG",
      "LOSO evaluation"
    ],
    "description": "Investigating how motor imagery classifiers generalize to people unseen during model development.",
    "repo": "EEGMotorImagery-Classification",
    "lead": "How well can an EEG classifier work for a person it has never seen?",
    "overview": "This project investigates cross-subject motor imagery classification using the public BNCI2014-001 dataset through MOABB. The work compares classical and deep learning approaches across four imagined movement classes.",
    "work": [
      "Organizing EEG loading and preprocessing around participant identity.",
      "Comparing CSP–LDA, EEGNet, ShallowConvNet, and ATCNet within a leave-one-subject-out evaluation design.",
      "Examining per-participant accuracy, balanced accuracy, macro F1, and Cohen’s kappa."
    ],
    "note": "Public EEG development repository. Code for Mirage, the manuscript submitted to IEEE ICASSP and featured above, is not yet publicly available. This link is not a release of that study code. This public-dataset work is also distinct from the private-data internship archive."
  },
  {
    "id": "vr",
    "title": "VR EEG Study environment.",
    "name": "VR EEG Study environment.",
    "category": "research immersive",
    "label": "VR · Experimental design",
    "number": "02",
    "tags": [
      "Unity",
      "C#",
      "Meta XR"
    ],
    "description": "A virtual environment with progressively demanding tasks and markers for participant interactions.",
    "repo": "VR-EEG-Experiment-Environment",
    "video": "https://drive.google.com/file/d/1hkzsy-d9wjkD30KLICL7cAY1SKWJLX18/view?usp=sharing",
    "lead": "Building an immersive environment for future cognitive-workload studies.",
    "overview": "Participants progress through interaction practice, a stillness period, guided exploration, comparison tasks, and multi-step object manipulation. The environment is designed to support future EEG collection under different task demands.",
    "work": [
      "Designing a sequence of VR tasks, from basic interaction to object sorting and alignment.",
      "Implementing teleportation, reading panels, object handling, and task progression in Unity.",
      "Instrumenting segment transitions and participant actions with EM-prefixed Unity log messages."
    ],
    "note": "The sequence also includes a tutorial on the controls needed for the environment tasks. Object grabbing supports multiple hold styles. Current markers capture interactions through live Unity logs.",
    "images": [
      {
        "src": "https://github.com/user-attachments/assets/01e8600c-4d1e-44e5-a2af-f1efbd456ece",
        "source": "https://github.com/user-attachments/assets/01e8600c-4d1e-44e5-a2af-f1efbd456ece",
        "alt": "VR–EEG Experiment Environment project screenshot 1.",
        "caption": "VR–EEG Experiment Environment — screenshot 1 from the project README."
      },
      {
        "src": "https://github.com/user-attachments/assets/5592d426-2cb7-45e7-ad03-688186847602",
        "source": "https://github.com/user-attachments/assets/5592d426-2cb7-45e7-ad03-688186847602",
        "alt": "VR–EEG Experiment Environment project screenshot 2.",
        "caption": "VR–EEG Experiment Environment — screenshot 2 from the project README."
      },
      {
        "src": "https://github.com/user-attachments/assets/17c1117f-9a4e-41f0-914b-af110748acd3",
        "source": "https://github.com/user-attachments/assets/17c1117f-9a4e-41f0-914b-af110748acd3",
        "alt": "VR–EEG Experiment Environment project screenshot 3.",
        "caption": "VR–EEG Experiment Environment — screenshot 3 from the project README."
      },
      {
        "src": "https://github.com/user-attachments/assets/9163de52-ea6d-4d79-9435-dcf9ea286c6c",
        "source": "https://github.com/user-attachments/assets/9163de52-ea6d-4d79-9435-dcf9ea286c6c",
        "alt": "VR–EEG Experiment Environment project screenshot 4.",
        "caption": "VR–EEG Experiment Environment — screenshot 4 from the project README."
      }
    ]
  },
  {
    "id": "mushroom",
    "title": "Poisonous mushroom classification",
    "name": "Poisonous mushroom classification",
    "category": "research ml",
    "label": "Machine learning · Robustness",
    "number": "03",
    "tags": [
      "scikit-learn",
      "XGBoost",
      "CatBoost"
    ],
    "description": "Comparing classifiers, interpreting features, and testing how predictions change when inputs are missing or perturbed.",
    "repo": "MushroomDetection",
    "lead": "Examining what makes a classifier reliable beyond its headline accuracy.",
    "overview": "A machine learning study using numerical and categorical attributes from the Secondary Mushroom dataset. The notebooks explore preprocessing, model comparison, sanity checks, feature importance, and robustness under degraded inputs.",
    "work": [
      "Preparing mushroom attributes and comparing Logistic Regression, SVM, MLP, Random Forest, and boosting models.",
      "Checking dummy baselines and shuffled labels, then interpreting a Random Forest with permutation importance and PDP/ICE plots.",
      "Studying missing inputs, feature perturbations, and feature removal to examine model robustness."
    ],
    "note": "Study uses simulated categorical and continuous data types from the Secondary Mushroom Dataset."
  },
  {
    "id": "diagnosis",
    "title": "Sequential diagnosis",
    "name": "Sequential diagnosis",
    "category": "research ml",
    "label": "Machine learning · In progress",
    "number": "04",
    "tags": [
      "Python",
      "DDXPlus",
      "Diaformer",
      "AFABench"
    ],
    "description": "A team research project exploring how AI can acquire evidence step by step to support diagnosis under a limited budget.",
    "repo": "SDP-Sequential-Diagnosis",
    "lead": "Investigating what to ask next, when to stop, and how to balance diagnostic accuracy with the cost of gathering evidence.",
    "overview": "The project explores budget-aware sequential diagnosis: starting with limited patient information and deciding which evidence to acquire before making a prediction. Current experiments evaluate existing approaches, including Diaformer and methods available through AFABench, to understand their performance and inform the project's design.",
    "work": [
      "Exploring DDXPlus as a testbed for sequential diagnosis and evidence acquisition.",
      "Running experiments with existing approaches to assess their performance and limitations.",
      "Using the findings to guide the design and evaluation of a budget-aware diagnostic assistant."
    ],
    "note": "Early research in progress. Current work focuses on evaluating existing approaches; the architecture, evidence sources, and final scope will evolve with the findings."
  },
  {
    "id": "internship",
    "title": "Multi-branch EEG classification",
    "name": "Multi-branch EEG classification",
    "category": "research ml",
    "label": "EEG · Research archive",
    "number": "05",
    "tags": [
      "TensorFlow / Keras",
      "Attention",
      "Signal processing"
    ],
    "description": "Internship experiments combining temporal, spatial, and spectral EEG representations for motor imagery in VR.",
    "repo": "EEGTemp",
    "lead": "Investigating EEG representations during imagery of natural and supernumerary thumbs.",
    "overview": "Research internship work at NYU Abu Dhabi’s Applied Interactive Multimedia Lab, using recordings previously collected by the lab. The archive preserves experimental preprocessing and model variants for motor imagery involving a natural thumb and an additional virtual thumb.",
    "work": [
      "Preparing dataset-specific EEG trials and investigating participant-level experimental comparisons.",
      "Exploring temporal, spatial, and spectral branches, attention-based fusion, and temporal convolution variants.",
      "Comparing experimental components with a lab-provided ATCNet reference implementation."
    ],
    "note": "The lab’s dataset is private and is not distributed. This archive contains intermediate research experiments, not a single validated pipeline. It is distinct from the public BNCI2014-001 EEG classification project."
  },
  {
    "id": "android",
    "title": "Android denial-of-service PoC",
    "name": "Android denial-of-service PoC",
    "category": "research security",
    "label": "Android · Security research",
    "number": "06",
    "tags": [
      "Java",
      "Android",
      "Binder / Parcel"
    ],
    "description": "An emulator-tested proof of concept examining system-service input handling, process lifecycle, and denial-of-service behavior.",
    "repo": "Android-System-Service-Denial-of-Service-PoC",
    "lead": "Studying how Android system services respond to deliberately constructed input.",
    "overview": "An Android security proof of concept exploring Binder/Parcel request handling and repeated invocation from a separate process. Tested through emulator experiment focused on Denial of Service and process behavior.",
    "work": [
      "Examining inter-process communication and input handling at a system-service boundary.",
      "Exploring process lifecycle behavior when the initiating activity or system services are interrupted.",
      "Organizing a Java demonstration app with execution logging and an Android interface."
    ],
    "note": "The documented scope is an Android emulator proof of concept. Its intended effect concerns service availability on a susceptible build"
  },
  {
    "id": "ml",
    "title": "Deployment: Fake account detector",
    "name": "Deployment: Fake account detector",
    "category": "ml",
    "label": "Machine learning · Deployment",
    "number": "07",
    "tags": [
      "AutoGluon",
      "MLflow",
      "Flask"
    ],
    "description": "A machine learning workflow connecting profile analysis and model comparison to a prediction API.",
    "repo": "Fake-Account-Classification-Model-Development",
    "second": "Fake-Account-Classification-Prediction-API",
    "lead": "Connecting model development with a usable prediction interface.",
    "overview": "This coursework project explores fake-account classification from eleven numerical social-media profile attributes. Two repositories connect data exploration and model development with a Flask API serving an exported AutoGluon predictor.",
    "work": [
      "Exploring missing values, class imbalance, preprocessing, and feature selection.",
      "Comparing baseline models and ensembles, tracking experiments with MLflow, and examining model explanations.",
      "Connecting the exported model to a Flask prediction API, Docker configuration, and a Cloud Run deployment workflow."
    ],
    "note": "The cloud deployment is closed to avoid ongoing hosting costs. Source code and deployment configuration remain available. There is no live prediction service."
  },
  {
    "id": "cafe",
    "title": "ECoffe! A VR game",
    "name": "ECoffe! A VR game",
    "category": "immersive games",
    "label": "Meta Quest · VR game",
    "number": "08",
    "tags": [
      "Unity",
      "Meta Quest",
      "C#"
    ],
    "description": "A VR café game connecting food preparation, waste sorting, and shop progression with sustainability.",
    "repo": "ECoffe-Sustainability-VR-Game",
    "video": "https://drive.google.com/file/d/12-mcW_iDNXramo13fpW3OXApJ-y5A6Qs/view?usp=drive_link",
    "lead": "Learning about sustainability through a hands-on café shift.",
    "overview": "Built for Meta Quest, ECoffe combines customer orders and food preparation with choices about cups and plates. After the shift, players throw rubbish into the correct bins, then spend earned coins on recipes, furniture, and café decorations.",
    "work": [
      "Interactive food preparation, customer orders, and shift progression.",
      "A post-shift waste-sorting minigame and a shop for unlocks and decoration.",
      "Also contain a short sandwitch making demo."
    ],
    "note": "Unity project for Meta Quest. The repository also includes an AI-assisted NPC dialogue feature; it requires separate API configuration. Game assets include third-party resources.",
    "images": [
      {
        "src": "https://github.com/user-attachments/assets/348a21cb-cbe3-4bb1-9937-3d20044d682c",
        "source": "https://github.com/user-attachments/assets/348a21cb-cbe3-4bb1-9937-3d20044d682c",
        "alt": "ECoffe · Sustainability VR project screenshot 1.",
        "caption": "ECoffe · Sustainability VR — screenshot 1 from the project README."
      },
      {
        "src": "https://github.com/user-attachments/assets/1dc5488d-b2be-4b9e-95ff-681490097a49",
        "source": "https://github.com/user-attachments/assets/1dc5488d-b2be-4b9e-95ff-681490097a49",
        "alt": "ECoffe Sustainability VR project banner.",
        "caption": "ECoffe project banner from the repository."
      }
    ]
  },
  {
    "id": "ar",
    "title": "Interactive WebAR for anatomy",
    "name": "Interactive WebAR for anatomy",
    "category": "immersive software",
    "label": "Augmented reality · Education",
    "number": "09",
    "tags": [
      "JavaScript",
      "A-Frame",
      "AR.js"
    ],
    "description": "Marker-based heart and body models with anatomical labels and tap-to-play audio explanations.",
    "repo": "Interactive-Anatomy-WebAR-Prototype",
    "lead": "Exploring anatomy through an ordinary browser and a camera.",
    "overview": "An educational prototype that displays 3D heart and body models over custom visual markers. Audio labels follow anatomical anchors and play an explanation when selected.",
    "work": [
      "Designing the browser interface and integrating marker tracking with AR.js and A-Frame.",
      "Positioning labels over their anatomical anchors and making the visible labels the audio targets.",
      "Managing single-clip playback and stopping audio when the tracked marker is lost."
    ],
    "note": "Educational prototype. Requires camera permission and the matching markers supplied in the repository.",
    "images": [
      {
        "src": "assets/images/webar-heart.jpg",
        "source": "https://raw.githubusercontent.com/HindAlz/Interactive-Anatomy-WebAR-Prototype/main/WebAr/heart%20eg.jpg",
        "alt": "Heart model over a visual marker with Aorta and Right Ventricle audio labels.",
        "caption": "Heart model with tap-to-play anatomical labels."
      },
      {
        "src": "assets/images/webar-body.jpg",
        "source": "https://raw.githubusercontent.com/HindAlz/Interactive-Anatomy-WebAR-Prototype/main/WebAr/body%20eg.jpg",
        "alt": "Body model over a visual marker with Ribcage, Liver, and Stomach audio labels.",
        "caption": "Body model with audio labels for the ribcage, liver, and stomach."
      }
    ]
  },
  {
    "id": "archer",
    "title": "Archer's Journey: a 2D game",
    "name": "Archer's Journey: a 2D game",
    "category": "games",
    "label": "Unity · 2D platformer",
    "number": "10",
    "tags": [
      "C#",
      "2D physics",
      "UI Toolkit"
    ],
    "description": "A pixel-art platformer with archery, collectible food, and a temporary fire-arrow power-up.",
    "repo": "Archer-s-Journey",
    "video": "https://drive.google.com/file/d/1IHg1v9fb4BVlh-qFVm8Lk9z9kWeSi4tM/view?usp=sharing",
    "lead": "Adding archery and progression to a playful platforming adventure.",
    "overview": "Guide an archer across platforms, encounter patrolling enemies, collect food, and reach the finish. The game builds on Unity’s 2D Platformer Microgame, with additional combat mechanics, power-ups, and interface elements.",
    "work": [
      "Directional projectile spawning, attack animation, and a firing cooldown.",
      "Chest-triggered fire arrows and collectible food with interface feedback.",
      "Health, replay, and a completion summary using Unity UI Toolkit."
    ],
    "note": "Built on Unity’s 2D Platformer Microgame foundation, with third-party art including Cainos assets. The repository records the template and asset credits.",
    "images": [
      {
        "src": "https://github.com/user-attachments/assets/43eac7d4-42ef-4a87-bce4-b5b676fb111c",
        "source": "https://github.com/user-attachments/assets/43eac7d4-42ef-4a87-bce4-b5b676fb111c",
        "alt": "Archer’s Journey project screenshot 1.",
        "caption": "Archer’s Journey — screenshot 1 from the project README."
      },
      {
        "src": "https://github.com/user-attachments/assets/665e7238-398c-42ea-8280-b58f43eb72cb",
        "source": "https://github.com/user-attachments/assets/665e7238-398c-42ea-8280-b58f43eb72cb",
        "alt": "Archer’s Journey project screenshot 2.",
        "caption": "Archer’s Journey — screenshot 2 from the project README."
      }
    ]
  },
  {
    "id": "health",
    "title": "Healthcare management prototype",
    "name": "Healthcare management prototype",
    "category": "software",
    "label": "Software · Workflow design",
    "number": "11",
    "tags": [
      "Python",
      "Streamlit",
      "CSV storage"
    ],
    "description": "A multi-role application demonstrating appointment, inventory, visit, and billing workflows.",
    "repo": "Healthcare-Management-Prototype",
    "lead": "Bringing patient and staff workflows into one small application.",
    "overview": "A Python and Streamlit prototype with patient, staff, administrator, and emergency-room interfaces. It uses local CSV storage and fictional demo records to explore healthcare-management workflows.",
    "work": [
      "Patient registration and login, booking, visit history, and demo billing.",
      "Staff schedules, administrator inventory views, and emergency appointment routing."
    ],
    "note": "Software demonstration using fictional records. Optional AI features are programming examples, not clinical tools.",
    "images": [
      {
        "src": "https://github.com/user-attachments/assets/1a1757dd-e61e-40b0-96bc-49a4a4521411",
        "source": "https://github.com/user-attachments/assets/1a1757dd-e61e-40b0-96bc-49a4a4521411",
        "alt": "Healthcare Management Prototype project screenshot 1.",
        "caption": "Healthcare Management Prototype — screenshot 1 from the project README."
      },
      {
        "src": "https://github.com/user-attachments/assets/fd873e81-07f2-4773-8c50-a41e6550aad7",
        "source": "https://github.com/user-attachments/assets/fd873e81-07f2-4773-8c50-a41e6550aad7",
        "alt": "Healthcare Management Prototype project screenshot 2.",
        "caption": "Healthcare Management Prototype — screenshot 2 from the project README."
      }
    ]
  },
  {
    "id": "attendance",
    "title": "Facial recognition attendance",
    "name": "Facial recognition attendance",
    "category": "ml software",
    "label": "Computer vision · Team project",
    "number": "12",
    "tags": [
      "Python",
      "OpenCV",
      "DeepFace",
      "Streamlit"
    ],
    "description": "A local attendance prototype using FaceNet embeddings, cosine matching, and image or webcam observations.",
    "repo": "Facial-Recognition-Attendance",
    "lead": "Exploring classroom attendance through pretrained face embeddings and local image processing.",
    "overview": "The implementation uses Haar Cascade face localization, DeepFace FaceNet embeddings with the MTCNN backend, averaged enrollment references, and cosine similarity matching.",
    "work": [
      "Team leadership and development of a face-recognition attendance workflow.",
      "Enrollment, uploaded-image checks, webcam observations, and attendance reporting.",
      "Comparison of recognition and embedding configurations, with limitations documented in the original report."
    ],
    "note": "The dataset was created by our project supervisor for this project and is not publicly available."
  }
];