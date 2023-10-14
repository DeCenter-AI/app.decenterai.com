import {BACALHAU_TIMEOUT, compute, computeDemo} from './compute';
import {isCid} from "./cid";

// jest.mock('axios');

describe('compute()', () => {
    it('should return a valid IPFS CID', async () => {
        const train_script = 'headbrain.ipynb';
        const cid = 'QmRwvooN7Yfa6Gx8aVcf5cV7MAAMHmo5Q5JTt5234jf3qo';

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
