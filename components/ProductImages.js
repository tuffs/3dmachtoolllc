import Lightbox from '@/components/Lightbox';

export default function ProductImages({ images, productName }) {
  const firstImage = images && images.length > 0 ? images[0] : null
  const remainingImages = images ? images.slice(1) : []

  return (
    <>
      {firstImage && (
        <img
          src={firstImage || "/placeholder.svg"}
          alt={`${productName} - Main Image`}
          className="w-full h-96 object-cover rounded-lg mb-4"
        />
      )}

      {remainingImages.length > 0 && (
        <div className="mb-6">
          <Lightbox images={[firstImage, ...remainingImages]} />
        </div>
      )}
    </>
  );
}