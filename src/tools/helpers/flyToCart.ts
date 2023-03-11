type Obj = {
    duration?: number
    position?: string
}

const flyToCart = (itemSelector: string, cartSelector: string, options = {} as  Obj) => {

    const { duration = 1500, position = "fixed" } = options;

    const element = document.querySelector(itemSelector) as HTMLDivElement
    const cart = document.querySelector(cartSelector) as HTMLDivElement

    const elementClone = element.cloneNode(true) as HTMLElement
    const cloneStyle = elementClone.style;

    const coords = element.getBoundingClientRect();
    // const coords: DOMRect = element.getBoundingClientRect("modal-content-wrapper");

    element.parentElement!.append(elementClone);
    
    const makePixeled = (value: number) => `${value}px`;


    const size = elementClone.offsetWidth / 1.5 + 'px'

    cloneStyle.transition = `${duration}ms`;

    cloneStyle.position = position;

    cloneStyle.top = makePixeled(coords.y);

    cloneStyle.left = makePixeled(coords.x);



    cloneStyle.top = makePixeled(
        (cart.getBoundingClientRect().top - 30) + cart.offsetHeight / 2 - element.offsetHeight / 2
    );

    cloneStyle.left = makePixeled(
        cart.offsetLeft + cart.offsetWidth / 2 - element.offsetWidth / 2
    );

    cloneStyle.transform = "scale(0.05)";

    setTimeout(() => {
        elementClone.remove();
    }, duration);
};

export default flyToCart