import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const galleryItems = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  label: `Gallery Image ${i + 1}`,
}));

const GallerySection = () => {
  return (
    <section id="gallery" className="pt-6 pb-8 bg-background">
      <div className="container mx-auto px-">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-1">
            Our Moments
          </p>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">
            Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="aspect-[4/3] rounded-xl bg-muted border border-border flex flex-col items-center justify-center gap-2"
            >
              <ImageIcon className="w-8 h-8 text-muted-foreground/40" />
              <span className="text-xs text-muted-foreground/50">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;