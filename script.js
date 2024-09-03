document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("postForm");
    const postContent = document.getElementById("postContent");
    const postsContainer = document.getElementById("postsContainer");

    // ローカルストレージから投稿を読み込む
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    // 投稿を表示する関数
    const displayPosts = () => {
        postsContainer.innerHTML = "";
        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.textContent = post;
            postsContainer.appendChild(postElement);
        });
    };

    // フォームの送信イベント
    postForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const content = postContent.value.trim();
        if (content) {
            posts.push(content);
            localStorage.setItem("posts", JSON.stringify(posts));
            postContent.value = "";
            displayPosts();
        }
    });

    // 初期表示
    displayPosts();
});
