import express from 'express';
import { renderToString } from 'vue/server-renderer';
import { createApp } from './app.js';

const server = express();

server.get('/', (req, res) => {
    const app = createApp();

    renderToString(app).then((html) => {
        res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        </script>
        <script type="module" src="/client.js"></script>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `);
    });
});




// server.use(express.static('client.js'));
server.use(express.static('.'));

// server.use('app.js', (req, res, next) => {
//     res.status(404).send('Not Found');
// });
// Serve static files from the root directory (except ssr.js)
// server.use(express.static('.', {
//     setHeaders: (res, path) => {
//         if (path.endsWith('app.js')) {
//             // Prevent serving ssr.js
//             res.status(404).end('Not Found');
//         }
//     }
// }));
server.listen(3000, () => {
    console.log('ready');
});
