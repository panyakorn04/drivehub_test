import { useEffect } from 'react'
import CarList from '../components/CarList';
import Cart from '../components/Cart';
import Layout from '../components/Layout';
import { useDispatch } from 'react-redux'
import { fetchCarList } from '../store/slice/CarListSlice';

type Props = {}

const Drivehub = (props: Props) => {
    const dispatch = useDispatch<any>()

    useEffect(() => {
        dispatch(fetchCarList())
        return () => { }
    }, [dispatch])

    return (
        <Layout>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Drivehub Cart</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="lg:col-span-7">
                            <h2 id="cart-heading" className="sr-only">
                                Items in your Drivehub cart
                            </h2>
                            <CarList />
                        </section>
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                        >
                            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                                Order summary
                            </h2>
                            {/* Order summary */}
                            <Cart />
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Drivehub