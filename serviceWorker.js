const CACHE_NAME = "v1_cache_vue_counter";
const cachedUrls = [
	"./",
	"./img/favicon.png",
	"./img/chart_number_icon_32.png",
	"./img/chart_number_icon_64.png",
	"./img/chart_number_icon_128.png",
	"./img/chart_number_icon_256.png",
	"./img/chart_number_icon_512.png",
	"./img/chart_number_icon_1024.png",
	"./js/app.js",
	"./css/styles.css",
	"https://unpkg.com/vue@next",
	"./css/normalize.css",
];

const installServiceWorker = () => {
	self.addEventListener("install", (event) => {
		event.waitUntil(
			caches.open(CACHE_NAME).then((cache) =>
				cache
					.addAll(cachedUrls)
					.then(() => self.skipWaiting())
					.catch((error) => console.log(error))
			)
		);
	});
};

const activate = () => {
	self.addEventListener("activate", (event) => {
		const cacheWhiteList = [CACHE_NAME];
		event.waitUntil(
            caches.keys()
            .then( cacheNames => {
                return Promise.all(
                    cacheNames.map((name) => {
                        if (cacheWhiteList.indexOf(name) === -1) {
                            return caches.delete(name);
                        }
                    })
                );
            })
            .then( () => self.clients.claim() )
            .catch((error) => console.log(error))
        );
	});
};

const fetchServiceWorker = () => {
	self.addEventListener("fetch", (event) => {
		event.respondWith(
			caches
				.match(event.request)
				.then((res) => {
					if (res) return res;
					return fetch(event.request);
				})
				.catch((error) => console.log(error))
		);
	});
};

installServiceWorker();
activate();
fetchServiceWorker();
