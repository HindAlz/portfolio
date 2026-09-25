# Hind Alzaabi — Portfolio

The original ivory-and-green portfolio, with a featured unpublished research study and 12 project entries: the existing public repositories plus the Facial Recognition Attendance coursework project. The fake-account model-development and prediction-API repositories are presented together as one project, with links to both.

## Open the website

Extract the ZIP, keep its folders together, and double-click **index.html**. The source is plain HTML, CSS, and JavaScript, with no installation, build step, API key, or external fonts. The two WebAR screenshots are included in `assets/images/`. Other popup screenshots load from GitHub; demo videos load from Google Drive only when selected. Hosted media needs an internet connection.

This version incorporates the supplied portfolio HTML, including the revised hero, project headings, research-experience text, and academic record. A broken heading tag and a few spelling errors were corrected.

The main content is ordered **Research → Research Experience → Projects**. Research presents the unpublished study; Research Experience contains the internship and continuing research interests. Projects contains all twelve entries, including six research projects. Use the Research filter to show those entries. Click a project image or **Explore project** to open its popup. GitHub remains a separate link on the card and in the popup. Project links remain available when JavaScript is disabled.

## Publish on GitHub Pages

1. Create a new public repository named **portfolio** under **HindAlz**.
2. Choose **uploading an existing file**, or **Add file → Upload files** if the repository already contains a README.
3. Upload **index.html**, **README.md**, and the complete **assets/** folder to the repository root. Include **.nojekyll** if it is visible in your file picker. Upload the extracted files, not the ZIP or an enclosing folder.
4. Commit the files to **main**.
5. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select **main** and **/(root)**, then click **Save**.
7. When deployment completes, the expected address is **https://hindalz.github.io/portfolio/**. Pages settings show the published address; the Actions tab shows deployment progress.
8. Add the published address to your GitHub profile and application materials.

To update an existing portfolio repository, replace its **index.html** and **assets/** folder with this version and commit. Keep its current Pages configuration if it already publishes from that location.

For a shorter **https://hindalz.github.io/** address, use a repository named **HindAlz.github.io**, provided that repository does not already contain another site.

See [GitHub's publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Featured research

**Mirage: Controlled Evaluation of Corruption-Mixture Training for Cross-Subject Motor-Imagery EEG** appears in the Research section, followed by Research Experience and the complete Projects collection. The summary is grounded in the supplied 22-page study report and describes its dataset, LOSO evaluation, robustness tests, augmentation findings, and limitations.

The study is labeled **Submitted to IEEE ICASSP**, **Unpublished research**, and **Code not yet public**. The official manuscript title and submission status were supplied by Hind. Acceptance, publication, a conference year, a coauthor list, and a code-release date are not claimed. The report itself and its figures are not included in the website or ZIP, and the research section has no paper/code download link.

The selected +4.91 macro F1 point improvement, confidence interval, and adjusted p-value are reported in the supplied document (abstract and augmentation analysis, pages 1 and 13). They are presented as study-report findings, with their scale, comparison, and limitations stated. They were not independently reproduced while building the portfolio.

The public EEG development repository remains a separate project entry. Its description explicitly says that it is not a release of the featured study’s code.

To update the publication status later, edit the visible text within `id="research"` in `index.html`. Add paper or code links only when those resources are actually public.

## Included projects

| Entry | Repository or repositories | Context |
| --- | --- | --- |
| Motor Imagery EEG Classification | [EEGMotorImagery-Classification](https://github.com/HindAlz/EEGMotorImagery-Classification) | Public-dataset classification experiments |
| VR–EEG Experiment Environment | [VR-EEG-Experiment-Environment](https://github.com/HindAlz/VR-EEG-Experiment-Environment) | VR task design; EEG collection planned |
| Fake Account Classification | [Model development](https://github.com/HindAlz/Fake-Account-Classification-Model-Development) · [Prediction API](https://github.com/HindAlz/Fake-Account-Classification-Prediction-API) | Development and serving; cloud deployment closed |
| ECoffe Sustainability VR | [ECoffe-Sustainability-VR-Game](https://github.com/HindAlz/ECoffe-Sustainability-VR-Game) | Meta Quest café and waste-sorting game |
| Interactive Anatomy WebAR | [Interactive-Anatomy-WebAR-Prototype](https://github.com/HindAlz/Interactive-Anatomy-WebAR-Prototype) | Marker tracking and audio labels |
| Archer's Journey | [Archer-s-Journey](https://github.com/HindAlz/Archer-s-Journey) | Unity platformer with archery mechanics |
| Healthcare Management Prototype | [Healthcare-Management-Prototype](https://github.com/HindAlz/Healthcare-Management-Prototype) | Streamlit workflows using fictional records |
| Mushroom Classification & Robustness | [MushroomDetection](https://github.com/HindAlz/MushroomDetection) | Classifier comparisons, interpretation, and robustness |
| Sequential Diagnosis Research | [SDP-Sequential-Diagnosis](https://github.com/HindAlz/SDP-Sequential-Diagnosis) | Team research in progress: DDXPlus preparation and Diaformer experiments |
| EEG Motor Imagery Internship Archive | [EEGTemp](https://github.com/HindAlz/EEGTemp) | Experimental internship code; private lab dataset excluded |
| Android System-Service Security PoC | [Android-System-Service-Denial-of-Service-PoC](https://github.com/HindAlz/Android-System-Service-Denial-of-Service-PoC) | Emulator-based security proof of concept |

The older `AI-Health` and `mysite` URLs could not be accessed on the review date and are not included as project cards. Renamed repositories use their current canonical names.

## File guide and editing

| File | What to change |
| --- | --- |
| `index.html` | Navigation, research, experience, illustrated project cards, About Me, and contact text |
| `assets/css/styles.css` | Colors, typography, spacing, card layout, popup appearance, and responsive styles |
| `assets/js/projects.js` | Popup descriptions, project links, screenshot captions and URLs, and demo links |
| `assets/js/main.js` | Menu, category filters, hero animation, popup controls, and media behavior |
| `assets/images/` | Included heart and body WebAR screenshots |

Each file uses indentation, descriptive names, and section comments. Open the folder in a code editor and save your changes, then refresh `index.html` in your browser. The downloadable standalone HTML is a convenient preview that uses online screenshot URLs; use the files in this ZIP when editing and publishing. Both versions have formatted source, and the preview contains no encoded JPEG strings.

- **Edit your biography:** find `id="about"` in `index.html`.
- **Edit a project card:** find its `<!-- Project: ... -->` comment in `index.html`. Keep the card's `data-project` value matched to the project `id` in `projects.js`.
- **Edit a popup:** find the corresponding project in `projects.js`. Change `overview`, `work`, `note`, or its links. Update the card separately when changing its title or short description.
- **Change screenshots:** edit a project's `images` array in `projects.js`. Each entry has `src`, `source`, `alt`, and `caption`. `src` can be an HTTPS URL or a path such as `assets/images/example.jpg`. `source` is the original-image link.
- **Change a demo:** edit the `video` link in `projects.js`. Existing Google Drive links are embedded only when the visitor selects **Demo video**.
- **Change categories:** edit the card's `data-category` values in `index.html` and the matching project record. The seven filters affect the project grid only.
- **Change the palette:** edit the variables near the start of `styles.css`.

Cards use SVG illustrations. Screenshots and videos appear only inside the project popup. GitHub remains a separate link. The bundled screenshots are normal JPEG files, rather than encoded strings inside the editable code.

The portfolio adds no analytics or contact-data collection. GitHub and Google Drive receive requests when their hosted media is opened. The portfolio itself has no paid hosting dependency.

## Content and verification

Project descriptions are grounded in the repositories and the previously supplied internship report. The four added entries were checked against current READMEs, source code, and notebooks. Team work, research archives, planned EEG collection, and incomplete sequential-diagnosis methods are identified explicitly.

Five project popups show authentic screenshots from their repository READMEs: VR–EEG, ECoffe, Interactive Anatomy WebAR, Archer’s Journey, and Healthcare Management. The VR–EEG, ECoffe, and Archer’s Journey popups also include on-demand Google Drive video players. The card artwork is illustrative, not EEG recordings or measured results. No unpublished research figures have been added. No private data, research-report PDFs, internship report files, executable security samples, or project dependencies are bundled. Each source repository retains its own asset and code attribution.

Checks cover repository coverage, card/panel consistency, internal links, JavaScript syntax, all seven filters, all 24 image/text popup triggers, separate repository and demo links, keyboard focus return, and the fallback popup in a lightweight DOM simulation. Full browser rendering was unavailable in the creation environment; open `index.html` to review the appearance before publishing.

## Project screenshots and demos

| Project | Gallery | Video |
| --- | --- | --- |
| VR–EEG Experiment Environment | 4 screenshots | Google Drive demo |
| ECoffe Sustainability VR | Scene screenshot and project banner | Google Drive demo |
| Interactive Anatomy WebAR | Heart and body examples in assets/images/ | — |
| Archer’s Journey | 2 screenshots | Google Drive demo |
| Healthcare Management | 2 interface screenshots | — |

Illustrated project cards open the popup; screenshots and videos appear only inside it. GitHub is a separate link. Use the **Image** buttons to browse screenshots and **Demo video** to load a player. Videos do not autoplay. Switching to an image or closing the popup removes the video player and stops playback. Each player includes an external demo link. Each popup image has an original-image link and a loading-failure message.

Image and video URLs come from the public project READMEs. The Google Drive files must stay viewable by visitors for playback to work. This environment could fetch the WebAR image files but blocked direct downloads of GitHub attachment images and Drive videos, so external playback and those hosted images were not visually verified here.

## Facial Recognition Attendance project

The twelfth card is categorized under Machine learning and Software. Its source package is bundled at `assets/downloads/Facial-Recognition-Attendance.zip` and available from the card and popup. This is a local source download, not a published GitHub repository. The standalone HTML preview points readers to this portfolio ZIP instead.

To connect a GitHub repository after creating it, set the attendance record's `repo` in `assets/js/projects.js` to your actual repository name and replace its card's Source ZIP link in `index.html` with the repository URL. You can retain the download link too. No remote repository was created by preparing this package.

The attendance code and README were organized from the uploaded Spring 2025 report. The report PDF, participant photos, student IDs, embeddings, and attendance records are not bundled. Team attribution and the limits of the historical evaluation are included in the project README.
