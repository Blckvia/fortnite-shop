function BasketItem(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    console.log(price.regularPrice, props);
    return (
        <li className='collection-item'>
            {displayName}{' '}
            <i
                className='material-icons basket-quantity'
                onClick={() => decQuantity(mainId)}
            >
                remove
            </i>{' '}
            x{quantity}{' '}
            <i
                className='material-icons basket-quantity'
                onClick={() => incQuantity(mainId)}
            >
                add
            </i>{' '}
            = &#8364; {price.regularPrice * quantity}
            <span
                className='secondary-content'
                onClick={() => removeFromBasket(mainId)}
            >
                <div className='cl-btn-4'></div>
            </span>
        </li>
    );
}

export default BasketItem;
