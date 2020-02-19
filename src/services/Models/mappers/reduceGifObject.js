export default ({ title, images }) => {
  const {
    fixed_height_downsampled: { webp: downsampledUrl },
    original: { url },
  } = images;

  return {
    downsampledUrl,
    title,
    url,
  };
};
