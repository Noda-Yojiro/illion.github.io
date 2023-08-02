let likeCounts = {
    1: 0,
    2: 0
};

let favoriteCounts = {
    1: 0,
    2: 0
};

let commentCounts = {
    1: 0,
    2: 0
};

function likeSong(songId) {
    likeCounts[songId]++;
    const likeCountElement = document.getElementById(`like-count-${songId}`);
    likeCountElement.textContent = likeCounts[songId];
}

function favoriteSong(songId) {
    favoriteCounts[songId]++;
    const favoriteCountElement = document.getElementById(`favorite-count-${songId}`);
    favoriteCountElement.textContent = favoriteCounts[songId];
}

function commentSong(songId) {
    commentCounts[songId]++;
    const commentCountElement = document.getElementById(`comment-count-${songId}`);
    commentCountElement.textContent = commentCounts[songId];
}