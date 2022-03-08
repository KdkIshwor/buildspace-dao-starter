import sdk from "./1-initialize-sdk.js";
import { readFileSync } from 'fs';

const bundleDrop = sdk.getBundleDropModule(
    "0x15927035e2182E78E0fF424b70B8595e0c84DCa1",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Crypto Nepal membership",
                description: "This NFT will give you access to CryptoNepalDAO!",
                image: readFileSync("scripts/assets/pass.jpg"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch(error) {
        console.error("failed to create the new NFT", error);
    }
})()