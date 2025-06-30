import { WebAuthnRPID, WebAuthnRPName } from "$lib/server/env";

export function GeneratePublicKeyCredentialCreationOptions(username : string, userid : string) {
    return {
        challenge: crypto.getRandomValues(new Uint8Array(64)),
        rp: {
            name: WebAuthnRPName,
            id: WebAuthnRPID,
        },
        user: {
            id: Uint8Array.from(userid, c => c.charCodeAt(0)),
            name: username,
            displayName: userid,
        },
        pubKeyCredParams: [{alg: -7, type: "public-key"}],
        authenticatorSelection: {
            authenticatorAttachment: "cross-platform",
        },
        timeout: 60000,
        attestation: "direct"
    };
}
