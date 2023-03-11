import { IProductItemGroup } from "../../types/types";

function removeDublicateValues(product: IProductItemGroup) {
    let selectedKey: string[] = [];
    let uniqValue;

    product.sizes.forEach((item) => {
        item.items.forEach((inItem) => selectedKey.push(inItem.option))
    })
    uniqValue = selectedKey.filter((n, i) => selectedKey.indexOf(n) === i)


    return uniqValue
}

export default removeDublicateValues