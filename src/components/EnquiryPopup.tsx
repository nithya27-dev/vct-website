import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxzvgmLqgRLO-jHsGpxFFwhA3QyUkIxzQFs9weRD8k_eOwAGi5png7_S0h_jwJEckh6OQ/exec";

type Status = "idle" | "loading" | "success" | "error";

const EnquiryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => setShowClose(true), 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {

      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("email", form.email);
      formData.append("comment", form.comment);

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      setStatus("success");

      setTimeout(() => {
        handleClose();
      }, 2500);

    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const isFormValid =
    form.name.trim().length > 0 &&
    form.phone.trim().length >= 10 &&
    form.email.trim().length > 0 &&
    form.email.includes("@");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header bar */}
              <div className="h-2 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500" />

              <div className="bg-white dark:bg-card px-7 py-7">

                {/* Close Button */}
                <AnimatePresence>
                  {showClose && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={handleClose}
                      className="absolute top-5 right-5"
                    >
                      <X className="w-4 h-4" />
                    </motion.button>
                  )}
                </AnimatePresence>

                {/* Header Text */}
                <div className="mb-6 pr-6">
                  <span className="text-xs font-semibold text-orange-500 uppercase">
                    Free Enquiry
                  </span>

                  <h2 className="text-2xl font-bold">
                    Start Your Cloud Career
                    <span className="text-orange-500"> Today</span>
                  </h2>

                  <p className="text-sm text-gray-500">
                    Fill in your details — our team will reach out within 24 hours.
                  </p>
                </div>

                {/* Success */}
                {status === "success" && (
                  <div className="text-center py-8">
                    <CheckCircle className="w-14 h-14 text-green-500 mx-auto" />
                    <p className="font-semibold mt-3">
                      Thank you! We'll contact you soon.
                    </p>
                  </div>
                )}

                {/* Error */}
                {status === "error" && (
                  <div className="text-center py-6">
                    <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
                    <p>Something went wrong.</p>
                  </div>
                )}

                {/* Form */}
                {(status === "idle" || status === "loading") && (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email address"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                      />
                    </div>

                    {/* Comment */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Comment <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <textarea
                        name="comment"
                        rows={3}
                        placeholder="Anything you'd like us to know…"
                        value={form.comment}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={!isFormValid || status === "loading"}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-400 disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Get a Free Callback
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-500">
                      We respect your privacy — no spam.
                    </p>

                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnquiryPopup;