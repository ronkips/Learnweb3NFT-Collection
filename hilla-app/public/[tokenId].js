export default function handler(req, res) {
  //get the tokenId from the query params
  const tokenId = req.query.tokenId;
  // as all the image are uploaded in github we can extract the images fron the github directly
  const image_url =
    "https://raw.githubusercontent.com/Learnweb3NFT-collection/main/hilla-app/public/cryptodevs/cryptodevs";
  res.status(200).json({
    name: "Crypto Dev #" + tokenId,
    description: "Crypto Dev is a collection of developers in crypto",
    image: image_url + tokenId + ".svg"
  });
}
