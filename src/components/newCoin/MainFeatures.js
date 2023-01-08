import { forwardRef, useImperativeHandle, useRef } from "react";

const MainFeatures = (_, ref) => {
    const categoryRef = useRef();
    const nameRef = useRef();
    const descRef = useRef();
    const imgRef = useRef();

    useImperativeHandle(ref, () => ({
        getData: () => ({
            category: categoryRef.current.value,
            name: nameRef.current.value,
            description: descRef.current.value,
            photos: imgRef.current.files
        }),
        clearData: () => {
            nameRef.current.value = "";
            descRef.current.value = "";
            imgRef.current.value = "";
        }
    }));

    return (
        <>
            <label htmlFor="category">Category</label>
            <select id="category" ref={categoryRef}>
                <option>Bullion coins</option>
                <option>Exclusive coins</option>
                <option>Commemorative coins</option>
            </select>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" ref={nameRef} required />
            <label htmlFor="desc">Description</label>
            <input
                type="text"
                id="desc"
                placeholder="Description"
                ref={descRef}
                required
            />
            <label>Images</label>
            <input type="file" ref={imgRef} accept="image/*" multiple required />
        </>
    );
};

export default forwardRef(MainFeatures);
