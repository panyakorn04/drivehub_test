import React, { useEffect } from 'react';


interface FilterItem {
    carList: any,
    sort: string,
};

export const useFilterItem = ({ carList, sort }: FilterItem) => {
    const [filterData, setFilterData] = React.useState([]);

    useEffect(() => {
        let filterItems = null;
        switch (sort) {
            case "lowest-price":
                filterItems = carList.filter((item: any) => item.fields.price).sort((a: any, b: any) => a.fields.price - b.fields.price);
                break;
            case "highest-price":
                filterItems = carList.filter((item: any) => item.fields.price).sort((a: any, b: any) => b.fields.price - a.fields.price);
                break;
            case "a-z":
                filterItems = carList.filter((item: any) => item.fields.title).sort((a: any, b: any) => a.fields.title.localeCompare(b.fields.title));
                break;
            case "z-a":
                filterItems = carList.filter((item: any) => item.fields.title).sort((a: any, b: any) => b.fields.title.localeCompare(a.fields.title));
                break;
            default:
                filterItems = carList.filter((item: any) => item.fields);
        }
        setFilterData(filterItems);
    }, [carList, sort]);

    return { filterData, setFilterData };
}

