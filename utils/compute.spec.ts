import {compute, computeDemo} from './compute';
import {jest} from "@jest/globals";
import {isCid} from "./cid.mjs";

jest.mock('axios');

describe('compute()', () => {
    it('should return a valid IPFS CID', async () => {
        const train_script = 'linear-regression.ipynb';
        const cid = 'Qme1HnwLHVzRxra7mT5gRkG7WbyE4FhnGFn9inETSj33Hw';

        const result = await compute(train_script, cid);

        // expect(result).toBe(cid);
        expect(isCid(result)).toBe(true)
    });
});

describe('computeDemo()', () => {
    it('should return a valid IPFS CID', async () => {
        const train_script = 'linear-regression.ipynb';
        const input_archive = '/app/samples/sample_v3/sample_v3.zip';


        const result = await computeDemo(train_script, input_archive);

        // expect(result).toBe('QmYw4384z3x26j165x9968n65362y53689h53487987');
        expect(isCid(result)).toBe(true)

    });
});
