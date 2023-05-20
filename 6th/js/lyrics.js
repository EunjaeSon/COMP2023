const lyrics = [
    {
        lyric: "Can't take my eyes off of you",
        artist:"- Frankie Valli",
    },
    {
        lyric: "There was something special in the air",
        artist:"- Richard Sanderson",
    },
    {
        lyric: "I'll think of you every step of the way",
        artist:"- Whitney Houston",
    },
    {
        lyric: "Maybe I won't find someone as lovely as you",
        artist:"- Sammy Cahn",
    },
    {
        lyric: "LOVE is all that I can give to you",
        artist:"- Nat King Cole",
    },
    {
        lyric: "I can show you morning on a thousand hills and kiss you and give you seven daffodils",
        artist:"- Carol Kidd",
    },
    {
        lyric: "My heart is in a deadlock",
        artist:"- Nat King Cole",
    },
];

const lyric = document.querySelector("#lyric span:first-child");
const artist = document.querySelector("#lyric span:last-child");

const todaysLyrics= lyrics[Math.floor(Math.random()*lyrics.length)];
lyric.innerText = todaysLyrics.lyric;
artist.innerText = todaysLyrics.artist;