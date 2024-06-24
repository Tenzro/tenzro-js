import { createNFT, generateContext, getAllNFTs, getNFTByVid } from '../tenzro-sdk';
import { NFTMetadata } from '../interfaces/nft';

async function testSDK() {
  try {
    // Test createNFT
    const nftData: NFTMetadata = {
      name: 'Luxury Home Design',
      description: 'Luxury home design on a budget',
      image: 'https://media.designcafe.com/wp-content/uploads/2022/07/15170350/luxury-home-design-on-budget.jpg',
      metadata: {
        style: 'Modern',
        budget: 'Affordable',
        location: 'Urban',
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
    // const allNFTs = await getAllNFTs();
    // console.log('All NFTs:', allNFTs);

    // Test getNFTByVid
    const singleNFT = await getNFTByVid(createResponse.vid);
    console.log('Single NFT:', singleNFT);
  } catch (error) {
    console.error('Error:', error);
  }
}

testSDK();
