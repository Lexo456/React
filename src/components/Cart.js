import {useEffect, useState} from 'react'
import '../styles/Cart.css'

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true)
    const items = Object.keys(cart)
    const total = items.reduce(
        (acc, item) => acc + cart[item].amount * cart[item].price,
        0
    )
    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])

    function deleteFromCart(name) {
        let productsAfterRemoval = cart.filter(cart => cart.name !== name);
        updateCart(productsAfterRemoval)
    }

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({name, price, amount}, index) => (
                            <div key={`${name}-${index}`}>
                                <span className={'nameToMaj'}>{name}</span> {price}€ x {amount}
                                <button className={'btn btn-danger btn-sm m-lg-2'}
                                        onClick={() => deleteFromCart(name)}> Supp
                                </button>
                            </div>
                        ))}
                    </ul>
                    <h3>Total : {total}€</h3>
                    <button className={'lmj-cart-toggle-button'} onClick={() => updateCart([])}>Vider le
                        panier
                    </button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart
