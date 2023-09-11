"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Image from "next/image";
import { Spin } from "antd";
import Link from "next/link";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    selectedOption: "",
  });
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

    // Check if the selected value is "Student Visa"
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(formData);
    setIsLoading(false);
    router.push("/enquiry");
  };

  return (
    <>
      <section className="min-h-screen bg-gray-100">
        <div className="h-[4rem] bg-[#395062] md:bg-gray-100 sm:h-[5rem] md:h-[4rem]">
          <Link href="/">
            <Image
              src="Icong.svg"
              alt="logo"
              width={40}
              height={40}
              className="pt-2 pl-2 w-[50px] h-[50px]"
            />
          </Link>
        </div>
        {isLoading ? (
          <Spin />
        ) : (
          <div className="max-w-5xl mx-auto bg-white flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-auto relative flex">
              <Image
                src="/airplane2.png"
                alt="profile-pic"
                width={400}
                height={550}
                className="h-[600px] w-full"
              />
              <div className="absolute left-16 lg:left-[25%] top-[25%] w-[250px] h-[250px] shadow-xl bg-white rounded-3xl backdrop-blur-sm bg-white/30">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/logo1.svg"
                    alt="logo"
                    width={150}
                    height={80}
                    className="pt-10 w-[75%] h-auto"
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
                </div>
              </div>
              <div className="absolute left-[30%] lg:left-[35%] bottom-8">
                {" "}
                <a
                  href="http://www.gantavyglobal.com" // Add "http://" or "https://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 text-xs text-light pt-2"
                >
                  www.gantavyglobal.com
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col justify-center items-start pl-8 lg:pl-20 py-[45px]">
                <h2 className="text-2xl font-bold text-[#395062]">
                  Submit your details
                </h2>
                <p className="text-sm text-gray-500 font-light">
                  Enjoy all the dreams with Gantavy immigration
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="pt-2 flex flex-col gap-2"
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
                    />
                  </div>
                  <div className="flex flex-col">
                    <FormControl variant="standard" className="w-[300px]">
                      <InputLabel id="selectedOption-label">
                        Interested program
                      </InputLabel>
                      <Select
                        labelId="selectedOption-label"
                        id="selectedOption"
                        name="selectedOption"
                        value={formData.selectedOption}
                        onChange={handleDropdownChange}
                        label="Interested program"
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
                    <label
                      className="text-gray-400 text-sm pt-2"
                      htmlFor="fileInput"
                    >
                      Upload CV (Optional)
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      name="fileInput"
                      onChange={handleFileChange}
                      className="w-[300px] px-4 py-2 border border-b-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-400 text-sm"
                    />
                  </div>

                  <button
                    className="bg-[#395062] w-[300px] rounded-full mt-3 px-4  py-2 text-white hover:scale-105 transition"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
                <div className="flex gap-4 pt-4 text-gray-300 text-sm ">
                  <div className="hover:text-blue-300 cursor-pointer">
                    Terms & Conditions
                  </div>
                  <div>|</div>
                  <div className="hover:text-blue-300 cursor-pointer">
                    Privacy Policy
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
