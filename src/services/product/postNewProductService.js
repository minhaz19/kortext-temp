import getAuthKey from "../getAuthKey";
import postRequest from "../requests/postRequest";

const postNewProductService = (props) =>
  new Promise((resolve, reject) => {
    const token = getAuthKey();
    const { productName, productPrice, productDescription, hasVariant, productImage, categories } = props;
    let variantImage = [];
    let variantPrice = [];
    let variantName = [];
    let variantDescription = [];
    props.subProducts.forEach((obj) => {
      variantPrice.push(Math.abs(+obj.price) + "");
      variantName.push(obj.name || "");
      variantImage.push(obj.image);
      variantDescription.push(obj.isVarientDes ?  obj.description : "");
    })
    const data = {
      hasVariant,
      productName,
      productPrice: Math.abs(+productPrice) + "",
      productImage,
      productDescription,
      variantImage,
      variantName,
      variantPrice,
      variantDescription,
      categories: categories || []
    };
    console.log(data);
    postRequest(`/v1/product`, data, {
      headers: {
        "auth-token": token
      }
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export default postNewProductService;
