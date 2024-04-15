import ImgUploadField from "@/components/core/inputs/ImageUploadField";
import TextInput from "@/components/core/inputs/TextInput";
import TextAreaInput from "@/components/core/inputs/TextareaInput";
import MyCategory from "@/components/hooks/category/category";
import MyLocation from "@/components/hooks/location/location";
import { Button } from "@/components/ui/button";
import axios from "axios";

import { useState } from "react";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [image, setImage] = useState({});
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedThana, setSelectedThana] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);
  const [selectedArea, setSelectedArea] = useState("");
  const [roadNumber, setRoadNumber] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImage(selectedFile)
      // setValue(selectedFile);
      // const reader = new FileReader();
      // reader.onload = (event) => {
      //   setImage(event.target.result);
      // };
      // reader.readAsDataURL(selectedFile);
    }

    const formData = {
      title,
      post,
      image: image,

      division: selectedDivision,
      district: selectedDistrict,
      thana: selectedThana,
      ward: selectedWard,
      area: selectedArea,
      road: roadNumber,

      category: selectedCategory,
      subcategory: selectedSubcategory,

      client_id: "client_id",
    };
    
   

      try {
        await axios.post(`${import.meta.env.VITE_LOCAL_API_URL}/api/v1/hall_room_post`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('File uploaded successfully');
      
      // const response = await fetch(
      //   `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/hall_room_post`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   }
      // );

      // if (response.ok) {
      //   // Request successful
      //   const responseData = await response.json();

      //   // navigate("/login");
      //   console.log("HallRoom :", responseData);
      //   // Handle success scenario here (e.g., redirect user, show success message)
      // } else {
      //   // Request failed
      //   const errorData = await response.json();
      //   setError(errorData.message || "Registration failed.");
      //   // Handle error scenario here (e.g., display error message to the user)
      // }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An unexpected error occurred.");
      // Handle unexpected errors here
    }
  };

  return (
    <div className="space-y-3">
      <h5 className="font-semibold">Create a Post</h5>
      <div>
        <form
          className="mt-10 space-y-4"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          method="post"
        >
          <div>
            <ImgUploadField
              setValue={setImage}
              value={""}
              error={""}
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div>
            <TextInput
              label="Title"
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full">
            <TextAreaInput
              id="post"
              name="post"
              className="w-full h-full whitespace-pre-line"
              label="Whats on your mind.."
              onChange={(e) => setPost(e.target.value)}
            />
          </div>

          {/* Location */}
          <MyLocation
            selectedDivision={selectedDivision}
            selectedDistrict={selectedDistrict}
            selectedThana={selectedThana}
            selectedWard={selectedWard}
            selectedArea={selectedArea}
            roadNumber={roadNumber}
            setSelectedDivision={setSelectedDivision}
            setSelectedDistrict={setSelectedDistrict}
            setSelectedThana={setSelectedThana}
            setSelectedWard={setSelectedWard}
            setSelectedArea={setSelectedArea}
            setRoadNumber={setRoadNumber}
          />
          {/* Category */}
          <MyCategory
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSubcategory={selectedSubcategory}
            setSelectedSubcategory={setSelectedSubcategory}
          />

          <div className="w-full">
            <Button className="w-full" type="submit">
              Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
