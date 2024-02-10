document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const mainContainer = document.getElementById("mainContainer");
            data.forEach(item => {
                const cardContainer = document.createElement("div");
                cardContainer.classList.add("card_container");
                const imageContainer = document.createElement("a");
                imageContainer.href = item.imageHref;
                imageContainer.classList.add("card_image_container");

                const image = document.createElement("img");
                image.src = item.imageUrl;
                image.alt = "card image";
                image.classList.add("card_image");
                image.loading = "lazy";

                imageContainer.appendChild(image);

                const titleContainer = document.createElement("div");
                titleContainer.classList.add("card_title_container");

                const titleAnchor = document.createElement("a");
                titleAnchor.href = item.titleHref;
                titleAnchor.classList.add("card_title_anchor");

                const title = document.createElement("h2");
                title.classList.add("card_title");
                title.textContent = item.title;

                titleAnchor.appendChild(title);
                titleContainer.appendChild(titleAnchor);

                const description = document.createElement("p");
                description.classList.add("card_desc");
                description.textContent = item.description;

                titleContainer.appendChild(description);

                const footerContainer = document.createElement("div");
                footerContainer.classList.add("card_footer_container");

                const authorContainer = document.createElement("div");
                authorContainer.classList.add("author_container");

                const authorAvatarContainer = document.createElement("div");
                authorAvatarContainer.classList.add("author_avatar_container");

                const authorAvatar = document.createElement("img");
                authorAvatar.src = item.authorAvatarUrl;
                authorAvatar.alt = "author avatar";
                authorAvatar.classList.add("author_avatar");

                authorAvatarContainer.appendChild(authorAvatar);

                const authorInfoContainer = document.createElement("div");
                authorInfoContainer.classList.add("author_info_container");

                const authorName = document.createElement("span");
                authorName.classList.add("author_name");
                authorName.textContent = item.authorName;

                const authorDate = document.createElement("span");
                authorDate.classList.add("author_date");
                authorDate.textContent = item.publishDate;

                authorInfoContainer.appendChild(authorName);
                authorInfoContainer.appendChild(authorDate);

                authorContainer.appendChild(authorAvatarContainer);
                authorContainer.appendChild(authorInfoContainer);

                const tagContainer = document.createElement("div");
                tagContainer.innerHTML = `<span class="card_tag_container">${item.tag}</span>`;

                footerContainer.appendChild(authorContainer);
                footerContainer.appendChild(tagContainer);

                cardContainer.appendChild(imageContainer);
                cardContainer.appendChild(titleContainer);
                cardContainer.appendChild(footerContainer);

                mainContainer.appendChild(cardContainer);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
