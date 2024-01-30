useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products...");
        await actions.getAllProducts();
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  
  useEffect(() => {
    const fetchProductsID = async () => {
      try {
        console.log("Fetching products by user...");
        await actions.getProductsByUser();
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }; // Agrega esta llave de cierre
  
    fetchProductsID(); // Llama a la función aquí
  
  }, []);