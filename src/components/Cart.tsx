import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { TrashIcon } from '@heroicons/react/20/solid'
import { useState } from "react";
import { REMOVE_FROM_CART, DECREASE_CART, INCREASE_CART, selectCart } from '../store/slice/AddCartSlice';
type Props = {}

const Cart = (props: Props) => {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart)
    const [value, setValue] = useState('');

    const onSubmit = () => {
        console.log(value)
    };
    const increaseCart = (product: any) => {
        dispatch(INCREASE_CART(product));
    };

    const decreaseCart = (product: any) => {
        dispatch(DECREASE_CART(product));
    };
    const handleRemove = (product: any) => {
        dispatch(REMOVE_FROM_CART(product))
    }

    return (
        <>
            <div>
                <ul className="divide-y divide-gray-200">
                    {cart?.cart.map((product: any) => (
                        <li data-testid="cart list" key={product.id} className="flex py-6 px-4 sm:px-6">
                            <div className="flex-shrink-0">
                                <img src={product.photo || ""} alt={product.title} className="w-20 rounded-md" />
                            </div>
                            <div className="ml-6 flex flex-1 flex-col">
                                <div className="flex">
                                    <div className="min-w-0 flex-1">
                                        <h4 className="text-sm">
                                            <Link to="#" className="font-medium text-gray-700 hover:text-gray-800">
                                                {product.title}
                                            </Link>
                                        </h4>
                                    </div>
                                    <div className="flow-root flex-shrink-0">
                                        <button
                                            onClick={() => handleRemove(product)}
                                            type="button"
                                            className="-m-2.5 flex items-center justify-center  p-2.5 bg-gray-50 text-gray-400 hover:text-gray-500"
                                        >
                                            <TrashIcon className="h-5 w-5" aria-hidden="true" />
                                            <span className="sr-only">Remove</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between pt-2">
                                    <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                                    <div className="ml-4 flex">
                                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={() => decreaseCart(product)}>
                                            -</button>
                                        <p className="items-center pt-2">
                                            <b className="m-2 p-1">{product?.quantity || 1}</b>
                                        </p>
                                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={() => increaseCart(product)}>
                                            +</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">
                <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
                    <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd className="text-gray-900">{cart.total || "0"}THB</dd>
                    </div>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="discount-code" className="block text-sm font-medium text-gray-700">
                            Discount code
                        </label>
                        <div className="mt-1 flex space-x-4">
                            <input
                                type="text"
                                id="discount-code"
                                name="discount-code"
                                value={value}
                                onChange={(event) => setValue(event.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            <button
                                type="submit"
                                className="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                Apply
                            </button>
                        </div>
                    </form>

                    <div className="flex justify-between">
                        <dt className="flex">
                            Discount
                            <span className="ml-2 rounded-full bg-gray-200 py-0.5 px-2 text-xs tracking-wide text-gray-600">
                                discount.code
                            </span>
                        </dt>
                        <dd className="text-gray-900">-{"0"}THB</dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                        <dt className="text-base">Total</dt>
                        <dd className="text-base">{cart?.grandTotal}THB</dd>
                    </div>
                </dl>
                {/* <div className="mt-10">
                    <Link to="/checkout">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Checkout
                        </button>
                    </Link>
                </div> */}
            </div>
        </>
    )
}

export default Cart