const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Server del mio blog");
})

const posts = [
    {
        title: "title1",
        content: "content1",
        image: `http://localhost:${port}/images/ciambellone.jpeg`,
        tags: ["tag1", "tag2", "tag3", "tag4"]
    },
    {
        title: "title2",
        content: "content2",
        image: `http://localhost:${port}/images/cracker_barbabietola.jpeg`,
        tags: ["tag1", "tag2", "tag3", "tag4"]
    },
    {
        title: "title3",
        content: "content3",
        image: `http://localhost:${port}/images/pane_fritto_dolce.jpeg`,
        tags: ["tag1", "tag2", "tag3", "tag4"]
    },
    {
        title: "title4",
        content: "content4",
        image: `http://localhost:${port}/images/pasta_barbabietola.jpeg`,
        tags: ["tag1", "tag2", "tag3", "tag4"]
    },
    {
        title: "title5",
        content: "content5",
        image: `http://localhost:${port}/images/torta_paesana.jpeg`,
        tags: ["tag1", "tag2", "tag3", "tag4"]
    },
]

app.get('/api/posts', (req, res) => {
    res.json(posts);
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})