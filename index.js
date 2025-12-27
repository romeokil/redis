import client from "./client.js";
import express from 'express'

const app = express();
const PORT = 3001;

app.get('/', async (req, res) => {
    try {
        const cacheValue = await client.get('todos');
        if (cacheValue) return res.status(201).send(JSON.parse(cacheValue));
        console.log('Get request ghus gy...')
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        await client.set('todos', JSON.stringify(data));
        await client.expire('todos',30);
        return res.status(201).json({
            data
        })
    }
    catch (error) {
        console.log('Error while fetching the api ', error);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})
