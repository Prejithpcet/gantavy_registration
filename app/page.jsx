"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Image from "next/image";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "./firebase";

export default function page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    selectedOption: "",
    imgUrl: "",
  });
  useEffect(() => {
    console.log("FormData:", formData);
  }, [formData.imgUrl]);
  const [file, setFile] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const router = useRouter();
  const handleDropdownChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (value === "Student Visa") {
      window.open(
        "https://www.applyboard.com/partners/1332424/intake-form",
        "_blank"
      );
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    if (file) {
      const imageRef = ref(storage, `/cv/${file.name + v4()}`);
      try {
        const snapshot = await uploadBytes(imageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);

        setFormData((prevData) => ({
          ...prevData,
          imgUrl: downloadURL,
        }));
        alert("CV Uploaded");
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Error uploading CV");
      }
    }
    router.push("/enquiry");
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="w-[430px] sm:h-[600px] sm:w-[920px] flex flex-col sm:flex-row">
        {/* Left Half with Background Image */}
        <div
          className="w-[100%] h-[700px] sm:w-1/2 sm:h-full bg-cover bg-center relative"
          style={{ backgroundImage: "url(/airplane2.png)" }}
        >
          {/* Content for the left half */}

          {/* Centered div within the left half */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] shadow-xl rounded-3xl backdrop-blur-sm bg-white/20">
              <Image
                src="/logo1.svg"
                alt="logo"
                width={150}
                height={80}
                className="w-[85%] sm:w-[80%] h-auto"
              />
              <span className="text-white text-xl pt-2 font-semibold">
                Soar to new horizons
              </span>
              <span className="text-white text-xl font-semibold">
                with Gantavy
              </span>
              <p className="text-white text-xs pt-1">
                Where Dreams Take Flight
              </p>
              <p className="text-white text-xs">
                Gantavy brings you the dreams
              </p>
            </div>{" "}
            <a
              href="http://www.gantavyglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xs font-light absolute bottom-[32px]"
            >
              www.gantavyglobal.com
            </a>
          </div>
        </div>

        {/* Right Half */}
        <div className="w-[100%] h-[700px] sm:w-1/2 sm:h-full bg-white flex flex-col justify-center items-center p-4">
          <h2 className="text-2xl font-bold text-[#395062]">
            Submit your details
          </h2>
          <p className="text-sm text-gray-500 font-light">
            Enjoy all the dreams with Gantavy immigration
          </p>
          <form
            onSubmit={handleSubmit}
            className="pt-2 flex flex-col gap-2 w-[80%] justify-center items-center"
          >
            <div>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="standard"
                value={formData.name}
                onChange={handleInputChange}
                className="w-[300px]"
                required
                InputLabelProps={{
                  sx: {
                    color: "#BFBFBF",
                    fontSize: "15px",
                  },
                }}
              />
            </div>
            <div>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="standard"
                value={formData.email}
                onChange={handleInputChange}
                className="w-[300px]"
                required
                InputLabelProps={{
                  sx: {
                    color: "#BFBFBF",
                    fontSize: "15px",
                  },
                }}
              />
            </div>
            <div>
              <TextField
                id="phone"
                name="phone"
                label="Phone"
                variant="standard"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-[300px]"
                required
                InputLabelProps={{
                  sx: {
                    color: "#BFBFBF",
                    fontSize: "15px",
                  },
                }}
              />
            </div>
            <div>
              <TextField
                id="age"
                name="age"
                label="Age"
                variant="standard"
                type="number"
                inputProps={{ min: "1", max: "100" }}
                value={formData.age}
                onChange={handleInputChange}
                className="w-[300px]"
                required
                InputLabelProps={{
                  sx: {
                    color: "#BFBFBF",
                    fontSize: "15px",
                  },
                }}
              />
            </div>
            <div className="flex flex-col">
              <FormControl variant="standard" className="w-[300px]">
                <InputLabel
                  id="selectedOption-label"
                  required
                  InputLabelProps={{
                    sx: {
                      color: "#BFBFBF",
                    },
                  }}
                >
                  Interested program
                </InputLabel>
                <Select
                  labelId="selectedOption-label"
                  id="selectedOption"
                  name="selectedOption"
                  value={formData.selectedOption}
                  onChange={handleDropdownChange}
                  label="Interested program"
                  required
                  inputProps={{
                    sx: {
                      color: "#BFBFBF",
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Skilled Immigration">
                    Skilled Immigration
                  </MenuItem>
                  <MenuItem value="Business Immigration">
                    Business Immigration
                  </MenuItem>
                  <MenuItem value="Student Visa">Student Visa</MenuItem>
                  <MenuItem value="Visit Visa">Visit Visa</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 text-sm pt-2" htmlFor="fileInput">
                Upload CV (Optional)
              </label>
              <input
                type="file"
                id="fileInput"
                name="fileInput"
                onChange={handleFileChange}
                className="w-[300px] px-4 py-2 border border-b-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-400 text-xs"
              />
            </div>

            <button
              className="bg-[#395062] w-[300px] rounded-full mt-3 px-4  py-2 text-white hover:scale-105 transition"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="flex justify-center gap-4 pt-4 text-gray-300 text-xs">
            <a
              href="https://gantavyglobal.com/terms-and-conditions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="hover:text-blue-300 cursor-pointer">
                Terms & Conditions
              </div>
            </a>

            <div>|</div>
            <a
              href="https://gantavyglobal.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="hover:text-blue-300 cursor-pointer">
                Privacy Policy
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
