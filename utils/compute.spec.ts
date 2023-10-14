import {BACALHAU_TIMEOUT, compute, computeDemo} from './compute';
import {jest} from "@jest/globals";

// jest.mock('axios');

export async function isCid(cidStr:string){
    const {CID} = await import('multiformats')

    let cid;
    try {
        cid = CID.parse(cidStr);
        console.log("The string is a CID.");
    }catch (e) {
        console.log("The string is not a CID.");
        console.error({isCid: e})
    }
    return !!cid
}
describe('compute()', () => {
    it('should return a valid IPFS CID', async () => {
        const train_script = 'linear-regression.ipynb';
        const cid = 'Qme1HnwLHVzRxra7mT5gRkG7WbyE4FhnGFn9inETSj33Hw';

        // const {isCid} = await import('./cid')

        const result = await compute(train_script, cid);

        // expect(result).toBe(cid);
        expect(await isCid(result)).toBe(true)
    },BACALHAU_TIMEOUT);
});

describe('computeDemo()', () => {
    it('should return a valid IPFS CID', async () => {
        const train_script = 'linear-regression.ipynb';
        const input_archive = '/app/samples/sample_v3/sample_v3.zip';


        const result = await computeDemo(train_script, input_archive);

        // expect(result).toBe('QmYw4384z3x26j165x9968n65362y53689h53487987');
        expect(await isCid(result)).toBe(true)

    },BACALHAU_TIMEOUT);
});
