import { CouchDBUrl, CouchDBUser, CouchDBPassword } from "./env";

/*

    Databases

*/

const UserDB = 'users'
const GamesDB = 'games'


const AuthHeaderValue = Buffer.from(CouchDBUser + ':' + CouchDBPassword).toString('base64')
/*

    Utility functions

*/

const GetHeaders = { method: 'GET', headers: new Headers({ 'Authorization': `Basic ${AuthHeaderValue}` }) }
const PutHeaders = { method: 'PUT', headers: new Headers({ 'Authorization': `Basic ${AuthHeaderValue}` }) }

async function DB_GET(url: string) {
    return fetch(CouchDBUrl + url, GetHeaders)
}

async function DB_PUT(url: string) {
    return fetch(CouchDBUrl + url, PutHeaders)
}

async function CreateDBIfNotExists(name: string) {
    const res = await DB_PUT(`/${name}`)
    if (!res.ok) {
        if (res.status == 412) {
            console.info(`[SUCCESS]'${name}' database already exists.`)
            return
        }
        throw new Error(`[ERROR] Couchdb error creating database\n${res.status}:${res.statusText}`)
    }
    console.info(`[SUCCESS] Created ${name} database.`)
}

/*

    Database initialization

*/

// connection check
try {
    const response = await fetch(CouchDBUrl + '/_up', {
        headers: new Headers({
            'Authorization': `Basic ${AuthHeaderValue}`
        })
    });

    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json(); // or response.text() depending on the content
    console.info(`[SUCCESS] Connected to couch db. Response:`);
    console.info(data)
} catch (error) {
    let e = error as Error
    console.error(`[ERROR] Failed to connect to couchdb: \'${e.name}:${e.message}\' \n---\n${e.stack}\n---`);
    process.exit()
}


// database checks
await CreateDBIfNotExists(UserDB)
await CreateDBIfNotExists(GamesDB)
