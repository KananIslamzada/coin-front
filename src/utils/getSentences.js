const getSenteces = (str, number) => {
    const segmenter = new Intl.Segmenter("en", { granularity: "sentence" });
    const sentences = Array.from(segmenter.segment(str), (s) => s.segment);
    return sentences.slice(0, number).join(" ");
};

export default getSenteces;
