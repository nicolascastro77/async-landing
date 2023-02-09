const API = 'https://spotify-data.p.rapidapi.com/artist_albums/?id=4q3ewBCX7sLwd24euuV69X&offset=0&limit=100';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c25383553emsh33b873f85a7d175p143be8jsn50dce81fb390',
		'X-RapidAPI-Host': 'spotify-data.p.rapidapi.com'
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
        ${videos.data.artist.discography.albums.items.map(video =>`
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.releases.items[0].coverArt.sources[2].url}" alt="" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.releases.items[0].name}
          </h3>
            <span>${video.releases.items[0].tracks.totalCount}</span>
        </div>
        <div>
        <h3 class="text-sm text-blue-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        Año : ${video.releases.items[0].date.year}
      </h3>
        </div>
      </div>
        `).slice(0,6).join('')}
        `;
        content.innerHTML = view;
    }
    catch (error){
        console.log(error);
    }
})  ();