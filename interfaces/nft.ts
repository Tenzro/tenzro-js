export interface NFTMetadata {
    name: string;
    description: string;
    image: string;
    metadata: Record<string, any>;
  }
  
  export interface NFT extends NFTMetadata {
    id: string;
    vid: string;
    context?: string;
  }
  
  export interface GenerateContextResponse {
    message: string;
    context: string;
  }
  
  export interface CreateNFTResponse {
    message: string;
    vid: string;
  }
  