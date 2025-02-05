fetch("persos.json")
  .then((response) => response.json())
  .then((data) => {
    const listContainer = document.getElementById("characters-list");
    const modalOverlay = document.getElementById("modalOverlay");
    const modalContent = document.getElementById("modalContent");
    const closeModal = document.getElementById("closeModal");

    document.getElementById("burger").addEventListener("click", function () {
      document.getElementById("menu").classList.toggle("show");
  });
  document.getElementById("close").addEventListener("click", function () {
      document.getElementById("menu").classList.remove("show");
  });

  document.addEventListener("click", (event) =>{
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
      menu.classList.remove("show");
    }
  }
  )

    data.characters.forEach((character) => {
      const card = document.createElement("div");
      card.classList.add("character-card");
      const charactersCardBottom = document.createElement("div");

      charactersCardBottom.classList.add("character-bottom");
      card.appendChild(charactersCardBottom);

      const Ul = document.createElement("img");
      charactersCardBottom.appendChild(Ul);

      Ul.classList.add("character-ul");
      Ul.src = character.imageUltras;

      const borderType = document.createElement("img");
      charactersCardBottom.appendChild(borderType);
      borderType.classList.add("character-type");
      borderType.src = character.imageType;

      const img = document.createElement("img");
      img.classList.add("image-cards");
      img.src = character["image-card"];
      img.alt = character.name;

      const name = document.createElement("p");
      name.textContent = character.name;

      card.appendChild(img);
      card.appendChild(name);

      card.addEventListener("click", () => {
        modalOverlay.style.display = "flex";
        modalContent.innerHTML = "";

        const header = document.createElement("div");
        modalContent.appendChild(header);
        header.classList.add("header");

        const detailImg = document.createElement("img");
        detailImg.classList.add("detailsimage");
        detailImg.src = character["image-details"];
        detailImg.alt = character.name;

        const title = document.createElement("h2");
        title.textContent = character.name;

        const divP = document.createElement("div");
        modalContent.appendChild(divP);
        divP.classList.add("divP");

        const divTags = document.createElement("div");
        modalContent.appendChild(divTags);
        divTags.classList.add("divTags");

        const tags = document.createElement("p");
        tags.textContent = `Tags: ${character.tags}`;
        const health = document.createElement("p");
        health.textContent = `PV: ${character.health}`;

        const attackStrike = document.createElement("p");
        attackStrike.textContent = `Atk Strike: ${character.attackStrike}`;

        const defenseStrike = document.createElement("p");
        defenseStrike.textContent = `Def Strike: ${character.defenseStrike}`;

        const defenseBlast = document.createElement("p");
        defenseBlast.textContent = `Def Blast: ${character.defenseBlast}`;

        const tauxCrit = document.createElement("p");
        tauxCrit.textContent = `Taux Crit: ${character.tauxCrit}`;

        const attackBlast = document.createElement("p");
        attackBlast.textContent = `Atk Blast: ${character.attackBlast}`;

        const récupDeKi = document.createElement("p");
        récupDeKi.textContent = `Récup de Ki: ${character.récupDeKi}`;

        const récupEsquive = document.createElement("p");
        récupEsquive.textContent = `Récup d'Esquive: ${character.récupEsquive}`;

        const slice = document.createElement("p");
        slice.textContent = `Slice: ${character.slice}`;

        const perforation = document.createElement("p");
        perforation.textContent = `Perforation: ${character.perforation}`;

        const impact = document.createElement("p");
        impact.textContent = `Impact: ${character.impact}`;

        const explosion = document.createElement("p");
        explosion.textContent = `Explosion: ${character.explosion}`;

        const button1 = document.createElement("button");
        button1.classList.add("button1");
        modalContent.appendChild(button1);

        const button2 = document.createElement("button");
        button2.classList.add("button2");
        modalContent.appendChild(button2);

        let imgIndex = 0;
        const footerModal = document.createElement("div");
        modalContent.appendChild(footerModal);
        footerModal.classList.add("footerModal");

        const footerP = document.createElement("p");
        footerModal.appendChild(footerP);
        footerP.innerText = "Equipements Conseillés";

        const carouselImage = document.createElement("img");
        carouselImage.classList.add("carouselImage");
        footerModal.appendChild(carouselImage);
        carouselImage.src = character.imageCarousel[imgIndex];
        button1.onclick = () => {
          console.log("bonjour");
          imgIndex =
            (imgIndex - 1 + character.imageCarousel.length) %
            character.imageCarousel.length;
          carouselImage.src = character.imageCarousel[imgIndex];
        };
        button2.onclick = () => {
          console.log("bonjour");
          imgIndex = (imgIndex + 1) % character.imageCarousel.length;
          carouselImage.src = character.imageCarousel[imgIndex];
        };

        header.appendChild(title);
        header.appendChild(detailImg);
        divP.appendChild(health);
        divP.appendChild(attackStrike);
        divP.appendChild(defenseStrike);
        divP.appendChild(defenseBlast);
        divP.appendChild(tauxCrit);
        divP.appendChild(attackBlast);
        divP.appendChild(récupDeKi);
        divP.appendChild(récupEsquive);
        divP.appendChild(slice);
        divP.appendChild(perforation);
        divP.appendChild(impact);
        divP.appendChild(explosion);
        divTags.appendChild(tags);
      });

      listContainer.appendChild(card);
    });

    closeModal.addEventListener("click", () => {
      modalOverlay.style.display = "none";
    });
  });
