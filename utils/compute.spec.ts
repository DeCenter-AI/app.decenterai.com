import {BACALHAU_TIMEOUT, compute, computeDemo} from './compute';
import {jest} from "@jest/globals";
import {isCid} from "./cid";

// jest.mock('axios');

describe('compute()', () => {
    it('should return a valid IPFS CID', async () => {
        const train_script = 'linear-regression.ipynb';
        const cid = 'Qme1HnwLHVzRxra7mT5gRkG7WbyE4FhnGFn9inETSj33Hw';

        const result = await compute(train_script, cid);

        expect(await isCid(result)).toBe(true)
    },BACALHAU_TIMEOUT);
});

describe('computeDemo()', () => {
    it('should return a valid IPFS CID', async () => {
        const train_script = 'linear-regression.ipynb';
        const input_archive = '/app/samples/sample_v3/sample_v3.zip';


        const result = await computeDemo(train_script, input_archive);

        expect(await isCid(result)).toBe(true)

    },BACALHAU_TIMEOUT);
});
