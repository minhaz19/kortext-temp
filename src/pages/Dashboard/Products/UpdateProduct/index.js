import React from "react";
import OnlyChildProduct from "./OnlyChildProduct";
import toast, { Toaster } from "react-hot-toast";
import getSpecificProductService from "../../../../services/product/getSpecificProductService";
import { withRouter } from "react-router-dom";
import ParentProduct from "./ParentProduct";
const UpdateProduct = ({match}) => {
  const [data, setData] = React.useState({ loading: true, error: "", product: null });
  React.useEffect(() => {
    const loading = toast.loading("Loading..Please wait");
    getSpecificProductService(match.params?.productId)
      .then((res) => {
        //console.log(res.data);
        toast.dismiss(loading);
        setData({ ...data, product: res.data?.product, loading: false});
      })
      .catch((e) => {
        toast.dismiss(loading);
        toast.error("Unable to fetch the product info...", { duration: 5000 });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="ml-5 mt-5 h-full mb-20">
      <Toaster />
      {
         !data.loading
         &&
         (
             <>
                 {
                     !data?.product
                     ?
                     "Nothing to show here"
                     :
                     (
                         <React.Fragment>
                             {
                                 data.product.parentId
                                 ?
                                 <OnlyChildProduct info={data.product}/>
                                 :
                                 <ParentProduct product={data.product}/>
                             }
                             </React.Fragment>
                     )
                 }
             </>
         )
      }
    </div>
  );
};

export default withRouter(UpdateProduct);
