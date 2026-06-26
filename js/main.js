// =========================
// HASHTAGS
// =========================

function renderHashtags(hashtags) {

    const container = document.querySelector(".hashtag-icons");

    let html = `
        <img src="assets/icons/hashtag_icon.svg"
             alt="Hashtag Icon"
             class="hashtag-icon">
    `;

    hashtags.forEach(tag => {
        html += `
            <span class="hashtag">
                # ${tag}
            </span>
        `;
    });

    container.innerHTML = html;
}

// =========================
// TOP MENU
// =========================

function renderHeaderMenu(menu) {

    const container = document.querySelector("header .hot-topic");

    container.innerHTML = menu.map((item, index) => `

        <div class="hot-topic-item ${index === 0 ? "active" : ""}">

            ${item.icon ? `
                <div class="topic-icon">
                    <img src="${item.icon}" alt="">
                </div>
            ` : ""}

            <span class="topic-text">
                ${item.text}
            </span>

        </div>

    `).join("");

    container.querySelectorAll(".hot-topic-item").forEach(el => {

        el.addEventListener("click", () => {

            container.querySelectorAll(".hot-topic-item")
                .forEach(i => i.classList.remove("active"));

            el.classList.add("active");

        });

    });
}
function renderMegaMenu(menuData, bottomData){

    const container =
        document.getElementById("mega-menu");

    container.innerHTML = `

        <div class="mega-menu-content">

            ${menuData.map(column => `

                <div class="menu-column">

                    <h3>${column.title}</h3>

                    <ul>
                        ${column.items.map(item => `
                            <li>${item}</li>
                        `).join("")}
                    </ul>

                </div>

            `).join("")}

        </div>

        <div class="mega-menu-bottom">

            ${bottomData.map(item => `

                <div class="mega-bottom-item">

                    <img
                        src="${item.icon}"
                        alt="${item.title}">

                    <span>${item.title}</span>

                </div>

            `).join("")}

        </div>

    `;
}
// =========================
// LEFT NEWS
// =========================

function renderLeftNews(newsList) {

    const container = document.getElementById("left-news");

    container.innerHTML = newsList.map(news => `
        <div class="left-news-item">

            <span class="news-topic">
                ${news.category}
            </span>

            <h2 class="left-news-title">
                ${news.title}
            </h2>

        </div>
    `).join("");
}

// =========================
// FEATURED NEWS
// =========================

function renderFeaturedNews(news) {

    const container = document.getElementById("featured-news");

    container.innerHTML = `
        <div class="featured-news-item">

            <img src="${news.image}"
                 alt="${news.title}"
                 class="featured-news-image">

            <h2 class="featured-news-title">
                ${news.title}
            </h2>

            <span class="news-topic featured-news-category">
                ${news.category}
            </span>

            <p class="featured-news-desc">
                ${news.description}
            </p>

        </div>
    `;
}

// =========================
// RIGHT NEWS
// =========================

function renderRightNews(newsList) {

    const container = document.getElementById("right-news");

    container.innerHTML = newsList.map(news => `
        <div class="right-news-item">

            <div class="right-news-title">
                <h2>${news.title}</h2>
            </div>

            <div class="right-news-content">

                <div class="right-news-img">
                    <img src="${news.image}"
                         alt="${news.title}"
                         class="right-news-image">
                </div>

                <div class="right-news-text">

                    <span class="news-topic">
                        ${news.category}
                    </span>

                    <div class="right-news-desc">
                        <p>${news.description}</p>
                    </div>

                </div>

            </div>

        </div>
    `).join("");
}

// =========================
// ARTICLES
// =========================

let allArticles = [];
let currentPage = 1;
const articlesPerPage = 5;

function renderArticles() {

    const container = document.getElementById("article-list");

    const visibleArticles =
        allArticles.slice(0, currentPage * articlesPerPage);

    container.innerHTML = visibleArticles.map(article => `
        <div class="article-card">

            <div class="article-image">
                <img src="${article.image}"
                     alt="${article.title}">
            </div>

            <div class="article-content">

                <span class="news-topic">
                    ${article.category}
                </span>

                <h3 class="article-title">
                    ${article.title}
                </h3>

                <p class="article-excerpt">
                    ${article.excerpt}
                </p>

            </div>

        </div>
    `).join("");

    const loadMoreBtn =
        document.getElementById("load-more");

    if (
        currentPage * articlesPerPage >=
        allArticles.length
    ) {
        loadMoreBtn.style.display = "none";
    }
}

// =========================
// SIDEBAR
// =========================

function renderSidebar(banners) {

    const container =
        document.getElementById("sidebar");

    container.innerHTML = banners.map(banner => `
        <a href="${banner.link}">
            <img
                src="${banner.image}"
                alt="Banner"
                style="
                    width:100%;
                    margin-bottom:20px;
                    display:block;
                "
            >
        </a>
    `).join("");
}

// =========================
// FOOTER
// =========================

function renderFooter(footer = {}) {

    const {
        name = "",
        address = "",
        hotline = "",
        email = "",
        editor = "",
        deputy = "",
        license = ""
    } = footer;

    // Footer nav bar — renderTopMenu() đã render topMenu vào tất cả
    // .hot-topic kể cả #footer-menu nên không cần xử lý thêm ở đây

    // Cột giữa: tên báo + địa chỉ + hotline + email
    const footerContacts = document.getElementById("footer-contacts");
    if (footerContacts) {
        footerContacts.innerHTML = `
            <h3>${name}</h3>
            ${address ? `<p><strong>Địa chỉ:</strong> ${address}</p>` : ""}
            ${hotline ? `<p><strong>Hotline:</strong> ${hotline}</p>` : ""}
            ${email   ? `<p><strong>Email:</strong> ${email}</p>`   : ""}
        `;
    }

    // Cột phải: biên tập + phó + giấy phép
    const footerInfo = document.getElementById("footer-info");
    if (footerInfo) {
        footerInfo.innerHTML = `
            ${editor  ? `<p><strong>Tổng biên tập:</strong> ${editor}</p>`       : ""}
            ${deputy  ? `<p><strong>Phó tổng biên tập:</strong> ${deputy}</p>`   : ""}
            ${license ? `<p>${license}</p>`                                       : ""}
        `;
    }
}
  function renderFooterMenu(menu) {

    const container = document.querySelector("#footer-menu");

    container.innerHTML = menu.map(item => `
        <div class="hot-topic-item">
            <span class="topic-text">${item}</span>
        </div>
    `).join("");
}

// =========================
// MOBILE FEATURED CARDS
// =========================

function renderMobileFeaturedCards(featured, rightNews) {

    const container = document.getElementById("mobile-featured-cards");
    if (!container) return;

    // Gộp featuredNews + rightNews thành danh sách card lớn
    const cards = [featured, ...rightNews];

    container.innerHTML = cards.map(news => `
        <div class="mobile-featured-card">

            <h2 class="mfc-title">
                ${news.title}
            </h2>

            <p class="mfc-desc">
                ${news.description || ""}
            </p>

            <img src="${news.image}" alt="${news.title}">

            <div class="mfc-meta">
                <span class="news-topic">${news.category}</span>
                <span class="mfc-share">
                    <img src="assets/icons/facebook_icon.svg"
                         alt="Chia sẻ"
                         style="width:14px;height:14px;">
                    Chia sẻ
                </span>
            </div>

        </div>
    `).join("");
}

// =========================
// LOAD MORE
// =========================

function setupLoadMore() {

    const button =
        document.getElementById("load-more");

    button.addEventListener("click", () => {

        // Hiển thị spinner
        button.disabled = true;
        button.innerHTML = '<span class="spinner"></span>';

        setTimeout(() => {

            currentPage++;
            renderArticles();

            // Khôi phục nút
            button.disabled = false;
            button.innerHTML = 'Xem thêm <img src="assets/icons/arrow_down_icon.svg" alt="Arrow Down Icon">';

        }, 600);
    });
}

function setupMegaMenu(){

    const menuBtn =
        document.getElementById("menu-toggle");

    const megaMenu =
        document.getElementById("mega-menu");

    const menuIcon =
        document.getElementById("menu-icon-img");

    menuBtn.addEventListener("click", () => {

        megaMenu.classList.toggle("show");

        if(megaMenu.classList.contains("show")){

            menuIcon.src =
                "assets/icons/close_icon.svg";

        }else{

            menuIcon.src =
                "assets/icons/menu_icon.svg";

        }

    });

}
// =========================
// MOBILE BOTTOM NAV
// =========================

function setupMobileNav() {
    const items = document.querySelectorAll(".mobile-nav-item");
    items.forEach(item => {
        item.addEventListener("click", () => {
            items.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        });
    });
}

// =========================
// INIT
// =========================

fetch("./db.json")
    .then(response => response.json())
    .then(data => {

        renderHashtags(data.hashtags);

        renderHeaderMenu(data.topMenu);

        renderMegaMenu(
                data.megaMenu,
                data.megaMenuBottom
                 );

        renderLeftNews(data.leftNews);

        renderFeaturedNews(data.featuredNews);

        renderRightNews(data.rightNews);

        renderMobileFeaturedCards(
            data.featuredNews,
            data.rightNews
        );

        allArticles = data.articles;

        renderArticles();

        renderSidebar(data.sidebar.banners);

        renderFooter(data.footer);

        renderFooterMenu(data.bottomMenu);

        setupMobileNav();

        setupMegaMenu();

        setupLoadMore();

    })
    .catch(error => {

        console.error(
            "Lỗi khi tải db.json:",
            error
        );

    });