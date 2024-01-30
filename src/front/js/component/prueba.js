export function Info() {
  // ... (resto de tu código)

  const { name, description, price, email, images_urls } = store.productDetails;

  return (
    <Card className="mt-6 w-full max-w-4xl mx-auto">
      <CardHeader color="blue-gray" className="relative h-56 flex justify-center items-center">
        <Carousel 
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {images_urls && images_urls.map((url, index) => (
            <img 
              key={index} 
              src={url} 
              alt={`Imagen del producto ${index + 1}`} 
              className="object-contain max-h-56" // Cambio aquí
            />
          ))}
        </Carousel>
      </CardHeader>
      {/* ... (resto del componente) */}
    </Card>
  );
}
