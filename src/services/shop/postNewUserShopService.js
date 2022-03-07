import postRequest from "../requests/postRequest";

const postNewUserShopService = (props, subProducts) =>
  new Promise((resolve, reject) => {
    const possibleOptions = ["delivery", "pickup", "both"];
    const { email, password, slug: shopSlug, productImage, productPrice, productName, hasVariants: hasVariant, shopName, fulfilmentType, deliveryOption, pickupOption } = props;
    const { city: deliveryCityName , fee: deliveryFee, instruction: deliveryDescription} = deliveryOption;
    const {city: pickupCityName , fee: pickupFee, instruction: pickupDescription} = pickupOption;
    let variantImage = [];
    let variantPrice = [];
    let variantName = [];
    subProducts.forEach((obj) => {
      variantPrice.push(obj.price + "");
      variantName.push(obj.name || "");
      variantImage.push(obj.img);
    })
    const data = {
      email,
      password,
      shopSlug,
      shopName,
      shopAddress: "Not Provided",
      hasVariant: hasVariant + "",
      productName,
      productPrice,
      productImage,
      deliveryOption: possibleOptions[fulfilmentType],
      deliveryCityName,
      deliveryDescription,
      deliveryFee: deliveryFee + "",
      pickupCityName,
      pickupFee: pickupFee + "",
      pickupDescription,
      variantImage,
      variantName,
      variantPrice
    };
    postRequest(`/v1/shop`, data, {})
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export default postNewUserShopService;
