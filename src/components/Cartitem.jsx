import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import useCart from '../hooks/useCart';

const ICON_CLASS = 'transition-all cursor-pointer hover:text-brand hover:scale-105';

export default function Cartitem({
    product,
    product: { id, image, title, option, quantitiy, price },
}) {
    const { addOrUpdateItem, removeItem } = useCart();
    const handleMinus = () => {
        if (quantitiy < 2) return;
        addOrUpdateItem.mutate({ ...product, quantitiy: quantitiy - 1 });
    };
    const handlePlus = () =>
        addOrUpdateItem.mutate({ ...product, quantitiy: quantitiy + 1 });
    const handleDelete = () => removeItem.mutate(id);

    return (
        <li className='flex justify-between my2 items-center'>
            <img className='w-24 md:w-48 rounded-lg' src={image} alt={title} />
            <div className='flex-1 flex justify-between ml-4'>
                <div className='basis-3/5'>
                    <p className=' text-lg'>{title}</p>
                    <p className='text-xl font-bold text-brand'>{option}</p>
                    <p>￦{price}</p>
                </div>
                <div className='text-2xl flex items-center'>
                    <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
                    <span>{quantitiy}</span>
                    <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
                    <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
                </div>
            </div>
        </li>
    );
}
