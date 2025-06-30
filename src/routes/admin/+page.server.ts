import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({cookies}) => {
    if (!cookies.get('admin')) {
        throw redirect(303,'/admin/login')
    }
}) satisfies PageServerLoad;