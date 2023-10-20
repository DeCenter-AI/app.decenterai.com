import crypto from 'crypto';

export function isCid(cidStr: string): boolean {
    try {
        crypto.createHash('sha256').update(cidStr).digest('hex');
        return true;
    } catch (e) {
        return false;
    }
}

function main(): void {
    const cid = 'Qme1HnwLHVzRxra7mT5gRkG7WbyE4FhnGFn9inETSj33Hw';
    let res = isCid(cid);
    console.log({ [cid]: res });

    res = isCid('hiro');
    console.log({ ['hiro']: res });
}

main();
