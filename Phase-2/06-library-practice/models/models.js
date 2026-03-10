import fs from "fs/promises";

const path = './db/books.json'

async function readDB() {
    const data = await fs.readFile(path, 'utf-8')
    return data.parse
}