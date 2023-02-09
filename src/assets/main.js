const API = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=59ZoxpkHe1Kvr20X5OLsfZ%3Fsi%3Dcp8MnXSHTgWW5QiU5DgRrg%26pt%3D08de9b268697028af7d59f2bfb6105f7&offset=0&limit=100';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c25383553emsh33b873f85a7d175p143be8jsn50dce81fb390',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

// fetch('', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

async function fetchData (urlApi){
    const response = await fetch(urlApi,options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchData (API);
        let view =   `
        ${videos.tracks.items.map(video =>`
        <a href="${video.track.preview_url} "target="_blank">
        <div class="group relative">

        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.track.album.images[0].url}" alt="" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.track.name}
          </h3>
        </div>
        <div>
        <h3 class="text-sm text-blue-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        Artista : ${video.track.artists[0].name}
      </h3>
        </div>
      </div>
      </a>
        `).slice(0,150).join('')}
        `;
        content.innerHTML = view;
    }
    catch (error){
        console.log(error);
    }
})  ();