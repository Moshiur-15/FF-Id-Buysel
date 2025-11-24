'use client'
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'sonner';
const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    uid: 0,
    price: 0,
    level: 0,
    evoGun: 0,
    evoMax: 0,
    totalVolt: 0,
    totalMask: 0,
    totalHere: 0,
    totalPanth: 0,
    totalEmote: 0,
    animation: "",
    skywing: "",
    images: ["", "", "", "", "", "", "", "", "", ""],
    video: "",
    diamondClaimable: 0,
    diamond: 0,
    status: "available",
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: ["uid", "price", "level", "evoGun", "evoMax", "totalVolt", "totalMask", "totalHere", "totalPanth", "totalEmote", "diamondClaimable", "diamond"].includes(name)
        ? Number(value)
        : value,
    }));
  };

  const handleImageChange = async (index, file) => {
    if (!file) return;
    setUploading(true);

    const imgData = new FormData();
    imgData.append("image", file);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`,
        imgData
      );

      const imageUrl = res.data.data.display_url;

      const newImages = [...formData.images];
      newImages[index] = imageUrl;

      setFormData((prev) => ({
        ...prev,
        images: newImages,
      }));
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Image upload failed!");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/api/add-id', formData);
      toast.success("ID added successfully!");
      if (res.status !== 200) {
        toast.error("Failed to add ID. Please try again.");
        return;
      }
    }
    catch (error) {
      toast.error("Failed to add ID. Please try again.");
      return;
    }
  };

  return (
    <>
      <div className="mb-8 border-b-4 border-black pb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-black">ADD GAME ID</h1>
        <p className="text-gray-600 mt-2">Fill in the details to add a new gaming account</p>
      </div>
      <div className="space-y-6">
        <div className="bg-slate-100 text-black p-6 rounded">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-black"></div>
            BASIC INFORMATION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">PLAYER NAME *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-black focus:border-gray-300 outline-none rounded"
                placeholder="Enter player name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">UID *</label>
              <input
                type="number"
                name="uid"
                value={formData.uid}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-black focus:border-gray-300 outline-none"
                placeholder="Enter UID"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">PRICE (BDT) *</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-black focus:border-gray-300 outline-none"
                placeholder="Enter price"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">LEVEL *</label>
              <input
                type="number"
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-black focus:border-gray-300 outline-none rounded"
                placeholder="Enter level"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">DESCRIPTION *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-black focus:border-gray-300 outline-none rounded"
                placeholder="Enter account description"
                rows="3"
              />
            </div>
          </div>
        </div>

        <div className='bg-slate-100 p-6 rounded'>
          <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
            <div className="w-1 h-6 bg-black"></div>
            GAME STATISTICS
          </h2>

          <div className="grid grid-cols-1 lg:gc xl:grid-cols-3 gap-4 ">
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">EVO GUN</label>
              <input
                type="number"
                name="evoGun"
                value={formData.evoGun}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white focus:border-gray-600 outline-none rounded"
                placeholder="e.g., 5"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">EVO MAX</label>
              <input
                type="number"
                name="evoMax"
                value={formData.evoMax}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white focus:border-gray-600 outline-none rounded"
                placeholder="e.g., 1, 1.5"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">TOTAL VOLT</label>
              <input
                type="number"
                name="totalVolt"
                value={formData.totalVolt}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white focus:border-gray-600 outline-none rounded"
                placeholder="Enter total volt"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">TOTAL MASK</label>
              <input
                type="number"
                name="totalMask"
                value={formData.totalMask}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white focus:border-gray-600 outline-none rounded"
                placeholder="Enter total mask"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">TOTAL HERE</label>
              <input
                type="number"
                name="totalHere"
                value={formData.totalHere}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white focus:border-gray-600 outline-none rounded"
                placeholder="Enter total here"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">TOTAL PANTH</label>
              <input
                type="number"
                name="totalPanth"
                value={formData.totalPanth}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white focus:border-gray-600 outline-none rounded"
                placeholder="Enter total panth"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">TOTAL EMOTE</label>
              <input
                type="number"
                name="totalEmote"
                value={formData.totalEmote}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white focus:border-gray-600 outline-none rounded"
                placeholder="Enter total emote"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">DIAMOND CLAIMABLE</label>
              <input
                type="number"
                name="diamondClaimable"
                value={formData.diamondClaimable}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white focus:border-gray-600 outline-none rounded"
                placeholder="e.g., 1000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-black">DIAMOND</label>
              <input
                type="number"
                name="diamond"
                value={formData.diamond}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white focus:border-gray-600 outline-none rounded"
                placeholder="e.g., 1000"
              />
            </div>

          </div>
        </div>

        <div className="bg-slate-100 text-black p-6 rounded">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-black"></div>
            PREMIUM ITEMS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">ANIMATION</label>
              <input
                type="text"
                name="animation"
                value={formData.animation}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-black outline-none rounded"
                placeholder="e.g., DRAGON FURY"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">SKYWING</label>
              <input
                type="text"
                name="skywing"
                value={formData.skywing}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-black outline-none rounded"
                placeholder="e.g., PHOENIX SKYWING"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-100 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4 text-black flex items-center gap-2">
            <div className="w-1 h-6 bg-black"></div>
            IMAGE SECTION
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
            {formData.images.map((img, index) => (
              <div key={index}>
                <label className="block text-sm font-semibold mb-2 text-black">
                  Image {index + 1}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(index, e.target.files[0])}
                  className="w-full border-2 rounded bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-100 file:text-blue-700 cursor-pointer active:scale-95 duration-300"
                />

                {img && (
                  <img
                    src={img}
                    alt={`Uploaded ${index + 1}`}
                    className="mt-1 rounded border-gray-300 w-full h-40 object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          {uploading && <p className="text-center text-blue-500">Uploading image...</p>}

          <div>
            <label className="block text-xl font-semibold mb-2 text-black">
              VIDEO LINK (YouTube)
            </label>
            <input
              type="url"
              name="video"
              value={formData.video}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 outline-none rounded"
              placeholder="https://youtube.com/..."
            />
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={handleSubmit}
            disabled={uploading}
            className="px-12 py-3 bg-[#215aecbf] text-white text-lg font-bold rounded active:scale-95 duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#215aecfb]"
          >
            {uploading ? "Uploading..." : "ADD GAME ID"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;