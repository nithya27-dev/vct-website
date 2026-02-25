import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  { id: 1, src: "/Gallery5.png", label: "Gallery Image 5" },
  { id: 2, src: "/Gallery7.png", label: "Gallery Image 7" },
  { id: 3, src: "/Gallery1.png", label: "Gallery Image 1" },
  { id: 4, src: "/Gallery6.png", label: "Gallery Image 6" },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null
    );
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleryItems.length : null
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, goPrev, goNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedIndex]);

  return (
    <>
      <section id="gallery" className="pt-6 pb-8 bg-background">
        <div className="container mx-auto px-4">

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
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
                onClick={() => openImage(index)}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.88)", backdropFilter: "blur(6px)" }}
            onClick={closeImage}
          >
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              src={galleryItems[selectedIndex].src}
              alt={galleryItems[selectedIndex].label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-5 flex gap-2">
              {galleryItems.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === selectedIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                    }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;