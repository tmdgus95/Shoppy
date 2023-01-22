import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addOrUpdatedToCart, removeFromCart } from '../api/firebase';
export default function Cartitem({
    product,
    product: { id, image, title, option, quantitiy },
    uid,
}) {
    const handleMinus = () => {
        if (quantitiy < 2) return;
        addOrUpdatedToCart(uid, { ...product, quantitiy: quantitiy - 1 });
    };
    const handlePlus = () =>
        addOrUpdatedToCart(uid, { ...product, quantitiy: quantitiy + 1 });
    const handleDelete = () => removeFromCart(uid, id);

    return (
        <li>
            <img src={image} alt={title} />
            <div>
                <p>{title}</p>
                <p>{option}</p>
                <div>
                    <AiOutlineMinusSquare onClick={handleMinus} />
                    <span>{quantitiy}</span>
                    <AiOutlinePlusSquare onClick={handlePlus} />
                    <RiDeleteBin5Fill onClick={handleDelete} />
                </div>
            </div>
        </li>
    );
}
