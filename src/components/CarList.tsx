import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../store/slice/AddCartSlice';
import {
    selectCarList
} from '../store/slice/CarListSlice';
import Button from './Button';

type Props = {}

const CarList = (props: Props) => {
    const dispatch = useDispatch();
    const carList = useSelector(selectCarList)

    const addToCart = (cart: any) => {
        dispatch(ADD_TO_CART(cart));
    };

    return (
        <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {carList.length > 0 && carList.map((car: any, index: number) => {
                return (
                    <li key={car.sys?.id} className="flex py-6 sm:py-10">
                        <div className="flex-shrink-0">
                            <img
                                src={car.fields?.photo}
                                alt={car.fields?.title}
                                className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                            />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                <div>
                                    <div className="flex justify-between">
                                        <h3 className="text-sm">
                                            <Link to="#" className="font-medium text-gray-700 hover:text-gray-800">
                                                {car.fields?.title}
                                            </Link>
                                        </h3>
                                    </div>
                                    <p className="mt-1 text-sm font-medium text-gray-900">{car.fields?.price} THB/day</p>
                                </div>
                            </div>

                        </div>
                        <Button>
                            <span onClick={() => addToCart(car)} >
                                Add to cart
                            </span>
                        </Button>
                    </li>
                )
            }
            )}
        </ul>
    )
}

export default CarList