import { betterAuth } from "better-auth";
import { admin, haveIBeenPwned, oneTimeToken } from "better-auth/plugins"
import { passkey } from "better-auth/plugins/passkey"
import Database from "better-sqlite3";

import { BETTER_AUTH_SECRET, BETTER_AUTH_URL } from "$env/static/private";
import { BLOXDB_ADMIN_EMAIL, BLOXDB_ADMIN_PASSWORD, BLOXDB_ADMIN_USER } from "$env/static/private";
import { createAuthClient } from "better-auth/client";

/*

    Get all required env variables

*/

function assert(condition: any, msg?: string):  asserts condition {
  if (!condition) {
   throw new Error(msg);
  }
}

assert(BETTER_AUTH_SECRET != null, 'Better Auth Secret not defined!')
assert(BETTER_AUTH_URL != null, 'Better Auth url not defined!')

assert(BLOXDB_ADMIN_EMAIL != null, 'Admin Email not defined!')
assert(BLOXDB_ADMIN_PASSWORD != null, 'Admin Password not defined!')
assert(BLOXDB_ADMIN_USER != null, 'Admin User not defined!')

export const auth = betterAuth({
    secret : BETTER_AUTH_SECRET,
    emailAndPassword: {
        enabled: true
    },
    plugins: [
        admin(),
        passkey(),
    ],
    database: new Database("./sqlite.db"),
})
