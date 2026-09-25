/*
 * Portfolio interactions.
 * Project descriptions and media URLs live in projects.js.
 * The HTML cards keep their SVG illustrations; media loads inside the popup.
 */

(() => {
  "use strict";

  const query = (selector) => document.querySelector(selector);
  const queryAll = (selector) => [...document.querySelectorAll(selector)];
  const projects = window.portfolioProjects;

  // Mobile navigation
  const menuButton = query(".menu-toggle");
  const navigation = query("#navigation");

  function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(isOpen));
    navigation.classList.toggle("is-open", isOpen);
  });

  queryAll("#navigation a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest("nav")) closeMenu();
  });

  // Filter only the project grid, leaving research and experience visible.
  const filters = queryAll(".filter");
  const cards = queryAll("#work .project-card");

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.filter;
      let visibleCount = 0;

      filters.forEach((filter) => {
        filter.setAttribute("aria-pressed", String(filter === button));
      });

      cards.forEach((card) => {
        const categories = card.dataset.category.split(" ");
        const isVisible = selectedCategory === "all" || categories.includes(selectedCategory);
        card.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });

      query(".project-count").textContent =
        `${visibleCount} project${visibleCount === 1 ? "" : "s"}`;
    });
  });

  // Hero illustration and reduced-motion preference
  const heroArt = query(".hero-art");
  const viewButtons = queryAll(".visual-toggle[data-view]");
  const pauseButton = query("#pause-art");

  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      heroArt.dataset.view = button.dataset.view;
      viewButtons.forEach((viewButton) => {
        viewButton.setAttribute("aria-pressed", String(viewButton === button));
      });
    });
  });

  function setAnimationPaused(isPaused) {
    heroArt.classList.toggle("paused", isPaused);
    pauseButton.setAttribute("aria-pressed", String(isPaused));
    pauseButton.textContent = isPaused ? "Play" : "Pause";
    pauseButton.setAttribute(
      "aria-label",
      isPaused ? "Play illustration animation" : "Pause illustration animation"
    );
  }

  pauseButton.addEventListener("click", () => {
    setAnimationPaused(!heroArt.classList.contains("paused"));
  });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function applyMotionPreference() {
    setAnimationPaused(reducedMotion.matches);
    pauseButton.hidden = reducedMotion.matches;
  }

  applyMotionPreference();
  reducedMotion.addEventListener("change", applyMotionPreference);

  // Shared external-link styling
  function createLink(label, url, isPrimary = false) {
    const link = document.createElement("a");
    link.textContent = `${label} ↗`;
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = isPrimary ? "button-primary" : "button-subtle";
    return link;
  }

  // Popup media: screenshots load on open; videos load only when selected.
  const mediaSection = query("#dialog-media");
  const mediaChoices = query("#media-choices");
  const mediaStage = query("#media-stage");

  function resetMedia() {
    // Removing the iframe also stops video playback.
    mediaStage.replaceChildren();
    mediaChoices.replaceChildren();
    mediaSection.hidden = true;
  }

  function renderProjectMedia(project) {
    resetMedia();
    const images = project.images || [];
    if (!images.length && !project.video) return;

    mediaSection.hidden = false;
    const choices = [];

    function activateChoice(selectedButton) {
      choices.forEach((button) => {
        button.setAttribute("aria-pressed", String(button === selectedButton));
      });
      mediaStage.replaceChildren();
    }

    function showImage(image, button) {
      activateChoice(button);

      const figure = document.createElement("figure");
      figure.className = "media-figure";

      const frame = document.createElement("div");
      frame.className = "media-image-frame";

      const status = document.createElement("p");
      status.className = "media-status";
      status.textContent = "Loading screenshot…";
      status.setAttribute("role", "status");

      const picture = document.createElement("img");
      picture.alt = image.alt;
      picture.decoding = "async";
      picture.referrerPolicy = "no-referrer";

      picture.addEventListener("load", () => {
        status.hidden = true;
        picture.hidden = false;
      });

      picture.addEventListener("error", () => {
        picture.hidden = true;
        status.hidden = false;
        status.textContent =
          "This screenshot could not load. You can open the original image below.";
      });

      frame.replaceChildren(status, picture);
      picture.src = image.src;

      const caption = document.createElement("figcaption");
      caption.textContent = image.caption;

      const sourceLink = createLink("Open original image", image.source);
      sourceLink.className = "media-source";

      figure.replaceChildren(frame, caption, sourceLink);
      mediaStage.replaceChildren(figure);
    }

    images.forEach((image, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "media-choice";
      button.textContent = `Image ${String(index + 1).padStart(2, "0")}`;
      button.setAttribute("aria-label", `Show screenshot ${index + 1} of ${images.length}`);
      button.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-controls", "media-stage");
      button.addEventListener("click", () => showImage(image, button));
      choices.push(button);
    });

    // Convert the existing public Drive link into its embeddable preview URL.
    const driveMatch = project.video?.match(
      /^https:\/\/drive\.google\.com\/file\/d\/([A-Za-z0-9_-]+)/
    );

    if (driveMatch) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "media-choice";
      button.textContent = "▶ Demo video";
      button.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-controls", "media-stage");

      button.addEventListener("click", () => {
        activateChoice(button);

        const frame = document.createElement("div");
        frame.className = "media-video-frame";

        const player = document.createElement("iframe");
        player.src = `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
        player.title = `${project.name} demo video`;
        player.allow = "fullscreen; picture-in-picture; encrypted-media";
        player.allowFullscreen = true;
        player.referrerPolicy = "strict-origin-when-cross-origin";
        frame.replaceChildren(player);

        const help = document.createElement("p");
        help.className = "media-help";

        const message = document.createElement("span");
        message.textContent = "If the player doesn't load, ";

        const fallbackLink = createLink("open the demo in a new tab", project.video);
        help.replaceChildren(message, fallbackLink);
        mediaStage.replaceChildren(frame, help);
      });

      choices.push(button);
    }

    mediaChoices.replaceChildren(...choices);

    if (images.length) {
      showImage(images[0], choices[0]);
    } else if (choices.length) {
      const prompt = document.createElement("p");
      prompt.className = "media-help";
      prompt.textContent = "Select Demo video to load the player.";
      mediaStage.replaceChildren(prompt);
    }
  }

  // Project popup and support for browsers without the native dialog API
  const dialog = query("#project-dialog");
  const backdrop = query("#modal-backdrop");
  const closeButton = query(".close-dialog");
  let popupOpener;

  function finishClosingPopup() {
    resetMedia();
    document.body.classList.remove("modal-open");
    backdrop.hidden = true;
    dialog.classList.remove("dialog-fallback");
    popupOpener?.focus({ preventScroll: true });
  }

  function closePopup() {
    const usesNativeDialog =
      typeof dialog.close === "function" && !dialog.classList.contains("dialog-fallback");

    if (usesNativeDialog) {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
      finishClosingPopup();
    }
  }

  function showPopup() {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.classList.add("dialog-fallback");
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("open", "");
      backdrop.hidden = false;
    }
    closeButton.focus();
  }

  queryAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = projects.find((item) => item.id === button.dataset.project);
      if (!project) return;

      popupOpener = button;
      query("#dialog-category").textContent = project.label;
      query("#dialog-title").textContent = project.name;
      query("#dialog-lead").textContent = project.lead;
      query("#dialog-overview").textContent = project.overview;
      query("#dialog-note").textContent = project.note;

      const highlights = project.work.map((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        return item;
      });
      query("#dialog-work").replaceChildren(...highlights);

      const links = [];

      if (project.repo) {
        const label = project.second ? "Model development" : "View on GitHub";
        links.push(createLink(label, `https://github.com/HindAlz/${project.repo}`, true));
      }

      // Unpublished repositories can offer a bundled source download instead.
      if (project.download) {
        const sourceLink = createLink("Download source ZIP", project.download, !project.repo);
        sourceLink.setAttribute("download", "Facial-Recognition-Attendance.zip");
        links.push(sourceLink);
      }

      if (project.second) {
        links.push(createLink("Prediction API", `https://github.com/HindAlz/${project.second}`));
      }
      if (project.video) links.push(createLink("Watch demo video", project.video));

      renderProjectMedia(project);
      query("#dialog-links").replaceChildren(...links);
      showPopup();
      dialog.scrollTop = 0;
      document.body.classList.add("modal-open");
    });
  });

  closeButton.addEventListener("click", closePopup);
  backdrop.addEventListener("click", closePopup);
  dialog.addEventListener("close", finishClosingPopup);

  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    const outsidePopup =
      event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outsidePopup) closePopup();
  });

  // Native dialogs manage keyboard focus themselves. The fallback needs a trap.
  document.addEventListener("keydown", (event) => {
    if (!dialog.classList.contains("dialog-fallback")) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closePopup();
      return;
    }

    if (event.key === "Tab") {
      const focusable = Array.from(dialog.querySelectorAll("button, a[href], iframe"));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
  });

  query("#year").textContent = new Date().getFullYear();
})();
