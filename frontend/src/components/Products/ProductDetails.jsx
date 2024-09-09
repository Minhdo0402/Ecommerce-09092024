import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../../styles/styles";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { backend_url, server } from "../../server";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import { toast } from "react-toastify";
import { addTocart } from "../../redux/actions/cart";
import Ratings from "./Ratings";
import axios from "axios";

const ProductDetails = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { seller } = useSelector((state) => state.seller);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(data && data?.shop._id));
    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [dispatch, data, wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };

  //console.log(products);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const averageRating = totalRatings / totalReviewsLength || 0;

  const handleMessageSubmit = async () => {
    if (isAuthenticated) {
      const groupTitle = data._id + user._id;
      const userId = user._id;
      const sellerId = data.shop._id;
      await axios
        .post(`${server}/conversation/create-new-conversation`, {
          groupTitle,
          userId,
          sellerId,
        })
        .then((res) => {
          navigate(`/conversation/${res.data.conversation._id}`);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } else {
      toast.error("Please login to create a conversation");
    }
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex 800px:space-x-5">
              <div className="w-full 800px:w-[50%] mt-3 flex flex-col items-center">
                {/* Large Image */}
                <div className="w-full">
                  <img
                    src={`${backend_url}${data && data.images[select]}`}
                    alt=""
                    className="h-[550px] w-full object-cover rounded-lg"
                  />
                </div>

                {/* Small Images */}
                <div className="w-full flex space-x-3 mt-3 justify-center">
                  {data.images &&
                    data.images.map((image, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer border-2 ${
                          select === index
                            ? "border-gray-300"
                            : "border-transparent"
                        } rounded-lg`}
                      >
                        <img
                          src={`${backend_url}${image}`}
                          alt=""
                          className="h-[80px] w-[80px] object-cover rounded-lg"
                          onClick={() => setSelect(index)}
                        />
                      </div>
                    ))}
                </div>
              </div>

              <div className="w-full 800px:w-[50%] pt-5 800px:pt-0">
                <h1 className={`${styles.productTitle} text-2xl font-bold`}>
                  {data.name}
                </h1>
                <p className="text-gray-700 mt-3">{data.description}</p>
                <div className="flex items-center mt-5">
                  <h4
                    className={`${styles.productDiscountPrice} text-xl font-semibold text-teal-500`}
                  >
                    ${data.discountPrice}
                  </h4>
                  <h3
                    className={`${styles.price} text-gray-500 line-through ml-3`}
                  >
                    {data.originalPrice ? `$${data.originalPrice}` : null}
                  </h3>
                </div>

                <div className="flex items-center mt-10 space-x-3">
                  <div className="flex items-center">
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold px-4 py-2 rounded-l shadow-lg hover:opacity-75 transition duration-300"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold px-4 py-2 rounded-r shadow-lg hover:opacity-75 transition duration-300"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        color="red"
                        title="Remove from wishlist"
                        onClick={() => removeFromWishlistHandler(data)}
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        color="#333"
                        title="Add to wishlist"
                        onClick={() => addToWishlistHandler(data)}
                      />
                    )}
                  </div>
                </div>

                <div
                  className={`${styles.button} mt-8 flex items-center justify-center bg-gradient-to-r from-teal-400 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-75 transition duration-300 cursor-pointer h-12`}
                  onClick={() => addToCartHandler(data._id)}
                >
                  <AiOutlineShoppingCart className="mr-2" />
                  Add to cart
                </div>

                <div className="flex items-center pt-8">
                  <Link to={`/shop/preview/${data?.shop._id}`}>
                    <img
                      src={`${backend_url}${seller?.avatar}`}
                      alt="Shop Avatar"
                      className="w-[50px] h-[50px] rounded-full mr-4"
                    />
                  </Link>
                  <div className="pr-8">
                    <Link to={`/shop/preview/${data?.shop._id}`}>
                      <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                        {data.shop.name}
                      </h3>
                    </Link>
                    <h5 className="pb-3 text-[15px]">
                      {" "}
                      ({averageRating}/5) Ratings
                    </h5>
                  </div>
                  <div
                    className={`${styles.button} bg-[#6443d1] text-white ml-auto px-4 py-2 rounded-lg shadow-md flex items-center gap-2 hover:bg-[#5332a2] transition duration-300 cursor-pointer`}
                    onClick={handleMessageSubmit}
                  >
                    <AiOutlineMessage className="text-lg" />
                    <span className="text-sm font-medium">Send Message</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo
            data={data}
            products={products}
            totalReviewsLength={totalReviewsLength}
            averageRating={averageRating}
          />
        </div>
      ) : (
        <p className="text-center py-10">Loading product details...</p>
      )}
    </div>
  );
};

const ProductDetailsInfo = ({
  data,
  products,
  totalReviewsLength,
  averageRating,
}) => {
  const [active, setActive] = useState(1);
  const { user } = useSelector((state) => state.user);
  const { seller } = useSelector((state) => state.seller);

  const fileUrl =
    user && user.avatar && user.avatar.url
      ? `${backend_url}${user.avatar.url.replace(/^\/uploads\//, "")}`
      : "";

  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            {data.description}
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
          {data &&
            data.reviews.map((item, index) => (
              <div className="w-full flex my-2">
                <img
                  src={fileUrl}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="pl-2 ">
                  <div className="w-full flex items-center">
                    <h1 className="font-[500] mr-3">{item.user.name}</h1>
                    <Ratings rating={data?.ratings} />
                  </div>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))}

          <div className="w-full flex justify-center">
            {data && data.reviews.length === 0 && (
              <h5>No Reviews have for this product!</h5>
            )}
          </div>
        </div>
      ) : null}

      {active === 3 && (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <Link to={`/shop/${data.shop._id}`}>
              <div className="flex items-center">
                <img
                  src={`${backend_url}${seller?.avatar}`}
                  className="w-[50px] h-[50px] rounded-full"
                  alt=""
                />
                <div className="pl-3">
                  <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                  <h5 className="pb-2 text-[15px]">
                    ({averageRating}/5) Ratings
                  </h5>
                </div>
              </div>
            </Link>
            <p className="pt-2">{data.shop.description}</p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined on:{" "}
                <span className="font-[500]">
                  {data.shop?.createdAt?.slice(0, 10)}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products:{" "}
                <span className="font-[500]">
                  {products && products?.length}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews:{" "}
                <span className="font-[500]">{totalReviewsLength}</span>
              </h5>
              <Link to="/">
                <div
                  className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                >
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
