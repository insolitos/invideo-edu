// Service Worker para InVideo Edu PWA
const CACHE_NAME = 'invideo-edu-v1.0.0';
const urlsToCache = [
    './',
    './index.html',
    './styles/main.css',
    './js/app.js',
    './js/data.js',
    './manifest.json',
    './assets/icons/192.png',
    './assets/icons/512.png'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
    console.log('Service Worker: Instalando...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Cache aberto');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('Service Worker: Todos os arquivos cached');
                return self.skipWaiting();
            })
    );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Ativando...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Removendo cache antigo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('Service Worker: Ativado');
            return self.clients.claim();
        })
    );
});

// Interceptação de requests (estratégia Cache First)
self.addEventListener('fetch', (event) => {
    // Só interceptar requests GET
    if (event.request.method !== 'GET') return;

    // Ignorar requests para APIs externas
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - retornar resposta do cache
                if (response) {
                    console.log('Service Worker: Servindo do cache:', event.request.url);
                    return response;
                }

                // Cache miss - fazer fetch e cachear
                return fetch(event.request)
                    .then((response) => {
                        // Verificar se recebemos uma resposta válida
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clonar a resposta
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                console.log('Service Worker: Cacheando nova resposta:', event.request.url);
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch(() => {
                        // Fallback para páginas offline
                        if (event.request.destination === 'document') {
                            return caches.match('./index.html');
                        }
                    });
            })
    );
});

// Handling de mensagens do cliente
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_NAME });
    }
});

// Background sync para futuras funcionalidades
self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync') {
        console.log('Service Worker: Background sync executado');
        // Aqui poderia sincronizar dados offline
    }
});

// Push notifications (para futuras funcionalidades)
self.addEventListener('push', (event) => {
    console.log('Service Worker: Push recebido');

    const options = {
        body: event.data ? event.data.text() : 'Nova atualização disponível!',
        icon: './assets/icons/192.png',
        badge: './assets/icons/192.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '1'
        },
        actions: [
            {
                action: 'explore',
                title: 'Ver',
                icon: './assets/icons/192.png'
            },
            {
                action: 'close',
                title: 'Fechar',
                icon: './assets/icons/192.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('InVideo Edu', options)
    );
});

// Click nas notificações
self.addEventListener('notificationclick', (event) => {
    console.log('Service Worker: Notification click received.');

    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('./')
        );
    }
});