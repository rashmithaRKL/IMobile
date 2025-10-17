import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={() => navigate(`/product/${product.id}`)}
      className="glass-card rounded-2xl overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative overflow-hidden bg-muted">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain p-4"
        />
        {product.originalPrice && (
          <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-bold">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}
        {product.condition === 'used' && (
          <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            Used
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-muted-foreground uppercase">{product.brand}</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-2 line-clamp-1">{product.name}</h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
          <Button
            onClick={handleAddToCart}
            className="glow-button"
            size="icon"
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>

        {!product.inStock && (
          <div className="mt-3 text-center text-sm text-destructive font-medium">
            Out of Stock
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
