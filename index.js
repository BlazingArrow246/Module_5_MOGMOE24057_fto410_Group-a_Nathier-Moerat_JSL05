// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];
songs.push(
    { title: "Middle child", artist: "J Cole", genre: "Rap" },
    { title: "Birds of a feather", artist: "Billie Eilish", genre: "Pop" },
    { title: "Ocean", artist: "Alicid", genre: "Progressive Trance" },
    { title: "Nobody Else", artist: "Dwson", genre: "House" },
    { title: "Streets", artist: "Doja Cat", genre: "Rap" },
  );
  


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
};
    const updatedGuardians = [
        ...guardians,
        { name: "Drax", genre: "Metal" },
        { name: "Rocket", genre: "Electro" },
        { name: "Groot", genre: "Ambient" }
    ];


// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    return Object.keys(guardians).map(guardians => {
        // Get the preferred genre of the current guardian
        const preferredGenre = guardians[genre];
        // Filter songs based on the guardian's preferred genre
        const playlist = songs.filter(song => song.genre === preferredGenre);

        // Return an object for each guardian with their name and their playlist
        return {
            guardian,
            playlist
        };
    });
}

// Generate the playlist for each guardian
const guardianPlaylist = generatePlaylist(guardians, songs);

// Log the playlists
console.log(guardianPlaylist);


// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


