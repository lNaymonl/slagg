import fs from 'fs';
import { generateKeyPairSync } from 'crypto';
import path from 'path';

const privateKeyPath = path.resolve(__dirname, 'private.pem');
const publicKeyPath = path.resolve(__dirname, 'public.pem');

function checkFileExists(filePath: string): boolean {
    try {
        fs.accessSync(filePath);
        return true;
    } catch {
        return false;
    }
}

function ensureKeyFilesExist(): void {
    try {
        const privateKeyExists = checkFileExists(privateKeyPath);
        const publicKeyExists = checkFileExists(publicKeyPath);

        if (privateKeyExists && publicKeyExists) {
            return;
        }

        console.log('Key files missing. Generating new RSA key pair...');
        const { publicKey, privateKey } = generateKeyPairSync('rsa', {
            modulusLength: 4096,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            },
        });

        fs.writeFileSync(privateKeyPath, privateKey);
        fs.writeFileSync(publicKeyPath, publicKey);

    } catch (error) {
        console.error('Error while checking or generating key files:', error);
    }
}

export function getPrivateKey() : string {
    ensureKeyFilesExist();
    const buffer = fs.readFileSync(privateKeyPath);
    return buffer.toString();
}
   

export function getPublicKey() : string {
    ensureKeyFilesExist();
    const buffer = fs.readFileSync(publicKeyPath);
    return buffer.toString();
}