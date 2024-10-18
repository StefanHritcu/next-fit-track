"use client";

import { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qjlmyymlqfkcryioeazd.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqbG15eW1scWZrY3J5aW9lYXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4Mzc2OTAsImV4cCI6MjA0NDQxMzY5MH0.imE42wsLh1NaxFDWWTYo58Q81lGRCchl8-NfuEqouyg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const InfoContent: FC = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Ottieni l'utente corrente
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  const formik = useFormik({
    initialValues: {
      gender: "",
      ageRange: "",
      sportActivity: "",
      jobActivity: "",
      sleepQuality: "",
      dietaryPreference: "",
    },
    validationSchema: Yup.object({
      gender: Yup.string().required("Gender is required"),
      ageRange: Yup.string().required("Age range is required"),
      sportActivity: Yup.string().required("Sport activity level is required"),
      jobActivity: Yup.string().required("Job activity level is required"),
      sleepQuality: Yup.string().required("Sleep quality is required"),
      dietaryPreference: Yup.string().required(
        "Dietary preference is required"
      ),
    }),
    onSubmit: async (values) => {
      if (user) {
        try {
          const { data, error } = await supabase
            .from("user_data")
            .insert([{ ...values, user_id: user.id }]);

          if (error) {
            console.error("Error inserting data:", error);
          } else {
            console.log("Data inserted successfully:", data);
          }
        } catch (error) {
          console.error("Error fetching user or inserting data:", error);
        }
      } else {
        console.error("User is not authenticated. Please log in.");
      }
    },
  });
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md py-4 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Add More Information</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Gender</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.gender === "male"}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.gender === "female"}
                className="mr-2"
              />
              Female
            </label>
          </div>
          {formik.touched.gender && formik.errors.gender && (
            <p className="text-red-500 text-sm">{formik.errors.gender}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Age Range</label>
          <select
            title="age range"
            name="ageRange"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ageRange}
            className="w-full p-2 border rounded"
          >
            <option value="" label="Select your age range" />
            <option value="10-20" label="10-20" />
            <option value="21-30" label="21-30" />
            <option value="31-40" label="31-40" />
            <option value="41-50" label="41-50" />
            <option value="51+" label="51+" />
          </select>
          {formik.touched.ageRange && formik.errors.ageRange && (
            <p className="text-red-500 text-sm">{formik.errors.ageRange}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">
            Sport Activity Level
          </label>
          <select
            title="sport activity"
            name="sportActivity"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sportActivity}
            className="w-full p-2 border rounded"
          >
            <option value="" label="Select your activity level" />
            <option value="sedentary" label="Sedentary" />
            <option value="normal" label="Normal" />
            <option value="active" label="Active" />
            <option value="very_active" label="Very Active" />
          </select>
          {formik.touched.sportActivity && formik.errors.sportActivity && (
            <p className="text-red-500 text-sm">
              {formik.errors.sportActivity}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">
            Job Activity Level
          </label>
          <select
            title="job activity level"
            name="jobActivity"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.jobActivity}
            className="w-full p-2 border rounded"
          >
            <option value="" label="Select your job activity level" />
            <option value="sedentary_job" label="Sedentary Job" />
            <option value="moderate_physical" label="Moderate Physical Work" />
            <option value="intense_physical" label="Intense Physical Work" />
          </select>
          {formik.touched.jobActivity && formik.errors.jobActivity && (
            <p className="text-red-500 text-sm">{formik.errors.jobActivity}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Sleep Quality</label>
          <select
            title="sleep quality"
            name="sleepQuality"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sleepQuality}
            className="w-full p-2 border rounded"
          >
            <option value="" label="Select your sleep quality" />
            <option value="poor" label="Poor" />
            <option value="average" label="Average" />
            <option value="good" label="Good" />
            <option value="excellent" label="Excellent" />
          </select>
          {formik.touched.sleepQuality && formik.errors.sleepQuality && (
            <p className="text-red-500 text-sm">{formik.errors.sleepQuality}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">
            Dietary Preference
          </label>
          <select
            title="dietary preference"
            name="dietaryPreference"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dietaryPreference}
            className="w-full p-2 border rounded"
          >
            <option value="" label="Select your dietary preference" />
            <option value="omnivore" label="Omnivore" />
            <option value="vegetarian" label="Vegetarian" />
            <option value="vegan" label="Vegan" />
            <option value="gluten_free" label="Gluten-Free" />
          </select>
          {formik.touched.dietaryPreference &&
            formik.errors.dietaryPreference && (
              <p className="text-red-500 text-sm">
                {formik.errors.dietaryPreference}
              </p>
            )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Additional Data
        </button>
      </form>
    </div>
  );
};

export default InfoContent;
