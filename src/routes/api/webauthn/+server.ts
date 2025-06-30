import {error, json, type RequestHandler} from '@sveltejs/kit'


export const POST: RequestHandler = async ({cookies,url}) => {

    const nickname = String(url.searchParams.get('nickname'))

    return json({})
}