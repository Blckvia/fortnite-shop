function GoodsItem(props) {
    const {
        mainId,
        displayName,
        description,
        price,
        displayAssets,
        addToBasket = Function.prototype,
    } = props;
    return (
        <div className='card'>
            <div className='card-image'>
                <img
                    src={displayAssets[0].full_background}
                    alt={displayName}
                />
            </div>
            <div className='card-content'>
                <span className='card-title'>{displayName}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            mainId,
                            displayName,
                            price,
                        })
                    }
                >
                    Buy
                </button>
                <span className='right'>&#8364; {price.regularPrice}</span>
            </div>
        </div>
    );
}

export default GoodsItem;
