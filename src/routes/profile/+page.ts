import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { browser } from '$app/environment';
import * as Account from 'js/booru/Account';

export const load: PageLoad = async ({ params }) => {
  if (browser) {
    const token = Account.token();
    if (token === null) {
      throw redirect(302, '/account/login')
    }
  }
}