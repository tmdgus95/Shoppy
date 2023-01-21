import React from 'react';
import { useState } from 'react';

export default function NewProduct() {
    const [product, setProduct] = useState({});
    const handleSubmit = () => {};
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input type='file' />
            </form>
        </section>
    );
}
