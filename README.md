# Tenzro Node SDK
Tenzro Node SDK is a TypeScript library designed for creating and managing intelligent Digital Assets. It provides high-level methods to interface with Tenzro's framework for integrating AI with blockchain-based content.

## Features
Create and manage Digital Asset metadata
Generate contextual descriptions for content tied to Digital Assets using AI
Interface with Tenzro's AI framework
Installation
To install the Tenzro Node.js SDK, use npm:

```bash
npm install @tenzro/tenzro-sdk
```

## Configuration
Create a .env file in the root directory of your project and add the following environment variables:

```bash
TENZRO_API_BASE_URL=https://sdk.tenzro.com
TENZRO_API_KEY=your-api-key
```

## Usage
### Example
Here's a basic example of how to use the Tenzro Node.js SDK:

```bash
import { createNFT, generateContext, getAllNFTs, getNFTByVid } from 'tenzro-sdk-nodejs';
import { NFTMetadata } from 'tenzro-sdk-nodejs/dist/interfaces/nft';

async function testSDK() {
  try {
    // Test createNFT
    const nftData: NFTMetadata = {
      name: 'Image name',
      description: 'Image description',
      image: 'https://your-image-url.com/image.jpg',
      metadata: {
        property: 'trait',
      },
    };

    const createResponse = await createNFT(nftData);
    console.log('NFT Created:', createResponse);

    // Test generateContext
    const contextResponse = await generateContext({
      imageUrl: nftData.image,
      vid: createResponse.vid,
    });
    console.log('Context Generated:', contextResponse);

    // Test getAllNFTs
    const allNFTs = await getAllNFTs();
    console.log('All NFTs:', allNFTs);

    // Test getNFTByVid
    const singleNFT = await getNFTByVid(createResponse.vid);
    console.log('Single NFT:', singleNFT);
  } catch (error) {
    console.error('Error:', error);
  }
}

testSDK();
```

## API Methods
`createNFT(data: NFTMetadata): Promise<CreateNFTResponse>`
Creates a new NFT with the given metadata.

- Parameters:
  - `data`: An object containing the NFT metadata.
- Returns: A promise that resolves to the response of the NFT creation.
`generateContext(data: { imageUrl: string; vid: string }): Promise<GenerateContextResponse>`
Generates a contextual description for an image tied to an NFT.

- Parameters:
  - `data`: An object containing the image URL and the VID of the NFT.
- Returns: A promise that resolves to the response of the context generation.
`getAllNFTs(): Promise<NFT[]>`
Fetches all NFTs.

- Returns: A promise that resolves to an array of NFTs.
`getNFTByVid(vid: string): Promise<NFT>`
Fetches a single NFT by its VID.

- Parameters:
  - `vid`: The VID of the NFT.
- Returns: A promise that resolves to the NFT.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the Apache-2.0 License - see the LICENSE file for details.

Copyright
Copyright 2024 Tenzro
