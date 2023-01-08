import classes from "./AdditionalFeatures.module.css";

import { forwardRef, useImperativeHandle, useRef } from "react";

const AdditionalFeatures = (_, ref) => {
    const countryRef = useRef();
    const compositionRef = useRef();
    const qualityRef = useRef();
    const denonimationRef = useRef();
    const yearRef = useRef();
    const weightRef = useRef();
    const priceRef = useRef();

    useImperativeHandle(ref, () => ({
        getData: () => ({
            country: countryRef.current.value,
            composition: compositionRef.current.value,
            quality: qualityRef.current.value,
            denonimation: denonimationRef.current.value,
            year: yearRef.current.value,
            weight: weightRef.current.value,
            price: priceRef.current.value
        }),
        clearData: () => {
            countryRef.current.value = "";
            compositionRef.current.value = "";
            qualityRef.current.value = "";
            denonimationRef.current.value = "";
            yearRef.current.value = "";
            weightRef.current.value = "";
            priceRef.current.value = "";
        }
    }));

    return (
        <>
            <h2>Features</h2>
            <div className={classes.container}>
                <div>
                    <label htmlFor="country">Issuing Country</label>
                    <input
                        type="text"
                        id="country"
                        ref={countryRef}
                        placeholder="Issuing Country"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="composition">Composition</label>
                    <input
                        type="text"
                        id="composition"
                        ref={compositionRef}
                        placeholder="Composition"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="quality">Quality</label>
                    <input
                        type="text"
                        id="quality"
                        ref={qualityRef}
                        placeholder="Quality"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="denomination">Denomination</label>
                    <input
                        type="text"
                        id="denomination"
                        ref={denonimationRef}
                        placeholder="Denomination"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input
                        type="number"
                        id="year"
                        ref={yearRef}
                        placeholder="Year"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <input
                        type="number"
                        id="weight"
                        ref={weightRef}
                        placeholder="Weight"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        ref={priceRef}
                        placeholder="Price"
                        required
                    />
                </div>
            </div>
        </>
    );
};
export default forwardRef(AdditionalFeatures);
