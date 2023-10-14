/*
export function isCid(cidStr:string){
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
*/

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

async function main(){
    const cid = "QmRwvooN7Yfa6Gx8aVcf5cV7MAAMHmo5Q5JTt5234jf3qo";
    let res = await isCid(cid)
    console.log({[cid]: res})

    res = await isCid("hiro")
    console.log({["hiro"]: res})

}

main()
