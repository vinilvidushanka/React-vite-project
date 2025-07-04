import {useEffect} from "react";
import {Product} from "../../common/Product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {getAllProducts} from "../../../slices/productsSlice.ts";

export function Home() {

    const dispatch = useDispatch<AppDispatch>();
    const {list} = useSelector((state: RootState) => state.products);


    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <div>
            <div className="flex flex-wrap ml-[1px] mt-5 mb-5 mx-auto justify-center  items-center">
                {/*<div className="w-auto h-auto bg-blue-400 mr-2 mb-2 p-4 flex justify-center items-center rounded-xl shadow-transition-transform duration-200 hover:scale-105">
                    <div>
                        <img className="h-[120px] w-[120px] rounded-xl"  src={product1}/>
                        <div className="text-center">
                            <p className="text-sm font-semibold text-white">Gold Ultra</p>
                            <p className="text-xs text-white mb-2">$19.99</p>
                            <button className="bg-white font-bold text-blue-500 text-xs px-3 py-1 rounded-full hover:bg-blue-950 hover:text-white transition cursor-pointer">
                                Add to Cart
                            </button>
                        </div>
                    </div>

                </div>*/}

                {
                    list.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }

            </div>
        </div>
    );
}