import {
  NODE_ENV,
  COUCHDB_URL, COUCHDB_USER, COUCHDB_PASSWORD,
  WEBAUTHN_RPNAME, WEBAUTHN_RPID, WEBAUTHN_ORIGIN,
} from "$env/static/private";

/*

    Get all required env variables

*/

function assert(condition: any, name: string): asserts condition {
  if (!condition) {
    throw new Error(`Missing ${name} in environment variables!`);
    process.exit(-1)
  }
}

assert(NODE_ENV, 'NODE_ENV');
if (NODE_ENV == 'production') {
  assert(WEBAUTHN_RPNAME, 'WEBAUTHN_RPNAME');
  assert(WEBAUTHN_RPID, 'WEBAUTHN_RPID');
  assert(WEBAUTHN_ORIGIN, 'WEBAUTHN_ORIGIN');
}
assert(COUCHDB_URL, 'Missing COUCHDB_URL in environment variables!');
assert(COUCHDB_USER, 'Missing COUCHDB_USER in environment variables !');
assert(COUCHDB_PASSWORD, 'Missing COUCHDB_PASSWORD in environment variables!');

/*

  Exports

*/

export const CouchDBUrl = COUCHDB_URL as string;
export const CouchDBUser = COUCHDB_USER as string;
export const CouchDBPassword = COUCHDB_PASSWORD as string;

export const WebAuthnRPName = (WEBAUTHN_RPNAME ? WEBAUTHN_RPNAME : 'BloxDB');
export const WebAuthnRPID = (WEBAUTHN_RPID ? WEBAUTHN_RPID : 'localhost:5173');
export const WebAuthnOrigin = (WEBAUTHN_ORIGIN ? WEBAUTHN_ORIGIN : `https://${WebAuthnRPID}`);
